"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { HIND, OFFERS, SHIPPING_OPTS, SIZES } from "./data";
import OfferOption from "./order/OfferOption";
import FormField from "./order/FormField";
import ShippingOptions from "./order/ShippingOptions";
import SummaryRow from "./order/SummaryRow";

// sweetalert2 is heavy (~40KB gz) and only needed after the user submits —
// load it lazily so it stays out of the initial page bundle.
const loadSwal = () => import("sweetalert2").then((m) => m.default);
import { trackEvent } from "@/lib/fbPixel";
import { getSessionToken, getUtmParams } from "@/lib/attribution";
import { Offer, OrderResponse, ShippingOption } from "@/lib/types";

const BD_PHONE_REGEX = /^(?:\+?880|0)1[3-9]\d{8}$/;

type Props = {
  slug?: string;
  offers?: Offer[];
  sizes?: string[];
  shippingOptions?: ShippingOption[];
  hasColor?: boolean;
  hasNote?: boolean;
  contactPhone?: string;
};

export default function OrderForm({
  slug = "guddi-bra",
  offers = OFFERS,
  sizes = SIZES,
  shippingOptions = SHIPPING_OPTS,
  hasColor = false,
  hasNote = false,
  contactPhone,
}: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [color, setColor] = useState("");
  const [note, setNote] = useState("");
  const [size, setSize] = useState(sizes[0]);
  const [offerIdx, setOfferIdx] = useState(0);
  const [variantIdx, setVariantIdx] = useState(0);
  const [shipIdx, setShipIdx] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [orderId, setOrderId] = useState<string | null>(null);
  const [phoneTouched, setPhoneTouched] = useState(false);
  const lastLeadPhoneRef = useRef<string | null>(null);
  const icFiredRef = useRef(false);

  const offer = offers[offerIdx];
  // offer.variants is the canonical size-wise pricing source; offer.size is legacy single-size.
  const variants = offer.variants;
  const hasVariants = !!variants && variants.length > 0;

  useEffect(() => {
    setVariantIdx(0);
  }, [offerIdx]);

  const selectedVariant = hasVariants ? variants![Math.min(variantIdx, variants!.length - 1)] : undefined;
  const effectivePrice = selectedVariant?.price ?? offer.price;
  const effectiveSize = selectedVariant?.size ?? size;
  const effectiveImg = selectedVariant?.image ?? offer.img;

  const shipping = shippingOptions[shipIdx].cost;
  const total = effectivePrice + shipping;
  const phoneValid = BD_PHONE_REGEX.test(phone.trim());
  // Identity attached to CAPI events when available — boosts Event Match Quality.
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  function identity() {
    return {
      ...(phoneValid ? { phone: phone.trim() } : {}),
      ...(name ? { name } : {}),
      ...(emailValid ? { email: email.trim() } : {}),
    };
  }

  // Fire InitiateCheckout at most once per page session — repeated fires get
  // fresh event_ids that Meta can't dedupe and inflate the funnel.
  function fireInitiateCheckout(value: number) {
    if (icFiredRef.current) return;
    icFiredRef.current = true;
    trackEvent("InitiateCheckout", { value, currency: "BDT", product_slug: slug, ...identity() });
  }

  function maybeCaptureLead() {
    const trimmed = phone.trim();
    if (!phoneValid || trimmed === lastLeadPhoneRef.current) return;
    lastLeadPhoneRef.current = trimmed;

    // Phone is valid here → strong-match Lead event to both Pixel and CAPI.
    trackEvent("Lead", { product_slug: slug, ...identity() });

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
          size: effectiveSize,
          shipping_option: shippingOptions[shipIdx].label,
          quantity: 1,
          session_token: getSessionToken(),
          ...(hasColor ? { color: color || null } : {}),
          ...(hasNote ? { note: note || null } : {}),
        }),
      });
      if (!res.ok) {
        const json = await res.json().catch(() => null);
        const Swal = await loadSwal();
        if (json?.errors?.order) {
          Swal.fire({
            icon: "info",
            title: "আপনি ইতিমধ্যে অর্ডার করেছেন",
            html: `আপনি এই পণ্যটি ইতিমধ্যে অর্ডার করেছেন।${contactPhone ? ` বিস্তারিত জানতে আমাদের সাথে যোগাযোগ করুন: <a href="tel:${contactPhone}" style="color:#f85606;font-weight:600;">${contactPhone}</a>` : " বিস্তারিত জানতে আমাদের সাথে যোগাযোগ করুন।"}`,
            confirmButtonColor: "#f85606",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "দুঃখিত!",
            text: json?.message ?? "অর্ডারটি সম্পন্ন করা যায়নি। আবার চেষ্টা করুন।",
            confirmButtonColor: "#f85606",
          });
        }
        return;
      }
      const json = await res.json();
      const order = json.data as OrderResponse;
      setOrderId(String(order.id));
      trackEvent("Purchase", { value: order.total_amount, currency: "BDT", product_slug: slug, ...identity() });
      const Swal = await loadSwal();
      Swal.fire({
        icon: "success",
        title: "ধন্যবাদ!",
        text: `আপনার অর্ডার গ্রহণ করা হয়েছে। অর্ডার নম্বর: ${order.id}`,
        confirmButtonColor: "#f85606",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="order" style={{ maxWidth: 1140, margin: "30px auto 50px" }} className="px-3 xs:px-4 sm:px-5 md:px-6 lg:px-8">
      <div style={{ background: "#F0F6FD", borderStyle: "solid", borderColor: "var(--accent, #F85606)", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }} className="px-3 py-3 xs:px-4 xs:py-4 sm:px-6 sm:py-6 md:px-8 md:py-8 rounded-2xl border-4">
        <h3 style={{ fontFamily: HIND, fontWeight: 700, color: "#222", margin: "0 0 20px" }} className="text-lg xs:text-xl sm:text-2xl md:text-[25px]">আপনার পছন্দের অফারটি নির্বাচন করুন</h3>

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
              fireInitiateCheckout(o.price + shipping);
            }}
          />
        ))}

        <div style={{ gap: 24 }} className="grid grid-cols-1 lg:grid-cols-[1.05fr_.95fr] gap-6 sm:gap-8 lg:gap-10">
          {/* billing */}
          <div>
            <h4 style={{ fontFamily: HIND, fontWeight: 700, color: "#222", margin: "0 0 20px" }} className="text-xl xs:text-2xl sm:text-2xl md:text-[30px]">Billing details</h4>

            <FormField label="আপনার নাম" value={name} onChange={setName} placeholder="এখানে আপনার নাম লিখুন" />
            <FormField
              label="মোবাইল নাম্বার"
              value={phone}
              onChange={(v) => {
                setPhone(v);
                setPhoneTouched(true);
                fireInitiateCheckout(total);
              }}
              onBlur={maybeCaptureLead}
              placeholder="এখানে মোবাইল নম্বরটি লিখুন"
            />
            {phoneTouched && phone && !phoneValid && (
              <p style={{ fontFamily: HIND, color: "#e23b1f", margin: "-14px 0 16px" }} className="text-xs xs:text-sm sm:text-base">
                সঠিক বাংলাদেশী মোবাইল নাম্বার দিন (যেমন: 01XXXXXXXXX)
              </p>
            )}
            {/* <FormField label="ইমেইল (optional)" value={email} onChange={setEmail} placeholder="আপনার ইমেইল" required={false} /> */}
            <FormField label="সম্পূর্ন ঠিকানা" value={address} onChange={setAddress} placeholder="সম্পূর্ন ঠিকানা" />

            <label style={{ display: "block", fontFamily: HIND, fontWeight: 600, color: "#333", marginBottom: 12 }} className="text-base xs:text-lg sm:text-xl md:text-2xl">
              সাইজ সিলেক্ট করুন <span style={{ color: "#e23b1f" }}>*</span>
            </label>
            {hasVariants ? (
              <select
                value={variantIdx}
                onChange={(e) => setVariantIdx(Number(e.target.value))}
                style={{ width: "100%", fontFamily: HIND, border: "1px solid #cdd6e0", borderRadius: 8, background: "#fff", marginBottom: 24, outline: "none" }}
                className="px-3 py-3 xs:px-4 xs:py-3 sm:px-4 sm:py-4 text-base xs:text-lg sm:text-lg focus:ring-2 focus:ring-[var(--accent,#f85606)] focus:border-transparent"
              >
                {variants!.map((v, i) => (
                  <option key={v.id} value={i}>{v.size}</option>
                ))}
              </select>
            ) : (
              <select
                value={size}
                onChange={(e) => setSize(e.target.value)}
                style={{ width: "100%", fontFamily: HIND, border: "1px solid #cdd6e0", borderRadius: 8, background: "#fff", marginBottom: 24, outline: "none" }}
                className="px-3 py-3 xs:px-4 xs:py-3 sm:px-4 sm:py-4 text-base xs:text-lg sm:text-lg focus:ring-2 focus:ring-[var(--accent,#f85606)] focus:border-transparent"
              >
                {sizes.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            )}

            {hasColor && (
              <FormField label="কালার লিখুন (optional)" value={color} onChange={setColor} placeholder="কালার লিখুন" required={false} />
            )}

            {hasNote && (
              <>
                <label style={{ display: "block", fontFamily: HIND, fontWeight: 600, color: "#333", marginBottom: 12 }} className="text-base xs:text-lg sm:text-xl md:text-2xl">
                  Order notes (optional)
                </label>
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Order notes"
                  rows={3}
                  style={{ width: "100%", fontFamily: HIND, border: "1px solid #cdd6e0", borderRadius: 8, background: "#fff", marginBottom: 8, outline: "none", resize: "vertical" }}
                  className="px-3 py-3 xs:px-4 xs:py-3 sm:px-4 sm:py-4 text-base xs:text-lg sm:text-lg focus:ring-2 focus:ring-[var(--accent,#f85606)] focus:border-transparent"
                />
                <p style={{ fontFamily: HIND, color: "#777", margin: "0 0 18px" }} className="text-xs xs:text-sm sm:text-base">
                  Notes about your order, e.g. special notes for delivery.
                </p>
              </>
            )}

            <h4 style={{ fontFamily: HIND, fontWeight: 700, color: "#222", margin: "0 0 16px" }} className="text-xl xs:text-2xl sm:text-2xl md:text-[30px]">Shipping</h4>
            <ShippingOptions
              shipIdx={shipIdx}
              onChange={(i) => {
                setShipIdx(i);
                fireInitiateCheckout(effectivePrice + shippingOptions[i].cost);
              }}
              options={shippingOptions}
            />
          </div>

          {/* order summary */}
          <div>
            <h4 style={{ fontFamily: HIND, fontWeight: 700, color: "#222", margin: "0 0 18px" }} className="text-xl xs:text-2xl sm:text-2xl md:text-[30px]">Your order</h4>
            <SummaryRow label="Product" value={`৳ ${effectivePrice}`} bold size="lg" />
            <div style={{ alignItems: "center", padding: "14px 0", borderBottom: "1px dashed #c5cfdb" }} className="flex flex-wrap gap-3 xs:gap-2 sm:gap-4 md:gap-5">
              <Image src={effectiveImg} alt="" width={64} height={74} sizes="64px" style={{ objectFit: "cover", borderRadius: 4 }} className="w-14 h-16 xs:w-16 xs:h-20 sm:w-16 sm:h-[74px]" />
              <span style={{ fontFamily: HIND, fontWeight: 600 }} className="basis-full xs:basis-auto xs:flex-1 text-base xs:text-lg sm:text-xl md:text-2xl">{offer.label}</span>
              <span style={{ fontFamily: HIND, color: "#555" }} className="text-base xs:text-lg sm:text-xl md:text-2xl">× 1</span>
              <span style={{ fontFamily: HIND, fontWeight: 600, marginLeft: "auto" }} className="text-base xs:text-lg sm:text-xl md:text-2xl sm:ml-0">৳ {effectivePrice}</span>
            </div>
            <SummaryRow label="Subtotal" value={`৳ ${effectivePrice}`} bold />
            <SummaryRow label="Shipping" value={`৳ ${shipping}`} />
            <SummaryRow label="Total" value={`৳ ${total}`} bold size="lg" dashed={false} />

            <p style={{ fontFamily: HIND, fontWeight: 600, color: "#333", margin: "8px 0 10px" }} className="text-base xs:text-lg sm:text-xl md:text-2xl">ক্যাশ অন ডেলিভারি</p>
            <div style={{ position: "relative", background: "#ededed", borderRadius: 8, padding: "14px 16px", marginBottom: 20, fontFamily: HIND, color: "#3a3a3a" }} className="text-base xs:text-lg sm:text-xl md:text-2xl">
              <span style={{ position: "absolute", top: -7, left: 16, width: 14, height: 14, background: "#ededed", transform: "rotate(45deg)" }} />
              পণ্য হাতে পেয়ে টাকা পরিশোধ করুন
            </div>

            {orderId ? (
              <div style={{ fontFamily: HIND, fontWeight: 600, color: "#1d7a3a", textAlign: "center", padding: 14 }} className="text-base xs:text-lg sm:text-xl md:text-2xl">
                ধন্যবাদ! আপনার অর্ডার গ্রহণ করা হয়েছে। অর্ডার নম্বর: {orderId}
              </div>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={submitting || (phoneTouched && !phoneValid)}
                style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, fontFamily: HIND, fontWeight: 700, color: "#fff", background: "var(--accent, #f85606)", border: "none", borderRadius: 12, cursor: submitting ? "default" : "pointer", boxShadow: "0 4px 8px rgba(0,0,0,.15)", opacity: submitting || (phoneTouched && !phoneValid) ? 0.7 : 1 }}
                className="px-4 py-4 xs:px-5 xs:py-4 sm:px-6 sm:py-5 md:px-8 md:py-6 text-base xs:text-lg sm:text-xl md:text-2xl"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
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
