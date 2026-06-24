import Catalog from "@/components/home/Catalog";
import FloatingButtons from "@/components/home/FloatingButtons";
import { getLandingPages } from "@/lib/api";

export default async function Home() {
  const pages = await getLandingPages().catch(() => []);

  return (
    <div style={{ background: "#f7f9fc", width: "100%", overflowX: "hidden", color: "#222" }}>
      <Catalog pages={pages} />
      <FloatingButtons />
    </div>
  );
}
