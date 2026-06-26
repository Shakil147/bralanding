import { HIND, IMPORTANT_POINTS } from "./data";
import PointItem from "./PointItem";
import CallButton from "./CallButton";

export default function ImportantPoints({
  points = IMPORTANT_POINTS,
  phone = "8801713536549",
}: {
  points?: string[];
  phone?: string;
}) {
  return (
    <section style={{ maxWidth: 1080, margin: "14px auto 0" }} className="px-3 xs:px-4 sm:px-5 md:px-6">
      <div style={{ background: "#eef5fd", border: "1px solid var(--accent, #FF4600)", borderRadius: 12, overflow: "hidden" }}>
        <div style={{ textAlign: "center", borderBottom: "1px solid #f3d3bf" }} className="px-3 xs:px-4 sm:px-5 md:px-6 py-3 xs:py-4 sm:py-5 md:py-6">
          <h3 style={{ fontFamily: HIND, fontWeight: 700, color: "var(--accent, #f85606)", margin: 0 }} className="text-xl xs:text-2xl sm:text-3xl md:text-[38px]">গুরুত্বপূর্ন বিষয়</h3>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }} className="px-4 xs:px-5 sm:px-6 md:px-8 pt-5 xs:pt-6 sm:pt-8 md:pt-10 pb-6 xs:pb-7 sm:pb-8 md:pb-10">
          {points.map((p) => (
            <PointItem key={p}>{p}</PointItem>
          ))}
          <div style={{ textAlign: "center", marginTop: 6 }}>
            <CallButton phone={phone} />
          </div>
        </div>
      </div>
    </section>
  );
}
