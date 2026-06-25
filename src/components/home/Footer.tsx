import { Organization } from "@/lib/types";
import { HIND } from "./data";

export default function Footer({ org }: { org: Organization | null }) {
  if (!org) return null;

  return (
    <footer style={{ background: "#222", color: "#ccc" }} className="px-4 py-8 sm:px-[22px]">
      <div style={{ maxWidth: 1140, margin: "0 auto" }}>
        <h2 style={{ fontFamily: HIND, fontWeight: 700, color: "#fff", margin: "0 0 12px" }} className="text-xl">
          {org.name}
        </h2>
        <div style={{ fontFamily: HIND, fontSize: 14, lineHeight: 1.7 }}>
          {org.phone ? <p style={{ margin: "4px 0" }}>ফোন: {org.phone}</p> : null}
          {org.whatsapp ? <p style={{ margin: "4px 0" }}>হোয়াটসঅ্যাপ: {org.whatsapp}</p> : null}
          {org.email ? <p style={{ margin: "4px 0" }}>ইমেইল: {org.email}</p> : null}
          {org.address ? <p style={{ margin: "4px 0" }}>ঠিকানা: {org.address}</p> : null}
        </div>
        {Array.isArray(org.social_links) && org.social_links.length ? (
          <div style={{ marginTop: 16, display: "flex", gap: 16, flexWrap: "wrap" }}>
            {org.social_links.map((url) => (
              <a key={url} href={url} target="_blank" rel="noopener noreferrer" style={{ color: "#fff", fontFamily: HIND, fontSize: 14, textDecoration: "underline" }}>
                {url.replace(/^https?:\/\//, "")}
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </footer>
  );
}
