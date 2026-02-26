import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import HeroSection from "@/components/home/HeroSection";
import BrandSection from "@/components/home/BrandSection";
import FeaturedCoffees from "@/components/home/FeaturedCoffees";
import RegionsSection from "@/components/home/RegionsSection";
import ProducerSpotlight from "@/components/home/ProducerSpotlight";
import RoastingSection from "@/components/home/RoastingSection";
import PricingSection from "@/components/home/PricingSection";
const Index = () => {
  return (
    <div className="font-body">
      <Navbar />
      <main>
        <HeroSection />
        <BrandSection />
        <FeaturedCoffees />
        <ProducerSpotlight />
        <RegionsSection />
        <RoastingSection />
        <PricingSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
