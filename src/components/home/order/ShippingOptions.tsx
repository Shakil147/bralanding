import { HIND, SHIPPING_OPTS } from "../data";

export default function ShippingOptions({
  shipIdx,
  onChange,
}: {
  shipIdx: number;
  onChange: (index: number) => void;
}) {
  return (
    <div style={{ border: "1px solid #d9e1ea", borderRadius: 8, overflow: "hidden" }}>
      {SHIPPING_OPTS.map((opt, i) => (
        <label
          key={opt.label}
          style={{ display: "flex", alignItems: "center", gap: 14, padding: "16px 18px", borderBottom: "1px solid #e4e9f0", cursor: "pointer", fontFamily: HIND, color: "#2a2a2a" }}
          className="text-base sm:text-xl"
        >
          <input
            type="radio"
            name="ship"
            checked={shipIdx === i}
            onChange={() => onChange(i)}
            style={{ width: 18, height: 18, accentColor: "#f85606", flexShrink: 0 }}
          />
          <span style={{ flex: 1, minWidth: 0 }} className="break-words">{opt.label}</span>
          <span style={{ fontWeight: 600, flexShrink: 0 }} className="whitespace-nowrap">৳ {opt.cost}</span>
        </label>
      ))}
    </div>
  );
}
