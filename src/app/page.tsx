"use client";

import { useState } from "react";

const HIND = "var(--font-hind-siliguri), sans-serif";
const NOTO = "var(--font-noto-serif-bengali), serif";

const BENEFITS = [
  "১০০% সুতি কাপড় রেগুলার ইউজের একদম পার্ফেক্ট।",
  "৪ হুকের ব্রা এবং মাঝারি ফিতা হওয়ায় কাধে এবং পিঠে ব্যথা হবেনা।",
  "ভারী ব্রেস্টকে সহজে হোল্ড করবে।",
  "উন্নত মানের ভেলভেট জাতীয় সফট ইলাস্টিক সহজে ঢিলা হবেনা।",
  "সারাদিন পড়ে থাকলেও চুলকানি কিংবা রেশ হবেনা।",
  "ঝুলে যাওয়া ব্রেস্টকে ন্যাচারাল শেইপ দিবে।",
  "পেছনে হুক এবং সোল্ডার স্টেপ থাকায় ছোট বড় করে ব্যবহার করা যাবে।",
  "আর্মসের নিচের অংশ প্রসস্ত হওয়ায় চাপ অনুভুত হবে না।",
  "সাইজ রয়েছে ৩২ থেকে ৪৪ পর্যন্ত।",
  "পুরো কম্বোতে থাকবে ৬ কালারের ৬ টি ব্রা।",
];

const WHY_BUY = [
  "১০০% অরিজিনাল ছবির মতো পণ্য পাবেন।",
  "পণ্য হাতে পেয়ে মূল্য পরিশোধের সুবিধা।",
  "সম্পূর্ণ ক্যাশ অন ডেলিভারিতে অর্ডার সুবিধা।",
  "যে কোন সমস্যায় রিটার্ন এবং এক্সচেঞ্জ সুবিধা।",
];

const SIZES = ["32", "34", "36", "38", "40", "42", "44"];

const SHIPPING_OPTS = [
  { label: "ঢাকার ভিতরে:", cost: 80 },
  {
    label:
      "ঢাকার পার্শ্ববর্তী : আশুলিয়া/ধামরাই/দোহার/হেমায়েতপুর/ কেরানীগঞ্জ মডেল এবং দক্ষিণ/সাভার/নবাবগঞ্জ:",
    cost: 110,
  },
  { label: "ঢাকার বাহিরে:", cost: 130 },
];

const ORANGE_BTN: React.CSSProperties = {
  display: "inline-block",
  fontFamily: HIND,
  fontWeight: 700,
  color: "#fff",
  textDecoration: "none",
  background: "#ff6a16",
  border: "2px solid rgba(255,255,255,.55)",
  borderRadius: "14px 14px 22px 14px",
  boxShadow: "0 6px 0 rgba(0,0,0,.12)",
};

const ORANGE_BTN_CLASS = "text-xl sm:text-2xl md:text-3xl px-7 py-3 sm:px-10 sm:py-3.5";

