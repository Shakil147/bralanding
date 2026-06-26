import { HIND } from "../data";

const offerOptionStyles = `
  .offer-option-label {
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
    text-align: center;
    position: relative;
  }

  .offer-option-label .offer-radio {
    position: absolute;
    top: 12px;
    left: 12px;
    margin: 0;
  }

  .offer-option-label .offer-image {
    width: 100%;
    max-width: 140px;
    height: auto;
    aspect-ratio: 1;
    margin: 0 auto;
  }

  .offer-option-label .offer-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
  }

  .offer-option-label .offer-title {
    text-align: center;
  }

  .offer-option-label .offer-price {
    display: flex;
    flex-direction: column;
    gap: 6px;
    align-items: center;
  }

  @media (min-width: 640px) {
    .offer-option-label {
      flex-direction: row;
      align-items: center;
      gap: 20px;
      text-align: left;
    }

    .offer-option-label .offer-radio {
      position: static;
      margin-top: 2px;
      flex-shrink: 0;
    }

    .offer-option-label .offer-image {
      width: auto;
      max-width: 140px;
      flex-shrink: 0;
      margin: 0;
    }

    .offer-option-label .offer-content {
      width: auto;
      flex: 1;
      text-align: left;
      flex-direction: row;
      align-items: baseline;
      gap: 12px;
    }

    .offer-option-label .offer-title {
      text-align: left;
      flex: 1;
    }

    .offer-option-label .offer-price {
      display: flex;
      flex-direction: row;
      gap: 6px;
      align-items: baseline;
      flex-shrink: 0;
      white-space: nowrap;
    }
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
        className="offer-option-label px-3 py-4 xs:px-4 xs:py-5 sm:px-6 sm:py-6 md:px-8"
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
          paddingTop: "48px",
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
            flexShrink: 0,
            cursor: "pointer",
          }}
        />

        <img
          src={img}
          alt={title}
          className="offer-image"
          style={{ objectFit: "cover", borderRadius: 8 }}
        />

        <div
          className="offer-content"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 8,
            minWidth: 0,
          }}
        >
          <div
            className="offer-title"
            style={{
              fontFamily: HIND,
              fontWeight: 600,
              color: "#222",
              lineHeight: 1.3,
              wordBreak: "break-word",
            }}
            className="text-base xs:text-lg sm:text-xl md:text-2xl"
          >
            {title}
          </div>

          <div
            className="offer-price"
            style={{
              fontFamily: HIND,
              display: "flex",
              flexDirection: "column",
              gap: 6,
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
                fontSize: "inherit",
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
