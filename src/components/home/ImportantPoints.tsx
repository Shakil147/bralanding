import { HIND, IMPORTANT_POINTS } from "./data";
import PointItem from "./PointItem";
import CallButton from "./CallButton";

export default function ImportantPoints() {
  return (
    <section style={{ maxWidth: 1080, margin: "18px auto 0" }} className="px-4 sm:px-[22px]">
      <div style={{ background: "#eef5fd", border: "1px solid #FF4600", borderRadius: 16, overflow: "hidden" }}>
        <div style={{ textAlign: "center", borderBottom: "1px solid #f3d3bf" }} className="px-4 py-4 sm:px-5 sm:py-[22px]">
          <h3 style={{ fontFamily: HIND, fontWeight: 700, color: "#f85606", margin: 0 }} className="text-2xl sm:text-3xl md:text-[38px]">২ টি গুরুত্বপূর্ন বিষয়</h3>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }} className="px-5 pt-6 pb-7 sm:px-[34px] sm:pt-[30px] sm:pb-9">
          {IMPORTANT_POINTS.map((p) => (
            <PointItem key={p}>{p}</PointItem>
          ))}
          <div style={{ textAlign: "center", marginTop: 8 }}>
            <CallButton phone="8801713536549" />
          </div>
        </div>
      </div>
    </section>
  );
}
