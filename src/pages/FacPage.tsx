import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import FAQSection from "@/components/home/FAQSection";
import BackToHome from "@/components/BackToHome";

const FacPage = () => {
    return (
        <div className="font-body min-h-screen flex flex-col bg-serra-cream">
            <Navbar />
            <main className="flex-1 pt-24 pb-16 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <FAQSection />
                    <div className="mt-12">
                        <BackToHome variant="dark" />
                    </div>
                </div>
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default FacPage;
