import Image from "next/image";
import { WHY_BUY } from "./data";
import SectionBand from "./SectionBand";

export default function WhyBuySection({
  whyBuy = WHY_BUY,
  image,
}: {
  whyBuy?: string[];
  image: string;
}) {
  return (
    <>
      <SectionBand shapeDivider style={{ marginBottom: 6, paddingBottom: 32 }} textStyle={{ maxWidth: 980, marginLeft: "auto", marginRight: "auto" }} textClassName="text-xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[60px]">
        আমাদের কাছ থেকে কেন কিনবেন?
      </SectionBand>

      <section style={{ background: "#F9F9FE", maxWidth: 1080, margin: "0 auto", alignItems: "center" }} className="grid grid-cols-1 lg:grid-cols-[.92fr_1.08fr] gap-4 xs:gap-5 sm:gap-6 md:gap-8 lg:gap-11 px-3 xs:px-4 sm:px-5 md:px-6 py-4 xs:py-5 sm:py-6 md:py-8 lg:py-10">
        <div style={{ position: "relative", aspectRatio: "1/1", borderRadius: 12, overflow: "hidden", border: "1px solid #000", order: 2 }} className="lg:order-1 max-h-[300px] xs:max-h-[400px] sm:max-h-[500px] md:max-h-[600px] lg:max-h-none w-full">
          <Image src={image} alt="মডেল" fill sizes="(max-width: 1024px) 100vw, 500px" style={{ objectFit: "cover" }} />
        </div>
        <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 12, order: 1 }} className="lg:order-2">
          {whyBuy.map((w) => (
            <li key={w} style={{ display: "flex", gap: 12, alignItems: "flex-start", fontFamily: "sans-serif", fontWeight: 600, lineHeight: 1.4, color: "#1d1d1d" }} className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-[27px]">
              <svg aria-hidden="true" viewBox="0 0 448 512" style={{ flexShrink: 0, width: "1em", height: "1em", fill: "var(--accent, #F85606)", marginTop: 2 }}>
                <path d="M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z" />
              </svg>
              <span>{w}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
