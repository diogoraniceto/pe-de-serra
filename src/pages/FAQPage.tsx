import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import FAQSection from "@/components/home/FAQSection";

const FAQPage = () => {
  return (
    <div className="font-body">
      <Navbar />
      <main className="pt-20">
        <FAQSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default FAQPage;
