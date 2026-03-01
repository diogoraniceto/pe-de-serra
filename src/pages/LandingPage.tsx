import { motion } from "framer-motion";
import HeroSectionSB from "@/components/landing/HeroSectionSB";
import GuideSectionSB from "@/components/landing/GuideSectionSB";
import ProductsShowcaseSB from "@/components/landing/ProductsShowcaseSB";
import StakesSectionSB from "@/components/landing/StakesSectionSB";
import FAQSectionSB from "@/components/landing/FAQSectionSB";

const LandingPage = () => {
    return (
        <div className="bg-serra-black min-h-screen text-primary-foreground font-body selection:bg-serra-gold/30">
            <HeroSectionSB />
            <GuideSectionSB />
            <ProductsShowcaseSB />
            <StakesSectionSB />
            <FAQSectionSB />
        </div>
    );
};

export default LandingPage;
