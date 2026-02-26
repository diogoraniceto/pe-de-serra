import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import FAQSection from "@/components/home/FAQSection";

const FacPage = () => {
    return (
        <div className="font-body min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 pt-20">
                <FAQSection />
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default FacPage;
