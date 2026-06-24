import OrderButton from "./OrderButton";

export default function VideoSection({
  videoId = "wEGRD2byTck",
  title = "ইন্ডিয়ান লাইক মি ব্রা",
}: {
  videoId?: string;
  title?: string;
}) {
  return (
    <section style={{ maxWidth: 880, margin: "0 auto", textAlign: "center" }} className="px-4 py-8 sm:px-5 sm:pt-[38px] sm:pb-[30px]">
      <div style={{ borderRadius: 18, overflow: "hidden", boxShadow: "0 10px 34px rgba(0,0,0,.13)", position: "relative", paddingTop: "56.25%" }}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
        />
      </div>
      <OrderButton style={{ marginTop: 34 }} />
    </section>
  );
}
