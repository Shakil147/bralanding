import { HIND } from "../data";

export default function SummaryRow({
  label,
  value,
  bold = false,
  size = 21,
  dashed = true,
}: {
  label: string;
  value: string;
  bold?: boolean;
  size?: number;
  dashed?: boolean;
}) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 0", borderBottom: dashed ? "1px dashed #c5cfdb" : "none" }}>
      <span style={{ fontFamily: HIND, fontWeight: bold ? 700 : 400, fontSize: size }}>{label}</span>
      <span style={{ fontFamily: HIND, fontWeight: bold ? 700 : 600, fontSize: size }}>{value}</span>
    </div>
  );
}
