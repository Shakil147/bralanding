import OrderButton from "./OrderButton";

export default function VideoSection() {
  return (
    <section style={{ maxWidth: 880, margin: "0 auto", textAlign: "center" }} className="px-4 py-8 sm:px-5 sm:pt-[38px] sm:pb-[30px]">
      <div style={{ borderRadius: 18, overflow: "hidden", boxShadow: "0 10px 34px rgba(0,0,0,.13)" }}>
        <img src="/assets/video.png" alt="ভিডিও" style={{ display: "block", width: "100%", height: "auto" }} />
      </div>
      <OrderButton style={{ marginTop: 34 }} />
    </section>
  );
}
