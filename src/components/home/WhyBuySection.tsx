import { WHY_BUY } from "./data";
import SectionBand from "./SectionBand";

export default function WhyBuySection({
  whyBuy = WHY_BUY,
  image = "https://narimoncloset.com/uploads/all/UwGp7rqzsHYExqfL6OwJqjZ3LsLfBdOoO9OyMjUI.jpg",
}: {
  whyBuy?: string[];
  image?: string;
}) {
  return (
    <>

          <SectionBand shapeDivider style={{ marginBottom: 8, paddingBottom: 39 }} textStyle={{ maxWidth: 980, marginLeft: "auto", marginRight: "auto" }} textClassName="text-[35px] md:text-[60px] whitespace-nowrap">
             আমাদের কাছ থেকে কেন কিনবেন?
          </SectionBand>

      <section style={{ background: "#F9F9FE", maxWidth: 1080, margin: "0 auto", alignItems: "center" }} className="grid grid-cols-1 md:grid-cols-[.92fr_1.08fr] gap-6 md:gap-11 px-4 py-8 sm:px-[22px] sm:py-10">
        <div style={{ borderRadius: 16, overflow: "hidden", border: "1px solid #000" }}>
          <img src={image} alt="মডেল" style={{ display: "block", width: "100%", height: "auto" }} />
        </div>
        <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 13 }}>
          {whyBuy.map((w) => (
            <li key={w} style={{ display: "flex", gap: 12, alignItems: "flex-start", fontFamily: "sans-serif", fontWeight: 600, lineHeight: 1.4, color: "#1d1d1d" }} className="text-[18px] md:text-[27px]">
              <svg aria-hidden="true" viewBox="0 0 448 512" style={{ flexShrink: 0, width: "1em", height: "1em", fill: "#F85606", margin: "0 0.25em 0 0" }}>
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
