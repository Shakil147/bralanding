import SectionBand from "./SectionBand";
import ReviewsCarousel from "./ReviewsCarousel";

export default function ReviewsSection({ reviews }: { reviews?: string[] }) {
  if (!reviews || reviews.length === 0) return null;

  return (
    <>
      <SectionBand shapeDivider style={{ marginBottom: 6, paddingBottom: 32 }} textStyle={{ maxWidth: 980, marginLeft: "auto", marginRight: "auto" }} textClassName="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[60px]">
        আমাদের কাস্টমার রিভিউ
      </SectionBand>

      <section style={{ maxWidth: 1180, margin: "0 auto" }} className="px-3 xs:px-4 sm:px-5 md:px-6 pt-6 xs:pt-8 sm:pt-10 md:pt-12 pb-3 xs:pb-4 sm:pb-5 md:pb-6">
        <ReviewsCarousel images={reviews} />
      </section>
    </>
  );
}
