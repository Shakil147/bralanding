import { HIND } from "./data";
import { Variant } from "@/lib/types";

export default function PriceBox({
  price = 999,
  oldPrice = 1500,
  variants,
  priceLabel,
}: {
  price?: number;
  oldPrice?: number;
  variants?: Variant[];
  priceLabel?: string;
}) {
  return (
    <section style={{ maxWidth: 1040, margin: "0 auto" }} className="px-4 sm:px-[22px] py-5 sm:py-[50px]">
      <div style={{ background: "#F0F6FD", border: "1px solid var(--accent, #FF4600)", borderRadius: 16, textAlign: "center" }} className="p-[5px] sm:px-[20px] sm:py-[20px]">
        <p style={{ fontFamily: HIND, fontWeight: 600, color: "#3a3a3a", margin: "0 0 16px" }} className="text-lg sm:text-xl md:text-[33px]">
          রেগুলার প্রাইস {priceLabel ? `${priceLabel} ` : "- "}
          <span style={{ position: "relative", display: "inline-block", color: "#3a3a3a" }}>
            <span style={{ fontFamily: HIND, fontWeight: 700 }}>{oldPrice}/- টাকা</span>
            <svg
              viewBox="0 0 500 150"
              preserveAspectRatio="none"
              aria-hidden="true"
              style={{ position: "absolute", left: "50%", top: "50%", width: "calc(100% + 20px)", height: "calc(100% + 20px)", transform: "translate(-50%, -50%)", overflow: "visible" }}
            >
              <path d="M497.4,23.9C301.6,40,155.9,80.6,4,144.4" fill="none" stroke="#FF0101" strokeWidth="20" />
              <path d="M14.1,27.6c204.5,20.3,393.8,74,467.3,111.7" fill="none" stroke="#FF0101" strokeWidth="20" />
            </svg>
          </span>
        </p>
        <p style={{ fontFamily: HIND, fontWeight: 600, color: "#3a3a3a", margin: 0 }} className="text-lg sm:text-xl md:text-[33px]">
          {priceLabel ? `অফার প্রাইজ ${priceLabel} ` : "এখন মাত্র "}
          {variants && variants.length > 0 ? (
            variants.map((v, i) => (
              <span key={v.id}>
                {i > 0 ? " & " : ""}
                {v.size}{" "}
                <span style={{ position: "relative", display: "inline-block" }}>
                  <span style={{ fontFamily: HIND, fontWeight: 700 }}>{v.price}/-</span>
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
                </span>
              </span>
            ))
          ) : (
            <span style={{ position: "relative", display: "inline-block" }}>
              <span style={{ fontFamily: HIND, fontWeight: 700 }}>{price}{priceLabel ? "/=" : "/-"} টাকা মাত্র</span>
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
            </span>
          )}
          {variants && variants.length > 0 ? " টাকা মাত্র" : ""}
        </p>
      </div>
    </section>
  );
}
