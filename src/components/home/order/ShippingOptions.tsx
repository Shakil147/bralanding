import { HIND, SHIPPING_OPTS } from "../data";

export default function ShippingOptions({
  shipIdx,
  onChange,
  options = SHIPPING_OPTS,
}: {
  shipIdx: number;
  onChange: (index: number) => void;
  options?: { label: string; cost: number }[];
}) {
  return (
    <div style={{ border: "1px solid #d9e1ea", borderRadius: 8, overflow: "hidden" }}>
      {options.map((opt, i) => (
        <label
          key={opt.label}
          style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 14px", borderBottom: "1px solid #e4e9f0", cursor: "pointer", fontFamily: HIND, color: "#2a2a2a" }}
          className="text-sm xs:text-base sm:text-lg md:text-xl"
        >
          <input
            type="radio"
            name="ship"
            checked={shipIdx === i}
            onChange={() => onChange(i)}
            style={{ width: 18, height: 18, accentColor: "var(--accent, #f85606)", flexShrink: 0 }}
          />
          <span style={{ flex: 1, minWidth: 0 }} className="break-words">{opt.label}</span>
          <span style={{ fontWeight: 600, flexShrink: 0 }} className="whitespace-nowrap">৳ {opt.cost}</span>
        </label>
      ))}
    </div>
  );
}
