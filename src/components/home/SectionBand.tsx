import { HIND } from "./data";

export default function SectionBand({
  children,
  style,
  textStyle,
  className,
  textClassName = "text-2xl sm:text-3xl md:text-[42px]",
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
  textStyle?: React.CSSProperties;
  className?: string;
  textClassName?: string;
}) {
  return (
    <div style={{ background: "#f85606", textAlign: "center", ...style }} className={className ?? "px-4 py-5 sm:px-5"}>
      <h2 style={{ fontFamily: HIND, fontWeight: 700, color: "#fff", lineHeight: 1.18, margin: 0, ...textStyle }} className={textClassName}>
        {children}
      </h2>
    </div>
  );
}
