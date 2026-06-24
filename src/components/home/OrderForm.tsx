"use client";

import { useState } from "react";
import { HIND, OFFERS, SHIPPING_OPTS, SIZES } from "./data";
import OfferOption from "./order/OfferOption";
import FormField from "./order/FormField";
import ShippingOptions from "./order/ShippingOptions";
import SummaryRow from "./order/SummaryRow";

export default function OrderForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [size, setSize] = useState("32");
  const [shipIdx, setShipIdx] = useState(0);

  const shipping = SHIPPING_OPTS[shipIdx].cost;
  const total = 999 + shipping;

  return (
    <section id="order" style={{ maxWidth: 1140, margin: "46px auto 70px" }} className="px-4 sm:px-[22px]">
      <div style={{ background: "#F0F6FD", borderStyle: "solid", borderWidth: "17px 5px 5px 5px", borderColor: "#F85606", borderRadius: 16 }} className="px-0 pt-[10px] pb-[10px] sm:px-[30px] sm:pt-[30px] sm:pb-[30px]">
        <h3 style={{ fontFamily: HIND, fontWeight: 700, color: "#222", margin: "0 0 26px" }} className="text-xl sm:text-[25px]">আপনার পছন্দের অফারটি নির্বাচন করুন</h3>

        {OFFERS.map((offer) => (
          <OfferOption key={offer.title} img={offer.img} title={offer.title} price={offer.price} checked />
        ))}

        <div style={{ gap: 48 }} className="grid grid-cols-1 md:grid-cols-[1.05fr_.95fr] gap-8">
          {/* billing */}
          <div>
            <h4 style={{ fontFamily: HIND, fontWeight: 700, color: "#222", margin: "0 0 24px" }} className="text-2xl sm:text-[30px]">Billing details</h4>

            <FormField label="আপনার নাম" value={name} onChange={setName} placeholder="এখানে আপনার নাম লিখুন" />
            <FormField label="মোবাইল নাম্বার" value={phone} onChange={setPhone} placeholder="এখানে মোবাইল নম্বরটি লিখুন" />
            <FormField label="সম্পূর্ন ঠিকানা" value={address} onChange={setAddress} placeholder="সম্পূর্ন ঠিকানা" />

            <label style={{ display: "block", fontFamily: HIND, fontWeight: 600, fontSize: 20, color: "#333", marginBottom: 8 }}>
              সাইজ সিলেক্ট করুন <span style={{ color: "#e23b1f" }}>*</span>
            </label>
            <select
              value={size}
              onChange={(e) => setSize(e.target.value)}
              style={{ width: "100%", fontFamily: HIND, fontSize: 19, padding: "13px 16px", border: "1px solid #cdd6e0", borderRadius: 8, background: "#fff", marginBottom: 30, outline: "none" }}
            >
              {SIZES.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>

            <h4 style={{ fontFamily: HIND, fontWeight: 700, color: "#222", margin: "0 0 18px" }} className="text-2xl sm:text-[30px]">Shipping</h4>
            <ShippingOptions shipIdx={shipIdx} onChange={setShipIdx} />
          </div>

          {/* order summary */}
          <div>
            <h4 style={{ fontFamily: HIND, fontWeight: 700, color: "#222", margin: "0 0 22px" }} className="text-2xl sm:text-[30px]">Your order</h4>
            <SummaryRow label="Product" value="৳ 999" bold size={22} />
            <div style={{ alignItems: "center", padding: "18px 0", borderBottom: "1px dashed #c5cfdb" }} className="flex flex-wrap gap-3 sm:flex-nowrap sm:gap-[18px]">
              <img src="/assets/prod.png" alt="" style={{ objectFit: "cover", borderRadius: 4 }} className="w-14 h-16 sm:w-16 sm:h-[74px]" />
              <span style={{ fontFamily: HIND, fontWeight: 600, fontSize: 21 }} className="basis-full sm:basis-auto sm:flex-1">ইন্ডিয়ান লাইক মি ব্রা</span>
              <span style={{ fontFamily: HIND, fontSize: 20, color: "#555" }}>× 1</span>
              <span style={{ fontFamily: HIND, fontWeight: 600, fontSize: 21, marginLeft: "auto" }} className="sm:ml-0">৳ 999</span>
            </div>
            <SummaryRow label="Subtotal" value="৳ 999" bold />
            <SummaryRow label="Shipping" value={`৳ ${shipping}`} />
            <SummaryRow label="Total" value={`৳ ${total}`} bold size={24} dashed={false} />

            <p style={{ fontFamily: HIND, fontWeight: 600, fontSize: 21, color: "#333", margin: "10px 0 10px" }}>ক্যাশ অন ডেলিভারি</p>
            <div style={{ position: "relative", background: "#ededed", borderRadius: 8, padding: "18px 20px", marginBottom: 24, fontFamily: HIND, fontSize: 20, color: "#3a3a3a" }}>
              <span style={{ position: "absolute", top: -9, left: 24, width: 16, height: 16, background: "#ededed", transform: "rotate(45deg)" }} />
              পণ্য হাতে পেয়ে টাকা পরিশোধ করুন
            </div>

            <button
              onClick={() => alert("ধন্যবাদ! আপনার অর্ডার গ্রহণ করা হয়েছে। মোট: ৳ " + total)}
              style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 10, fontFamily: HIND, fontWeight: 700, color: "#fff", background: "#f85606", border: "none", borderRadius: 12, padding: 18, cursor: "pointer", boxShadow: "0 5px 0 rgba(0,0,0,.12)" }}
              className="text-xl sm:text-2xl"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              অর্ডার করুন ৳ {total}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
