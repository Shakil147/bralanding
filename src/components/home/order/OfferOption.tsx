import { HIND } from "../data";

export default function OfferOption({
  img,
  title,
  price,
  checked,
}: {
  img: string;
  title: string;
  price: number;
  checked: boolean;
}) {
  return (
    <label
      style={{ display: "flex", alignItems: "center", background: "#fff", border: "1px solid #e3e8ef", borderRadius: 12, marginBottom: 30, cursor: "pointer" }}
      className="flex-wrap gap-3 sm:gap-[22px] px-4 py-4 sm:px-6 sm:py-[18px]"
    >
      <input type="radio" name="offer" checked={checked} readOnly style={{ width: 22, height: 22, accentColor: "#f85606" }} />
      <img src={img} alt="" style={{ objectFit: "cover", borderRadius: 4 }} className="w-16 h-[72px] sm:w-[84px] sm:h-[96px]" />
      <span style={{ fontFamily: HIND, fontWeight: 600, color: "#222" }} className="text-lg sm:text-2xl">
        {title}
      </span>
      <span style={{ marginLeft: "auto", fontFamily: HIND, fontWeight: 600, color: "#222" }} className="text-lg sm:text-2xl">
        ৳{price.toFixed(2)}
      </span>
    </label>
  );
}
