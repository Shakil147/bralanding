export default function LandingPageNotFound() {
  return (
    <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 12, textAlign: "center", padding: 24 }}>
      <h1 style={{ fontSize: 32, fontWeight: 700 }}>পণ্যটি খুঁজে পাওয়া যায়নি</h1>
      <p style={{ fontSize: 18, color: "#555" }}>এই লিংকে কোনো পণ্য নেই। সঠিক লিংক চেক করুন।</p>
      <a href="/" style={{ color: "#f85606", fontWeight: 600 }}>হোম পেজে ফিরে যান</a>
    </div>
  );
}
