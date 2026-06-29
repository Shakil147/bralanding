import type { CSSProperties } from "react";
import Catalog from "@/components/home/Catalog";
import FloatingButtons from "@/components/home/FloatingButtons";
import Footer from "@/components/home/Footer";
import HomeHero from "@/components/home/HomeHero";
import { getLandingPages, getOrganization } from "@/lib/api";

export default async function Home() {
  const [pages, org] = await Promise.all([
    getLandingPages().catch(() => []),
    getOrganization().catch(() => null),
  ]);

  return (
    <div
      style={{
        background: "#f7f9fc",
        width: "100%",
        overflowX: "hidden",
        color: "#222",
        ...(org?.default_color ? { "--accent": org.default_color } as CSSProperties : {}),
        ...(org?.secondary_color ? { "--accent-secondary": org.secondary_color } as CSSProperties : {}),
      }}
    >
      <HomeHero name={org?.name} logo={org?.logo} tagline={org?.tagline} />
      <Catalog pages={pages} />
      <Footer org={org} />
      <FloatingButtons whatsapp={org?.whatsapp} socialLinks={org?.social_links} />
    </div>
  );
}
