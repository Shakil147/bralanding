import Header from "@/components/home/Header";
import VideoSection from "@/components/home/VideoSection";
import BenefitsSection from "@/components/home/BenefitsSection";
import PriceBox from "@/components/home/PriceBox";
import WhyBuySection from "@/components/home/WhyBuySection";
import QualitySection from "@/components/home/QualitySection";
import ImportantPoints from "@/components/home/ImportantPoints";
import OrderForm from "@/components/home/OrderForm";
import FloatingButtons from "@/components/home/FloatingButtons";

export default function Home() {
  return (
    <div style={{ background: "#f7f9fc", width: "100%", overflowX: "hidden", color: "#222" }}>
      <Header />
      <VideoSection />
      <BenefitsSection />
      <PriceBox />
      <WhyBuySection />
      <QualitySection />
      <ImportantPoints />
      <OrderForm />
      <FloatingButtons />
    </div>
  );
}
