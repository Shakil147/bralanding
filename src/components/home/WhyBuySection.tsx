import { NOTO, WHY_BUY } from "./data";
import SectionBand from "./SectionBand";

export default function WhyBuySection() {
  return (
    <>
      <SectionBand style={{ margin: "40px 0 0" }} className="px-4 py-6 sm:px-5 sm:py-[30px]" textClassName="text-2xl sm:text-3xl md:text-[46px]">
        আমাদের কাছ থেকে কেন কিনবেন?
      </SectionBand>

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
    </>
  );
}
