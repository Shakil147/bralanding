import { HIND } from "../data";

export default function OfferOption({
  img,
  title,
  price,
  oldPrice,
  checked,
  onSelect,
}: {
  img: string;
  title: string;
  price: number;
  oldPrice?: number;
  checked: boolean;
  onSelect: () => void;
}) {
  return (
    <label
      style={{
        display: "flex",
        alignItems: "center",
        background: checked ? "#fff7f2" : "#fff",
        border: checked ? "1px solid var(--accent, #f85606)" : "1px solid #e3e8ef",
        borderRadius: 12,
        marginBottom: 16,
        cursor: "pointer",
        flexWrap: "wrap",
        gap: 12,
      }}
      className="flex-wrap gap-3 sm:gap-[22px] px-4 py-4 sm:px-6 sm:py-[18px]"
    >
      <input
        type="radio"
        name="offer"
        checked={checked}
        onChange={onSelect}
        style={{ width: 22, height: 22, accentColor: "var(--accent, #f85606)" }}
      />
      <img src={img} alt="" style={{ objectFit: "cover", borderRadius: 4 }} className="w-16 h-[72px] sm:w-[84px] sm:h-[96px]" />
      <span
        style={{
          fontFamily: HIND,
          fontWeight: 600,
          color: "#222",
          fontSize: "1em",
          lineHeight: 1.5,
        }}
        className="text-lg sm:text-2xl"
      >
        {title}
      </span>
      <span
        style={{
          marginLeft: "auto",
          fontFamily: HIND,
          fontWeight: 600,
          color: "#222",
          fontSize: "1em",
          lineHeight: 1.5,
          display: "flex",
          alignItems: "baseline",
          gap: 8,
        }}
        className="text-lg sm:text-2xl"
      >
        {oldPrice ? (
          <span style={{ color: "#999", textDecoration: "line-through", fontWeight: 400, fontSize: "0.75em" }}>
            ৳{oldPrice.toFixed(2)}
          </span>
        ) : null}
        ৳{price.toFixed(2)}
      </span>
    </label>
  );
}
