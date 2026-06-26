export default function CallButton({ phone }: { phone: string }) {
  const display = phone.startsWith("880") ? `0${phone.slice(3)}` : phone;
  return (
    <a href={`https://wa.me/${phone}`} style={{ display: "inline-block", fontFamily: '"Hind Siliguri", sans-serif', fontWeight: 500, fontSize: 23, color: "#fff", fill: "#fff", textDecoration: "none", background: "var(--accent, #FF4600)", border: "1px solid #000", borderRadius: "30px 0px 30px 0px" }} className="px-7 py-3 sm:px-10 sm:py-3.5 leading-[1.3em] sm:leading-normal">
      <span style={{ display: "flex", flexDirection: "row", gap: 5, justifyContent: "center" }}>
        <span style={{ display: "inline-block", textDecoration: "inherit" }}>যে কোনো প্রয়োজনে কল করুন: <br />{display}</span>
      </span>
    </a>
  );
}
