"use client";

import { useRef, useState } from "react";
import { HIND, OFFERS, SHIPPING_OPTS, SIZES } from "./data";
import OfferOption from "./order/OfferOption";
import FormField from "./order/FormField";
import ShippingOptions from "./order/ShippingOptions";
import SummaryRow from "./order/SummaryRow";
import { trackEvent } from "@/lib/fbPixel";
import { getUtmParams } from "@/lib/attribution";
import { Offer, OrderResponse, ShippingOption } from "@/lib/types";

const BD_PHONE_REGEX = /^(?:\+?880|0)1[3-9]\d{8}$/;

type Props = {
  slug?: string;
  offers?: Offer[];
  sizes?: string[];
  shippingOptions?: ShippingOption[];
  hasColor?: boolean;
  hasNote?: boolean;
};

export default function OrderForm({
  slug = "guddi-bra",
  offers = OFFERS,
  sizes = SIZES,
  shippingOptions = SHIPPING_OPTS,
  hasColor = false,
  hasNote = false,
}: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [color, setColor] = useState("");
  const [note, setNote] = useState("");
  const [size, setSize] = useState(sizes[0]);
  const [offerIdx, setOfferIdx] = useState(0);
  const [shipIdx, setShipIdx] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [orderId, setOrderId] = useState<string | null>(null);
  const [phoneTouched, setPhoneTouched] = useState(false);
  const lastLeadPhoneRef = useRef<string | null>(null);

  const offer = offers[offerIdx];
  const shipping = shippingOptions[shipIdx].cost;
  const total = offer.price + shipping;
  const phoneValid = BD_PHONE_REGEX.test(phone.trim());

  function maybeCaptureLead() {
    const trimmed = phone.trim();
    if (!phoneValid || trimmed === lastLeadPhoneRef.current) return;
    lastLeadPhoneRef.current = trimmed;

    const { fbclid, ...utm } = getUtmParams();
    fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        phone: trimmed,
        ...(name ? { name } : {}),
        landing_page: slug,
        product_id: offer.product_id,
        ...utm,
        ...(fbclid ? { fbclid } : {}),
      }),
    }).catch(() => {
      // best-effort: a dropped lead capture must not block the user flow
    });
  }

  async function handleSubmit() {
    setPhoneTouched(true);
    if (!name || !phone || !address || !phoneValid || submitting) return;
    setSubmitting(true);
    try {
      // Hits this app's own server route, never the external API directly from the browser.
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          product_id: offer.product_id,
          name,
          phone,
          address,
          size,
          shipping_option: shippingOptions[shipIdx].label,
          quantity: 1,
          ...(hasColor && color ? { color } : {}),
          ...(hasNote && note ? { note } : {}),
        }),
      });
      if (!res.ok) return;
      const json = await res.json();
      const order = json.data as OrderResponse;
      setOrderId(String(order.id));
      trackEvent("Purchase", { value: order.total_amount, currency: "BDT", product_slug: slug });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="order" style={{ maxWidth: 1140, margin: "46px auto 70px" }} className="px-4 sm:px-[22px]">
      <div style={{ background: "#F0F6FD", borderStyle: "solid", borderWidth: "17px 5px 5px 5px", borderColor: "var(--accent, #F85606)", borderRadius: 16 }} className="px-0 pt-[10px] pb-[10px] sm:px-[30px] sm:pt-[30px] sm:pb-[30px]">
        <h3 style={{ fontFamily: HIND, fontWeight: 700, color: "#222", margin: "0 0 26px" }} className="text-xl sm:text-[25px]">আপনার পছন্দের অফারটি নির্বাচন করুন</h3>

        {offers.map((o, i) => (
          <OfferOption
            key={o.label}
            img={o.img}
            title={o.label}
            price={o.price}
            oldPrice={o.old_price}
            checked={i === offerIdx}
            onSelect={() => {
              setOfferIdx(i);
              trackEvent("InitiateCheckout", { value: o.price + shipping, currency: "BDT", product_slug: slug });
            }}
          />
        ))}

        <div style={{ gap: 48 }} className="grid grid-cols-1 md:grid-cols-[1.05fr_.95fr] gap-8">
          {/* billing */}
          <div>
            <h4 style={{ fontFamily: HIND, fontWeight: 700, color: "#222", margin: "0 0 24px" }} className="text-2xl sm:text-[30px]">Billing details</h4>

            <FormField label="আপনার নাম" value={name} onChange={setName} placeholder="এখানে আপনার নাম লিখুন" />
            <FormField
              label="মোবাইল নাম্বার"
              value={phone}
              onChange={(v) => {
                setPhone(v);
                setPhoneTouched(true);
              }}
              onBlur={maybeCaptureLead}
              placeholder="এখানে মোবাইল নম্বরটি লিখুন"
            />
            {phoneTouched && phone && !phoneValid && (
              <p style={{ fontFamily: HIND, color: "#e23b1f", fontSize: 15, margin: "-16px 0 16px" }}>
                সঠিক বাংলাদেশী মোবাইল নাম্বার দিন (যেমন: 01XXXXXXXXX)
              </p>
            )}
            <FormField label="সম্পূর্ন ঠিকানা" value={address} onChange={setAddress} placeholder="সম্পূর্ন ঠিকানা" />

            <label style={{ display: "block", fontFamily: HIND, fontWeight: 600, fontSize: 20, color: "#333", marginBottom: 8 }}>
              সাইজ সিলেক্ট করুন <span style={{ color: "#e23b1f" }}>*</span>
            </label>
            <select
              value={size}
              onChange={(e) => setSize(e.target.value)}
              style={{ width: "100%", fontFamily: HIND, fontSize: 19, padding: "13px 16px", border: "1px solid #cdd6e0", borderRadius: 8, background: "#fff", marginBottom: 30, outline: "none" }}
            >
              {sizes.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>

            {hasColor && (
              <FormField label="কালার লিখুন (optional)" value={color} onChange={setColor} placeholder="কালার লিখুন" required={false} />
            )}

            {hasNote && (
              <>
                <label style={{ display: "block", fontFamily: HIND, fontWeight: 600, fontSize: 20, color: "#333", marginBottom: 8 }}>
                  Order notes (optional)
                </label>
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Order notes"
                  rows={3}
                  style={{ width: "100%", fontFamily: HIND, fontSize: 19, padding: "13px 16px", border: "1px solid #cdd6e0", borderRadius: 8, background: "#fff", marginBottom: 8, outline: "none", resize: "vertical" }}
                />
                <p style={{ fontFamily: HIND, fontSize: 14, color: "#777", margin: "0 0 22px" }}>
                  Notes about your order, e.g. special notes for delivery.
                </p>
              </>
            )}

            <h4 style={{ fontFamily: HIND, fontWeight: 700, color: "#222", margin: "0 0 18px" }} className="text-2xl sm:text-[30px]">Shipping</h4>
            <ShippingOptions
              shipIdx={shipIdx}
              onChange={(i) => {
                setShipIdx(i);
                trackEvent("InitiateCheckout", { value: offer.price + shippingOptions[i].cost, currency: "BDT", product_slug: slug });
              }}
              options={shippingOptions}
            />
          </div>

          {/* order summary */}
          <div>
            <h4 style={{ fontFamily: HIND, fontWeight: 700, color: "#222", margin: "0 0 22px" }} className="text-2xl sm:text-[30px]">Your order</h4>
            <SummaryRow label="Product" value={`৳ ${offer.price}`} bold size={22} />
            <div style={{ alignItems: "center", padding: "18px 0", borderBottom: "1px dashed #c5cfdb" }} className="flex flex-wrap gap-3 sm:flex-nowrap sm:gap-[18px]">
              <img src={offer.img} alt="" style={{ objectFit: "cover", borderRadius: 4 }} className="w-14 h-16 sm:w-16 sm:h-[74px]" />
              <span style={{ fontFamily: HIND, fontWeight: 600, fontSize: 21 }} className="basis-full sm:basis-auto sm:flex-1">{offer.label}</span>
              <span style={{ fontFamily: HIND, fontSize: 20, color: "#555" }}>× 1</span>
              <span style={{ fontFamily: HIND, fontWeight: 600, fontSize: 21, marginLeft: "auto" }} className="sm:ml-0">৳ {offer.price}</span>
            </div>
            <SummaryRow label="Subtotal" value={`৳ ${offer.price}`} bold />
            <SummaryRow label="Shipping" value={`৳ ${shipping}`} />
            <SummaryRow label="Total" value={`৳ ${total}`} bold size={24} dashed={false} />

            <p style={{ fontFamily: HIND, fontWeight: 600, fontSize: 21, color: "#333", margin: "10px 0 10px" }}>ক্যাশ অন ডেলিভারি</p>
            <div style={{ position: "relative", background: "#ededed", borderRadius: 8, padding: "18px 20px", marginBottom: 24, fontFamily: HIND, fontSize: 20, color: "#3a3a3a" }}>
              <span style={{ position: "absolute", top: -9, left: 24, width: 16, height: 16, background: "#ededed", transform: "rotate(45deg)" }} />
              পণ্য হাতে পেয়ে টাকা পরিশোধ করুন
            </div>

            {orderId ? (
              <div style={{ fontFamily: HIND, fontWeight: 600, color: "#1d7a3a", textAlign: "center", padding: 16 }}>
                ধন্যবাদ! আপনার অর্ডার গ্রহণ করা হয়েছে। অর্ডার নম্বর: {orderId}
              </div>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={submitting || (phoneTouched && !phoneValid)}
                style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 10, fontFamily: HIND, fontWeight: 700, color: "#fff", background: "var(--accent, #f85606)", border: "none", borderRadius: 12, padding: 18, cursor: submitting ? "default" : "pointer", boxShadow: "0 5px 0 rgba(0,0,0,.12)", opacity: submitting || (phoneTouched && !phoneValid) ? 0.7 : 1 }}
                className="text-xl sm:text-2xl"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
                {submitting ? "অপেক্ষা করুন..." : `অর্ডার করুন ৳ ${total}`}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
