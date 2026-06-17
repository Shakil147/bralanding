import { BENEFITS, NOTO } from "./data";
import SectionBand from "./SectionBand";

export default function BenefitsSection() {
  return (
    <>
      <SectionBand shapeDivider style={{ marginBottom: 8, paddingBottom: 39 }} textStyle={{ maxWidth: 980, marginLeft: "auto", marginRight: "auto" }}>
        ইন্ডিয়ান লাইক মি ব্রা ব্যবহারে যেসব সুবিধা পাবেন:
      </SectionBand>

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
    </>
  );
}
