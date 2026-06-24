import SectionBand from "./SectionBand";
import ReviewsCarousel from "./ReviewsCarousel";

export default function ReviewsSection({ reviews }: { reviews?: string[] }) {
  if (!reviews || reviews.length === 0) return null;

  return (
    <>
      <SectionBand shapeDivider style={{ marginBottom: 8, paddingBottom: 39 }} textStyle={{ maxWidth: 980, marginLeft: "auto", marginRight: "auto" }} textClassName="text-[35px] md:text-[60px] whitespace-nowrap">
        আমাদের কাস্টমার রিভিউ
      </SectionBand>

      <section style={{ maxWidth: 1180, margin: "0 auto" }} className="px-4 pt-8 pb-4 sm:px-[22px] sm:pt-12 sm:pb-5">
        <ReviewsCarousel images={reviews} />
      </section>
    </>
  );
}