export default function Home() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [size, setSize] = useState("32");
  const [shipIdx, setShipIdx] = useState(0);

  const shipping = [80, 110, 130][shipIdx];
  const total = 999 + shipping;

  return (
    <div style={{ background: "#f7f9fc", width: "100%", overflowX: "hidden", color: "#222" }}>
      {/* ===== HEADER ===== */}
      <header style={{ position: "relative", background: "#f85606" }} className="text-center px-4 pt-10 sm:px-5 sm:pt-[54px]">
        <h1
          style={{ fontFamily: HIND, fontWeight: 700, color: "#fff", lineHeight: 1.1, margin: "0 0 18px", textShadow: "0 2px 6px rgba(0,0,0,.12)" }}
          className="text-4xl sm:text-5xl md:text-[60px]"
        >
          ইন্ডিয়ান লাইক মি ব্রা
        </h1>
        <p style={{ fontFamily: HIND, fontWeight: 600, color: "#fff", margin: "0 0 18px" }} className="text-lg sm:text-xl md:text-2xl">
          অস্বস্তির সাথে ব্রেকআপ
        </p>
        <p style={{ fontFamily: HIND, fontWeight: 600, color: "#fff", margin: "0 0 30px" }} className="text-lg sm:text-xl md:text-2xl">
          ৬ পিস কম্বো অফার প্রাইজ{" "}
          <span style={{ borderBottom: "4px solid #2dbd1b", paddingBottom: 2 }}>৯৯৯ /- টাকা মাত্র</span>
        </p>
        <a href="#order" style={{ ...ORANGE_BTN, marginBottom: 64 }} className={ORANGE_BTN_CLASS}>
          অর্ডার করুন
        </a>
        <svg
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          style={{ display: "block", position: "absolute", left: 0, right: 0, bottom: -1, width: "100%", height: 64 }}
        >
          <path d="M0,55 C180,18 360,82 540,55 C720,28 900,80 1080,52 C1260,26 1350,60 1440,48 L1440,90 L0,90 Z" fill="#f7f9fc" />
        </svg>
      </header>

      {/* ===== VIDEO ===== */}
      <section style={{ maxWidth: 880, margin: "0 auto", textAlign: "center" }} className="px-4 py-8 sm:px-5 sm:pt-[38px] sm:pb-[30px]">
        <div style={{ borderRadius: 18, overflow: "hidden", boxShadow: "0 10px 34px rgba(0,0,0,.13)" }}>
          <img src="/assets/video.png" alt="ভিডিও" style={{ display: "block", width: "100%", height: "auto" }} />
        </div>
        <a href="#order" style={{ ...ORANGE_BTN, marginTop: 34 }} className={ORANGE_BTN_CLASS}>
          অর্ডার করুন
        </a>
      </section>

      {/* ===== BAND: BENEFITS ===== */}
      <div style={{ background: "#f85606", textAlign: "center", marginBottom: 8 }} className="px-4 py-5 sm:px-5">
        <h2 style={{ fontFamily: HIND, fontWeight: 700, color: "#fff", lineHeight: 1.18, margin: "0 auto", maxWidth: 980 }} className="text-2xl sm:text-3xl md:text-[42px]">
          ইন্ডিয়ান লাইক মি ব্রা ব্যবহারে যেসব সুবিধা পাবেন:
        </h2>
      </div>

      <section style={{ maxWidth: 1080, margin: "0 auto", alignItems: "start" }} className="grid grid-cols-1 md:grid-cols-[1.05fr_.95fr] gap-6 md:gap-10 px-4 py-6 sm:px-[22px] sm:py-[34px]">
        <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 20 }}>
          {BENEFITS.map((b) => (
            <li key={b} style={{ display: "flex", gap: 14, alignItems: "flex-start", fontFamily: NOTO, fontWeight: 600, lineHeight: 1.4, color: "#1d1d1d" }} className="text-base sm:text-lg md:text-xl">
              <span style={{ color: "#f85606", fontWeight: 700, fontSize: 20, lineHeight: 1.5, flexShrink: 0 }}>»</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 8px 26px rgba(0,0,0,.12)", alignSelf: "center" }}>
          <img src="/assets/group1.png" alt="পণ্য" style={{ display: "block", width: "100%", height: "auto" }} />
        </div>
      </section>

      {/* ===== PRICE BOX ===== */}
      <section style={{ maxWidth: 1040, margin: "14px auto 0" }} className="px-4 sm:px-[22px]">
        <div style={{ background: "#eef5fd", border: "1px solid #f7c9ad", borderRadius: 14, textAlign: "center" }} className="px-5 py-5 sm:px-[30px] sm:py-[26px]">
          <p style={{ fontFamily: HIND, fontWeight: 600, color: "#3a3a3a", margin: "0 0 16px" }} className="text-xl sm:text-2xl md:text-[30px]">
            ৬ পিস কম্বো রেগুলার প্রাইজ -{" "}
            <span style={{ position: "relative", color: "#3a3a3a" }}>
              ১৫০০/- টাকা
              <span style={{ position: "absolute", left: "-6%", top: "50%", width: "112%", height: 3, background: "#e23b1f", transform: "rotate(-9deg)" }} />
              <span style={{ position: "absolute", left: "42%", top: "-30%", fontSize: "1.5em", color: "#e23b1f", fontWeight: 700, transform: "scaleX(1.3)" }}>✕</span>
            </span>
          </p>
          <p style={{ fontFamily: HIND, fontWeight: 600, color: "#2a2a2a", margin: 0 }} className="text-lg sm:text-xl md:text-[28px]">
            ৩২–৪০ সাইজের কম্বো ৯৯৯/- &amp; ৪২–৪৪ সাইজের কম্বো{" "}
            <span style={{ backgroundImage: "linear-gradient(#2dbd1b,#2dbd1b)", backgroundRepeat: "repeat-x", backgroundPosition: "0 1.05em", backgroundSize: "14px 5px", paddingBottom: 6 }}>
              ১০৯৯/- টাকা মাত্র
            </span>
          </p>
        </div>
      </section>

      {/* ===== BAND: WHY BUY ===== */}
      <div style={{ background: "#f85606", textAlign: "center", margin: "40px 0 0" }} className="px-4 py-6 sm:px-5 sm:py-[30px]">
        <h2 style={{ fontFamily: HIND, fontWeight: 700, color: "#fff", margin: 0 }} className="text-2xl sm:text-3xl md:text-[46px]">আমাদের কাছ থেকে কেন কিনবেন?</h2>
      </div>

      <section style={{ maxWidth: 1080, margin: "0 auto", alignItems: "center" }} className="grid grid-cols-1 md:grid-cols-[.92fr_1.08fr] gap-6 md:gap-11 px-4 py-8 sm:px-[22px] sm:py-10">
        <div style={{ borderRadius: 14, overflow: "hidden", boxShadow: "0 8px 26px rgba(0,0,0,.13)" }}>
          <img src="/assets/black.png" alt="মডেল" style={{ display: "block", width: "100%", height: "auto" }} />
        </div>
        <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 24 }}>
          {WHY_BUY.map((w) => (
            <li key={w} style={{ display: "flex", gap: 16, alignItems: "flex-start", fontFamily: NOTO, fontWeight: 600, lineHeight: 1.4, color: "#1d1d1d" }} className="text-lg sm:text-xl md:text-[25px]">
              <span style={{ flexShrink: 0, width: 30, height: 30, borderRadius: 6, background: "#f85606", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 18, marginTop: 4 }}>✓</span>
              <span>{w}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ===== BAND: QUALITY ===== */}
      <div style={{ position: "relative", background: "#f85606", textAlign: "center", margin: "18px 0 0", transform: "skewY(-1.1deg)", boxShadow: "0 14px 0 rgba(248,86,6,.32)" }} className="px-4 py-6 sm:px-5 sm:py-[34px]">
        <h2 style={{ fontFamily: HIND, fontWeight: 700, color: "#fff", margin: 0, transform: "skewY(1.1deg)" }} className="text-2xl sm:text-3xl md:text-[48px]">আমাদের পণ্যের কোয়ালিটি</h2>
      </div>

      <section style={{ maxWidth: 1180, margin: "0 auto" }} className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-[26px] px-4 pt-8 pb-4 sm:px-[22px] sm:pt-12 sm:pb-5">
        {["q1", "q2", "q3"].map((q) => (
          <div key={q} style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 8px 24px rgba(0,0,0,.12)" }} className={q === "q3" ? "col-span-2 sm:col-span-1" : ""}>
            <img src={`/assets/${q}.png`} alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        ))}
      </section>

      <div style={{ textAlign: "center" }} className="px-4 pt-6 pb-2 sm:px-5 sm:pt-[30px] sm:pb-[10px]">
        <a href="#order" style={ORANGE_BTN} className={ORANGE_BTN_CLASS}>অর্ডার করুন</a>
      </div>

      {/* ===== 2 POINTS ===== */}
      <section style={{ maxWidth: 1080, margin: "18px auto 0" }} className="px-4 sm:px-[22px]">
        <div style={{ background: "#eef5fd", border: "1px solid #f7c9ad", borderRadius: 16, overflow: "hidden" }}>
          <div style={{ textAlign: "center", borderBottom: "1px solid #f3d3bf" }} className="px-4 py-4 sm:px-5 sm:py-[22px]">
            <h3 style={{ fontFamily: HIND, fontWeight: 700, color: "#f85606", margin: 0 }} className="text-2xl sm:text-3xl md:text-[38px]">২ টি গুরুত্বপূর্ন বিষয়</h3>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 22 }} className="px-5 pt-6 pb-7 sm:px-[34px] sm:pt-[30px] sm:pb-9">
            <div style={{ display: "flex", gap: 16, alignItems: "flex-start", fontFamily: NOTO, fontWeight: 600, lineHeight: 1.42, color: "#1d1d1d" }} className="text-lg sm:text-xl md:text-[25px]">
              <span style={{ flexShrink: 0, width: 28, height: 28, borderRadius: 6, background: "#f85606", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 17, marginTop: 4 }}>✓</span>
              <span>আমরা ভিডিওতে যা দেখাই সেই পণ্যই ডেলিভারিতে পাঠাই, ছবির মতোই প্রোডাক্ট পাবেন ইনশা আল্লাহ্।</span>
            </div>
            <div style={{ display: "flex", gap: 16, alignItems: "flex-start", fontFamily: NOTO, fontWeight: 600, lineHeight: 1.42, color: "#1d1d1d" }} className="text-lg sm:text-xl md:text-[25px]">
              <span style={{ flexShrink: 0, width: 28, height: 28, borderRadius: 6, background: "#f85606", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 17, marginTop: 4 }}>✓</span>
              <span>অর্ডার কনফার্ম করার জন্য আমাদের কল সেন্টার থেকে ফোন করে অর্ডার কনফার্ম করা হবে।</span>
            </div>
            <div style={{ textAlign: "center", marginTop: 8 }}>
              <a href="tel:01713536549" style={{ display: "inline-block", fontFamily: HIND, fontWeight: 700, color: "#fff", textDecoration: "none", background: "#f85606", borderRadius: "14px 14px 22px 14px", lineHeight: 1.25, boxShadow: "0 5px 0 rgba(0,0,0,.12)" }} className="text-xl sm:text-2xl px-7 py-3 sm:px-10 sm:py-3.5">
                যে কোনো প্রয়োজনে কল করুনঃ<br />01713536549
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ORDER FORM ===== */}
      <section id="order" style={{ maxWidth: 1140, margin: "46px auto 70px" }} className="px-4 sm:px-[22px]">
        <div style={{ background: "#eef5fd", border: "5px solid #f85606", borderRadius: 18 }} className="px-5 pt-7 pb-8 sm:px-10 sm:pt-[38px] sm:pb-[46px]">
          <h3 style={{ fontFamily: HIND, fontWeight: 700, color: "#222", margin: "0 0 26px" }} className="text-2xl sm:text-3xl">আপনার পছন্দের অফারটি নির্বাচন করুন</h3>

          <label style={{ display: "flex", alignItems: "center", background: "#fff", border: "1px solid #e3e8ef", borderRadius: 12, marginBottom: 30, cursor: "pointer" }} className="flex-wrap gap-3 sm:gap-[22px] px-4 py-4 sm:px-6 sm:py-[18px]">
            <input type="radio" name="offer" checked readOnly style={{ width: 22, height: 22, accentColor: "#f85606" }} />
            <img src="/assets/prod.png" alt="" style={{ objectFit: "cover", borderRadius: 4 }} className="w-16 h-[72px] sm:w-[84px] sm:h-[96px]" />
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
                style={{ width: "100%", fontFamily: HIND, fontWeight: 700, color: "#fff", background: "#f85606", border: "none", borderRadius: 12, padding: 18, cursor: "pointer", boxShadow: "0 5px 0 rgba(0,0,0,.12)" }}
                className="text-xl sm:text-2xl"
              >
                ⬜ অর্ডার করুন ৳ {total}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FLOATING ===== */}
      <a href="#" style={{ position: "fixed", borderRadius: "50%", background: "#0084ff", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 6px 18px rgba(0,0,0,.25)", zIndex: 50 }} className="right-4 bottom-[88px] w-12 h-12 sm:right-[26px] sm:bottom-[104px] sm:w-[62px] sm:h-[62px]">
        <svg width="34" height="34" viewBox="0 0 24 24" fill="#fff" className="w-6 h-6 sm:w-[34px] sm:h-[34px]">
          <path d="M12 2C6.36 2 2 6.13 2 11.7c0 2.91 1.19 5.44 3.14 7.17.16.14.26.35.27.57l.05 1.78c.02.57.6.94 1.12.71l1.99-.88c.17-.07.36-.09.54-.04 .91.25 1.88.39 2.8.39 5.64 0 10-4.13 10-9.7C22 6.13 17.64 2 12 2Zm6 7.46-2.93 4.65c-.47.74-1.47.93-2.17.41l-2.33-1.75a.6.6 0 0 0-.72 0l-3.16 2.4c-.42.32-.97-.18-.68-.62l2.93-4.65c.47-.74 1.47-.93 2.17-.41l2.33 1.75a.6.6 0 0 0 .72 0l3.15-2.4c.42-.32.97.18.69.62Z" />
        </svg>
      </a>
      <a href="https://wa.me/8801713536549" style={{ position: "fixed", borderRadius: "50%", background: "#25d366", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 6px 18px rgba(0,0,0,.25)", zIndex: 50 }} className="right-4 bottom-4 w-12 h-12 sm:right-[26px] sm:bottom-[30px] sm:w-[62px] sm:h-[62px]">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="#fff" className="w-7 h-7 sm:w-9 sm:h-9">
          <path d="M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35ZM12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.38 5.07L2 22l5.05-1.32A9.96 9.96 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2Zm0 18.18c-1.66 0-3.2-.49-4.5-1.32l-.32-.2-3 .78.8-2.92-.21-.33A8.13 8.13 0 0 1 3.82 12 8.18 8.18 0 1 1 12 20.18Z" />
        </svg>
      </a>
    </div>
  );
}
