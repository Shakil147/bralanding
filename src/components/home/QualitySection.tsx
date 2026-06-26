import { HIND } from "./data";
import OrderButton from "./OrderButton";
import SectionBand from "./SectionBand";
import QualityCarousel from "./QualityCarousel";

export default function QualitySection({
  gallery,
}: {
  gallery?: string[];
}) {
  return (
    <>
      <SectionBand shapeDivider style={{ marginBottom: 6, paddingBottom: 32 }} textStyle={{ maxWidth: 980, marginLeft: "auto", marginRight: "auto" }} textClassName="text-xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[60px]">
        আমাদের পণ্যের কোয়ালিটি
      </SectionBand>

      <section style={{ maxWidth: 1180, margin: "0 auto" }} className="px-3 xs:px-4 sm:px-5 md:px-6 pt-6 xs:pt-8 sm:pt-10 md:pt-12 pb-3 xs:pb-4 sm:pb-5 md:pb-6">
        <QualityCarousel images={gallery} />
      </section>

      <div style={{ textAlign: "center" }} className="px-3 xs:px-4 sm:px-5 md:px-6 pt-4 xs:pt-6 sm:pt-8 md:pt-10 pb-2 xs:pb-3 sm:pb-4 md:pb-6">
        <OrderButton />
      </div>
    </>
  );
}
