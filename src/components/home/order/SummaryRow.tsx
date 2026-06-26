import { HIND } from "../data";

export default function SummaryRow({
  label,
  value,
  bold = false,
  size = "base",
  dashed = true,
}: {
  label: string;
  value: string;
  bold?: boolean;
  size?: "base" | "lg" | "xl";
  dashed?: boolean;
}) {
  const sizeClasses = {
    base: "text-base xs:text-lg sm:text-lg",
    lg: "text-lg xs:text-xl sm:text-xl md:text-2xl",
    xl: "text-xl xs:text-2xl sm:text-2xl md:text-3xl",
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderBottom: dashed ? "1px dashed #c5cfdb" : "none" }}>
      <span style={{ fontFamily: HIND, fontWeight: bold ? 700 : 400 }} className={sizeClasses[size]}>{label}</span>
      <span style={{ fontFamily: HIND, fontWeight: bold ? 700 : 600 }} className={sizeClasses[size]}>{value}</span>
    </div>
  );
}
