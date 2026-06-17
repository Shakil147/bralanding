import { HIND } from "./data";
import OrderButton from "./OrderButton";

export default function Header() {
  return (
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
      <OrderButton style={{ marginBottom: 64 }} />
      <svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        style={{ display: "block", position: "absolute", left: 0, right: 0, bottom: -1, width: "100%", height: 64 }}
      >
        <path d="M0,55 C180,18 360,82 540,55 C720,28 900,80 1080,52 C1260,26 1350,60 1440,48 L1440,90 L0,90 Z" fill="#f7f9fc" />
      </svg>
    </header>
  );
}
