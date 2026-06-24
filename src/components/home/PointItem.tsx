import { NOTO } from "./data";

export default function PointItem({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", gap: 16, alignItems: "flex-start", fontFamily: NOTO, fontWeight: 600, lineHeight: 1.42, color: "#1d1d1d" }} className="text-lg sm:text-xl md:text-[25px]">
      <span style={{ flexShrink: 0, width: 28, height: 28, borderRadius: 6, background: "#f85606", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 17, marginTop: 4 }}>✓</span>
      <span>{children}</span>
    </div>
  );
}
