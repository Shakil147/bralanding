import { HIND } from "./data";

export default function PriceBox() {
  return (
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
  );
}
