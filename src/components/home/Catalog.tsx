import Link from "next/link";
import Image from "next/image";
import { LandingPage } from "@/lib/types";
import { HIND } from "./data";

export default function Catalog({ pages }: { pages: LandingPage[] }) {
  return (
    <section style={{ maxWidth: 1140, margin: "28px auto" }} className="px-3 xs:px-4 sm:px-5 md:px-6">
      <h2 style={{ fontFamily: HIND, fontWeight: 700, color: "#222", margin: "0 0 18px" }} className="text-xl xs:text-2xl sm:text-3xl md:text-[30px]">
        আমাদের পণ্যসমূহ
      </h2>
      <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 xs:gap-3 sm:gap-4 md:gap-5 lg:gap-6">
        {pages.map((page) => {
          const cheapest = page.offers.reduce((a, b) => (b.price < a.price ? b : a), page.offers[0]);
          return (
            <Link
              key={page.slug}
              href={`/landingpage/${page.slug}`}
              style={{ display: "flex", flexDirection: "column", background: "#fff", border: "1px solid #e3e8ef", borderRadius: 10, overflow: "hidden", textDecoration: "none", color: "#222", transition: "box-shadow 0.2s, transform 0.2s" }}
              className="hover:shadow-lg hover:scale-105 active:scale-95"
            >
              <div style={{ position: "relative", width: "100%", aspectRatio: "1/1", flexShrink: 0 }}>
                <Image
                  src={page.thumbnail}
                  alt={page.title}
                  fill
                  sizes="(max-width: 480px) 50vw, (max-width: 640px) 50vw, (max-width: 768px) 33vw, 285px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "10px", display: "flex", flexDirection: "column", flex: 1 }}>
                <h3 style={{ fontFamily: HIND, fontWeight: 600, margin: "0 0 8px", lineHeight: 1.3 }} className="text-sm xs:text-base sm:text-base md:text-lg">
                  {page.title}
                </h3>
                <div style={{ fontFamily: HIND, display: "flex", flexDirection: "column", gap: 4, marginTop: "auto" }}>
                  {cheapest.old_price ? (
                    <span style={{ color: "#999", textDecoration: "line-through", fontSize: "0.875em" }} className="text-xs xs:text-sm">
                      ৳{cheapest.old_price}
                    </span>
                  ) : null}
                  <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                    <span style={{ fontWeight: 700, color: "#f85606" }} className="text-sm xs:text-base sm:text-lg md:text-xl">
                      ৳{cheapest.price}
                    </span>
                    {/* <span style={{ fontSize: "0.875em", color: "#555" }} className="text-xs xs:text-sm">
                      থেকে
                    </span> */}
                  </div>
                </div>
                <div
                  style={{ fontFamily: HIND, fontWeight: 600, color: "#fff", background: "#f85606", textAlign: "center", borderRadius: 6, padding: "8px 0", marginTop: 10 }}
                  className="text-xs xs:text-sm sm:text-base"
                >
                  অর্ডার করুন
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
