import Link from "next/link";
import { LandingPage } from "@/lib/types";
import { HIND } from "./data";

export default function Catalog({ pages }: { pages: LandingPage[] }) {
  return (
    <section style={{ maxWidth: 1140, margin: "40px auto" }} className="px-4 sm:px-[22px]">
      <h2 style={{ fontFamily: HIND, fontWeight: 700, color: "#222", margin: "0 0 24px" }} className="text-2xl sm:text-[30px]">
        আমাদের পণ্যসমূহ
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
        {pages.map((page) => {
          const cheapest = page.offers.reduce((a, b) => (b.price < a.price ? b : a), page.offers[0]);
          return (
            <Link
              key={page.slug}
              href={`/landingpage/${page.slug}`}
              style={{ display: "block", background: "#fff", border: "1px solid #e3e8ef", borderRadius: 12, overflow: "hidden", textDecoration: "none", color: "#222" }}
            >
              <img src={page.thumbnail} alt={page.title} style={{ width: "100%", aspectRatio: "1/1", objectFit: "cover" }} />
              <div style={{ padding: 12 }}>
                <h3 style={{ fontFamily: HIND, fontWeight: 600, fontSize: 16, margin: "0 0 6px" }}>{page.title}</h3>
                <p style={{ fontFamily: HIND, fontSize: 14, color: "#555", margin: 0 }}>
                  {cheapest.old_price ? (
                    <span style={{ color: "#999", textDecoration: "line-through", marginRight: 6 }}>৳{cheapest.old_price}</span>
                  ) : null}
                  <span style={{ fontWeight: 700, color: "#f85606" }}>৳{cheapest.price}</span> থেকে
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
