import { HIND } from "./data";
import OrderButton from "./OrderButton";
import SectionBand from "./SectionBand";

export default function QualitySection() {
  return (
    <>

      <SectionBand shapeDivider style={{ marginBottom: 8, paddingBottom: 39 }} textStyle={{ maxWidth: 980, marginLeft: "auto", marginRight: "auto" }}>
          আমাদের পণ্যের কোয়ালিটি
      </SectionBand>

      <section style={{ maxWidth: 1180, margin: "0 auto" }} className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-[26px] px-4 pt-8 pb-4 sm:px-[22px] sm:pt-12 sm:pb-5">
        {["q1", "q2", "q3"].map((q) => (
          <div key={q} style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 8px 24px rgba(0,0,0,.12)" }} className={q === "q3" ? "col-span-2 sm:col-span-1" : ""}>
            <img src={`/assets/${q}.png`} alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        ))}
      </section>

      <div style={{ textAlign: "center" }} className="px-4 pt-6 pb-2 sm:px-5 sm:pt-[30px] sm:pb-[10px]">
        <OrderButton />
      </div>
    </>
  );
}
