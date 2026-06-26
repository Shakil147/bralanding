import { HIND } from "../data";

const offerOptionStyles = `
  .offer-option-label {
    flex-direction: column;
    gap: 0;
    align-items: stretch;
    text-align: center;
  }

  .offer-option-label .offer-radio {
    position: absolute;
    top: 12px;
    left: 12px;
    margin: 0;
    z-index: 10;
  }

  .offer-option-label .offer-image {
    width: 100%;
    height: auto;
    aspect-ratio: 1;
    object-fit: cover;
    display: block;
  }

  .offer-option-label .offer-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    padding: 16px 12px;
    flex: 1;
  }

  .offer-option-label .offer-title {
    text-align: center;
    word-break: break-word;
    flex: 1;
  }

  .offer-option-label .offer-price {
    display: flex;
    flex-direction: column;
    gap: 4px;
    align-items: center;
    margin-top: auto;
  }
`;

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
    <>
      <style>{offerOptionStyles}</style>
      <label
        className="offer-option-label"
        style={{
          display: "flex",
          background: checked ? "#fff7f2" : "#fff",
          border: checked ? "2px solid var(--accent, #f85606)" : "1px solid #e3e8ef",
          borderRadius: 16,
          marginBottom: 14,
          cursor: "pointer",
          width: "100%",
          boxSizing: "border-box",
          transition: "all 0.2s ease",
          boxShadow: checked ? "0 4px 12px rgba(248, 86, 6, 0.15)" : "0 2px 4px rgba(0, 0, 0, 0.05)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <input
          className="offer-radio"
          type="radio"
          name="offer"
          checked={checked}
          onChange={onSelect}
          style={{
            width: 24,
            height: 24,
            accentColor: "var(--accent, #f85606)",
            cursor: "pointer",
          }}
        />

        <img
          src={img}
          alt={title}
          className="offer-image"
        />

        <div className="offer-content">
          <div
            className="offer-title text-base xs:text-lg sm:text-xl md:text-2xl"
            style={{
              fontFamily: HIND,
              fontWeight: 600,
              color: "#222",
              lineHeight: 1.3,
            }}
          >
            {title}
          </div>

          <div
            className="offer-price"
            style={{
              fontFamily: HIND,
            }}
          >
            {oldPrice ? (
              <span
                style={{
                  color: "#999",
                  textDecoration: "line-through",
                  fontWeight: 400,
                }}
                className="text-xs xs:text-sm sm:text-base"
              >
                ৳{oldPrice.toFixed(2)}
              </span>
            ) : null}
            <span
              style={{
                fontWeight: 700,
                color: "#f85606",
              }}
              className="text-lg xs:text-xl sm:text-2xl md:text-3xl"
            >
              ৳{price.toFixed(2)}
            </span>
          </div>
        </div>
      </label>
    </>
  );
}
