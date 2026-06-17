import { HIND, NOTO } from "./data";

export default function ImportantPoints() {
  return (
    <section style={{ maxWidth: 1080, margin: "18px auto 0" }} className="px-4 sm:px-[22px]">
      <div style={{ background: "#eef5fd", border: "1px solid #f7c9ad", borderRadius: 16, overflow: "hidden" }}>
        <div style={{ textAlign: "center", borderBottom: "1px solid #f3d3bf" }} className="px-4 py-4 sm:px-5 sm:py-[22px]">
          <h3 style={{ fontFamily: HIND, fontWeight: 700, color: "#f85606", margin: 0 }} className="text-2xl sm:text-3xl md:text-[38px]">২ টি গুরুত্বপূর্ন বিষয়</h3>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }} className="px-5 pt-6 pb-7 sm:px-[34px] sm:pt-[30px] sm:pb-9">
          <div style={{ display: "flex", gap: 16, alignItems: "flex-start", fontFamily: NOTO, fontWeight: 600, lineHeight: 1.42, color: "#1d1d1d" }} className="text-lg sm:text-xl md:text-[25px]">
            <span style={{ flexShrink: 0, width: 28, height: 28, borderRadius: 6, background: "#f85606", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 17, marginTop: 4 }}>✓</span>
            <span>আমরা ভিডিওতে যা দেখাই সেই পণ্যই ডেলিভারিতে পাঠাই, ছবির মতোই প্রোডাক্ট পাবেন ইনশা আল্লাহ্।</span>
          </div>
          <div style={{ display: "flex", gap: 16, alignItems: "flex-start", fontFamily: NOTO, fontWeight: 600, lineHeight: 1.42, color: "#1d1d1d" }} className="text-lg sm:text-xl md:text-[25px]">
            <span style={{ flexShrink: 0, width: 28, height: 28, borderRadius: 6, background: "#f85606", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 17, marginTop: 4 }}>✓</span>
            <span>অর্ডার কনফার্ম করার জন্য আমাদের কল সেন্টার থেকে ফোন করে অর্ডার কনফার্ম করা হবে।</span>
          </div>
          <div style={{ textAlign: "center", marginTop: 8 }}>
            <a href="tel:01713536549" style={{ display: "inline-block", fontFamily: HIND, fontWeight: 700, color: "#fff", textDecoration: "none", background: "#f85606", borderRadius: "14px 14px 22px 14px", lineHeight: 1.25, boxShadow: "0 5px 0 rgba(0,0,0,.12)" }} className="text-xl sm:text-2xl px-7 py-3 sm:px-10 sm:py-3.5">
              যে কোনো প্রয়োজনে কল করুনঃ<br />01713536549
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
