import { HIND } from "./data";

const PRICE_TAIL_RE = /([০-৯0-9]+\s*\/[-=]\s*টাকা(?:\s*মাত্র)?)\s*$/;

function splitPriceLine(line: string): { prefix: string; price: string } {
  const match = line.match(PRICE_TAIL_RE);
  if (!match) return { prefix: line, price: "" };
  return { prefix: line.slice(0, match.index), price: match[1] };
}

function StrikeSvg() {
  return (
    <svg
      viewBox="0 0 500 150"
      preserveAspectRatio="none"
      aria-hidden="true"
      style={{ position: "absolute", left: "50%", top: "50%", width: "calc(100% + 20px)", height: "calc(100% + 20px)", transform: "translate(-50%, -50%)", overflow: "visible" }}
    >
      <path d="M497.4,23.9C301.6,40,155.9,80.6,4,144.4" fill="none" stroke="#FF0101" strokeWidth="20" />
      <path d="M14.1,27.6c204.5,20.3,393.8,74,467.3,111.7" fill="none" stroke="#FF0101" strokeWidth="20" />
    </svg>
  );
}

function DoodleSvg() {
  return (
    <svg
      viewBox="0 0 500 150"
      preserveAspectRatio="none"
      aria-hidden="true"
      style={{ position: "absolute", left: "50%", top: "50%", width: "calc(100% + 20px)", height: "calc(100% + 20px)", transform: "translate(-50%, -50%)", overflow: "visible" }}
    >
      <path
        d="M3,146.1c17.1-8.8,33.5-17.8,51.4-17.8c15.6,0,17.1,18.1,30.2,18.1c22.9,0,36-18.6,53.9-18.6 c17.1,0,21.3,18.5,37.5,18.5c21.3,0,31.8-18.6,49-18.6c22.1,0,18.8,18.8,36.8,18.8c18.8,0,37.5-18.6,49-18.6c20.4,0,17.1,19,36.8,19 c22.9,0,36.8-20.6,54.7-18.6c17.7,1.4,7.1,19.5,33.5,18.8c17.1,0,47.2-6.5,61.1-15.6"
        fill="none"
        stroke="#00FF23"
        strokeWidth="20"
      />
    </svg>
  );
}

export default function PriceBox({
  oldPriceLine,
  newPriceLine,
}: {
  oldPriceLine?: string;
  newPriceLine?: string;
}) {
  if (!oldPriceLine && !newPriceLine) return null;

  const oldSplit = oldPriceLine ? splitPriceLine(oldPriceLine) : null;
  const newSplit = newPriceLine ? splitPriceLine(newPriceLine) : null;

  return (
    <section style={{ maxWidth: 1040, margin: "0 auto" }} className="px-3 xs:px-4 sm:px-5 md:px-6 py-4 xs:py-6 sm:py-8 md:py-10 lg:py-[50px]">
      <div style={{ background: "#F0F6FD", border: "1px solid var(--accent, #FF4600)", borderRadius: 16, textAlign: "center", overflow: "hidden" }} className="p-3 xs:p-4 sm:px-5 sm:py-6 md:px-6 md:py-8">
        {oldSplit && (
          <p style={{ fontFamily: HIND, fontWeight: 600, color: "#3a3a3a", margin: "0 0 12px" }} className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-[33px]">
            {oldSplit.prefix}
            {oldSplit.price && (
              <span style={{ position: "relative", display: "inline-block", color: "#3a3a3a" }}>
                <span style={{ fontFamily: HIND, fontWeight: 700 }}>{oldSplit.price}</span>
                <StrikeSvg />
              </span>
            )}
          </p>
        )}
        {newSplit && (
          <p style={{ fontFamily: HIND, fontWeight: 600, color: "#3a3a3a", margin: 0 }} className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-[33px]">
            {newSplit.prefix}
            {newSplit.price && (
              <span style={{ position: "relative", display: "inline-block" }}>
                <span style={{ fontFamily: HIND, fontWeight: 700 }}>{newSplit.price}</span>
                <DoodleSvg />
              </span>
            )}
          </p>
        )}
      </div>
    </section>
  );
}
