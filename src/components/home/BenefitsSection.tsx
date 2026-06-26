import { BENEFITS } from "./data";
import SectionBand from "./SectionBand";

export default function BenefitsSection({
  title = "ইন্ডিয়ান লাইক মি ব্রা ব্যবহারে যেসব সুবিধা পাবেন:",
  benefits = BENEFITS,
  banner = "https://narimoncloset.com/uploads/all/QYRGQxHDatu8ncUdaDB1EroGnjYW593G7dSJyl07.jpg",
}: {
  title?: string;
  benefits?: string[];
  banner?: string;
}) {
  return (
    <>
      <SectionBand shapeDivider style={{ marginBottom: 6, paddingBottom: 32 }} textStyle={{ maxWidth: 980, marginLeft: "auto", marginRight: "auto" }} textClassName="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[60px]">
        {title}
      </SectionBand>

      <section style={{ maxWidth: 1080, margin: "0 auto" }} className="grid grid-cols-1 lg:grid-cols-[1.05fr_.95fr] gap-4 xs:gap-5 sm:gap-6 md:gap-8 lg:gap-10 px-3 xs:px-4 sm:px-5 md:px-6 py-4 xs:py-5 sm:py-6 md:py-8 lg:py-10">
        <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 16 }}>
          {benefits.map((b) => (
            <li key={b} style={{ display: "flex", gap: 12, alignItems: "flex-start", fontFamily: "sans-serif", fontWeight: 600, lineHeight: 1.4, color: "#1d1d1d" }} className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-[27px]">
              <svg aria-hidden="true" viewBox="0 0 512 512" style={{ fill: "var(--accent, #F85606)", height: "1em", width: "1em", margin: "0 0.25em 0 0", flexShrink: 0, marginTop: 2 }}>
                <path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" />
              </svg>
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <div style={{ borderRadius: 12, overflow: "hidden", boxShadow: "0 6px 20px rgba(0,0,0,.1)", justifySelf: "center" }} className="w-full max-h-[300px] xs:max-h-[400px] sm:max-h-[500px] md:max-h-[600px] lg:max-h-none">
          <img src={banner} alt="পণ্য" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      </section>
    </>
  );
}
