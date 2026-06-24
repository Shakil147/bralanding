import { HIND } from "./data";
import OrderButton from "./OrderButton";
import SectionBand from "./SectionBand";
import QualityCarousel from "./QualityCarousel";

export default function QualitySection() {
  return (
    <>

      <SectionBand shapeDivider style={{ marginBottom: 8, paddingBottom: 39 }} textStyle={{ maxWidth: 980, marginLeft: "auto", marginRight: "auto" }} textClassName="text-[35px] md:text-[60px] whitespace-nowrap">
          আমাদের পণ্যের কোয়ালিটি
      </SectionBand>

      <section style={{ maxWidth: 1180, margin: "0 auto" }} className="px-4 pt-8 pb-4 sm:px-[22px] sm:pt-12 sm:pb-5">
        <QualityCarousel />
      </section>

      <div style={{ textAlign: "center" }} className="px-4 pt-6 pb-2 sm:px-5 sm:pt-[30px] sm:pb-[10px]">
        <OrderButton />
      </div>
    </>
  );
}
