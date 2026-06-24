"use client";

import { useState } from "react";
import { HIND, SHIPPING_OPTS, SIZES } from "./data";

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

        <label style={{ display: "flex", alignItems: "center", background: "#fff", border: "1px solid #e3e8ef", borderRadius: 12, marginBottom: 30, cursor: "pointer" }} className="flex-wrap gap-3 sm:gap-[22px] px-4 py-4 sm:px-6 sm:py-[18px]">
          <input type="radio" name="offer" checked readOnly style={{ width: 22, height: 22, accentColor: "#f85606" }} />
          <img src="https://narimoncloset.com/uploads/all/QYRGQxHDatu8ncUdaDB1EroGnjYW593G7dSJyl07.jpg" alt="" style={{ objectFit: "cover", borderRadius: 4 }} className="w-16 h-[72px] sm:w-[84px] sm:h-[96px]" />
          <span style={{ fontFamily: HIND, fontWeight: 600, color: "#222" }} className="text-lg sm:text-2xl">
            ইন্ডিয়ান লাইক মি ব্রা <span style={{ fontWeight: 500 }}>× 1</span>
          </span>
          <span style={{ marginLeft: "auto", fontFamily: HIND, fontWeight: 600, color: "#222" }} className="text-lg sm:text-2xl">৳999.00</span>
        </label>

        <div style={{ gap: 48 }} className="grid grid-cols-1 md:grid-cols-[1.05fr_.95fr] gap-8">
          {/* billing */}
          <div>
            <h4 style={{ fontFamily: HIND, fontWeight: 700, color: "#222", margin: "0 0 24px" }} className="text-2xl sm:text-[30px]">Billing details</h4>

            <label style={{ display: "block", fontFamily: HIND, fontWeight: 600, color: "#333", marginBottom: 8 }} className="text-lg sm:text-xl">
              আপনার নাম <span style={{ color: "#e23b1f" }}>*</span>
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="এখানে আপনার নাম লিখুন"
              style={{ width: "100%", fontFamily: HIND, fontSize: 19, padding: "13px 16px", border: "1px solid #cdd6e0", borderRadius: 8, background: "#fff", marginBottom: 22, outline: "none" }}
            />

            <label style={{ display: "block", fontFamily: HIND, fontWeight: 600, fontSize: 20, color: "#333", marginBottom: 8 }}>
              মোবাইল নাম্বার <span style={{ color: "#e23b1f" }}>*</span>
            </label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="এখানে মোবাইল নম্বরটি লিখুন"
              style={{ width: "100%", fontFamily: HIND, fontSize: 19, padding: "13px 16px", border: "1px solid #cdd6e0", borderRadius: 8, background: "#fff", marginBottom: 22, outline: "none" }}
            />

            <label style={{ display: "block", fontFamily: HIND, fontWeight: 600, fontSize: 20, color: "#333", marginBottom: 8 }}>
              সম্পূর্ন ঠিকানা <span style={{ color: "#e23b1f" }}>*</span>
            </label>
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="সম্পূর্ন ঠিকানা"
              style={{ width: "100%", fontFamily: HIND, fontSize: 19, padding: "13px 16px", border: "1px solid #cdd6e0", borderRadius: 8, background: "#fff", marginBottom: 22, outline: "none" }}
            />

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
            <div style={{ border: "1px solid #d9e1ea", borderRadius: 8, overflow: "hidden" }}>
              {SHIPPING_OPTS.map((opt, i) => (
                <label key={opt.label} style={{ display: "flex", alignItems: "center", gap: 14, padding: "16px 18px", borderBottom: "1px solid #e4e9f0", cursor: "pointer", fontFamily: HIND, color: "#2a2a2a" }} className="text-base sm:text-xl">
                  <input
                    type="radio"
                    name="ship"
                    checked={shipIdx === i}
                    onChange={() => setShipIdx(i)}
                    style={{ width: 18, height: 18, accentColor: "#f85606", flexShrink: 0 }}
                  />
                  <span style={{ flex: 1, minWidth: 0 }} className="break-words">{opt.label}</span>
                  <span style={{ fontWeight: 600, flexShrink: 0 }} className="whitespace-nowrap">৳ {opt.cost}</span>
                </label>
              ))}
            </div>
          </div>

          {/* order summary */}
          <div>
            <h4 style={{ fontFamily: HIND, fontWeight: 700, color: "#222", margin: "0 0 22px" }} className="text-2xl sm:text-[30px]">Your order</h4>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 0", borderBottom: "1px dashed #c5cfdb" }}>
              <span style={{ fontFamily: HIND, fontWeight: 700, fontSize: 22 }}>Product</span>
              <span style={{ fontFamily: HIND, fontWeight: 700, fontSize: 22 }}>৳ 999</span>
            </div>
            <div style={{ alignItems: "center", padding: "18px 0", borderBottom: "1px dashed #c5cfdb" }} className="flex flex-wrap gap-3 sm:flex-nowrap sm:gap-[18px]">
              <img src="/assets/prod.png" alt="" style={{ objectFit: "cover", borderRadius: 4 }} className="w-14 h-16 sm:w-16 sm:h-[74px]" />
              <span style={{ fontFamily: HIND, fontWeight: 600, fontSize: 21 }} className="basis-full sm:basis-auto sm:flex-1">ইন্ডিয়ান লাইক মি ব্রা</span>
              <span style={{ fontFamily: HIND, fontSize: 20, color: "#555" }}>× 1</span>
              <span style={{ fontFamily: HIND, fontWeight: 600, fontSize: 21, marginLeft: "auto" }} className="sm:ml-0">৳ 999</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 0", borderBottom: "1px dashed #c5cfdb" }}>
              <span style={{ fontFamily: HIND, fontSize: 21 }}>Subtotal</span>
              <span style={{ fontFamily: HIND, fontWeight: 700, fontSize: 21 }}>৳ 999</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 0", borderBottom: "1px dashed #c5cfdb" }}>
              <span style={{ fontFamily: HIND, fontSize: 21 }}>Shipping</span>
              <span style={{ fontFamily: HIND, fontWeight: 600, fontSize: 21 }}>৳ {shipping}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 0 22px" }}>
              <span style={{ fontFamily: HIND, fontWeight: 700, fontSize: 24 }}>Total</span>
              <span style={{ fontFamily: HIND, fontWeight: 700, fontSize: 24 }}>৳ {total}</span>
            </div>

            <p style={{ fontFamily: HIND, fontWeight: 600, fontSize: 21, color: "#333", margin: "0 0 10px" }}>ক্যাশ অন ডেলিভারি</p>
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
