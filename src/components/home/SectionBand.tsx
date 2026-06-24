import { HIND } from "./data";

export default function SectionBand({
  children,
  style,
  textStyle,
  className,
  textClassName = "text-2xl sm:text-3xl md:text-[42px]",
  shapeDivider = false,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
  textStyle?: React.CSSProperties;
  className?: string;
  textClassName?: string;
  shapeDivider?: boolean;
}) {
  return (
    <div style={{ background: "var(--accent, #f85606)", textAlign: "center", position: "relative", ...style }} className={className ?? "px-4 py-5 sm:px-5"}>
      <h2 style={{ fontFamily: HIND, fontWeight: 800, color: "#fff", lineHeight: 1.2, margin: 0, ...textStyle }} className={textClassName}>
        {children}
      </h2>
      {shapeDivider && (
        <div style={{ position: "absolute", bottom: -1, left: 0, width: "100%", overflow: "hidden", lineHeight: 0, direction: "ltr", transform: "rotate(180deg)" }} aria-hidden="true">
          <svg viewBox="0 0 2600 131.1" preserveAspectRatio="none" className="h-[51px] md:h-[39px]" style={{ display: "block", position: "relative", left: "50%", width: "calc(100% + 1.3px)", transform: "translateX(-50%)" }}>
            <path fill="#F9F9FE" d="M0 0L2600 0 2600 69.1 0 0z" />
            <path fill="#F9F9FE" style={{ opacity: 0.5 }} d="M0 0L2600 0 2600 69.1 0 69.1z" />
            <path fill="#F9F9FE" style={{ opacity: 0.25 }} d="M2600 0L0 0 0 130.1 2600 69.1z" />
          </svg>
        </div>
      )}
    </div>
  );
}
