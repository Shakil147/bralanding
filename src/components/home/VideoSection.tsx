import OrderButton from "./OrderButton";
import VideoEmbed from "./VideoEmbed";

export default function VideoSection({
  videoId = "wEGRD2byTck",
  title = "ইন্ডিয়ান লাইক মি ব্রা",
}: {
  videoId?: string;
  title?: string;
}) {
  return (
    <section style={{ maxWidth: 880, margin: "0 auto", textAlign: "center" }} className="px-3 xs:px-4 sm:px-5 md:px-6 py-6 xs:py-8 sm:pt-10 sm:pb-8 md:pt-12 md:pb-10">
      <div style={{ borderRadius: 14, overflow: "hidden", boxShadow: "0 8px 24px rgba(0,0,0,.12)", position: "relative", paddingTop: "56.25%" }}>
        <VideoEmbed videoId={videoId} title={title} />
      </div>
      <div style={{ marginTop: 28 }} className="xs:mt-8 sm:mt-10 md:mt-14">
        <OrderButton />
      </div>
    </section>
  );
}
