import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/home/Header";
import VideoSection from "@/components/home/VideoSection";
import BenefitsSection from "@/components/home/BenefitsSection";
import PriceBox from "@/components/home/PriceBox";
import WhyBuySection from "@/components/home/WhyBuySection";
import QualitySection from "@/components/home/QualitySection";
import ImportantPoints from "@/components/home/ImportantPoints";
import OrderForm from "@/components/home/OrderForm";
import FloatingButtons from "@/components/home/FloatingButtons";
import ViewContentTracker from "@/components/home/ViewContentTracker";
import { getLandingPage } from "@/lib/api";

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const page = await getLandingPage(slug).catch(() => null);
  if (!page) return {};
  return {
    title: `${page.title} — Narimon Closet`,
    description: page.subtitle,
  };
}

export default async function LandingPage({ params }: Params) {
  const { slug } = await params;
  const page = await getLandingPage(slug).catch(() => null);

  if (!page) notFound();

  const defaultOffer = page.offers[0];

  return (
    <div style={{ background: "#f7f9fc", width: "100%", overflowX: "hidden", color: "#222" }}>
      <ViewContentTracker slug={page.slug} price={defaultOffer.price} />
      <Header title={page.title} subtitle={page.subtitle} price={defaultOffer.price} offerLabel={defaultOffer.label} />
      <VideoSection videoId={page.video_id} title={page.title} />
      <BenefitsSection title={`${page.title} ব্যবহারে যেসব সুবিধা পাবেন:`} benefits={page.benefits} banner={page.banner} />
      <PriceBox price={defaultOffer.price} oldPrice={defaultOffer.old_price} />
      <WhyBuySection whyBuy={page.why_buy} image={page.banner} />
      <QualitySection gallery={page.gallery} />
      <ImportantPoints points={page.important_points} phone={page.phone} />
      <OrderForm
        slug={page.slug}
        offers={page.offers}
        sizes={page.sizes}
        shippingOptions={page.shipping_options}
      />
      <FloatingButtons whatsapp={page.whatsapp} />
    </div>
  );
}
