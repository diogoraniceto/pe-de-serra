import { motion } from "framer-motion";
import { ChevronDown, Coffee } from "lucide-react";
import logoWatermark from "@/assets/logo-pe-de-serra 1.png";
import logo from "@/assets/logo-pe-de-serra.png";
const HeroSectionSB = () => {
    const scrollToPricing = () => {
        document.getElementById("products-showcase")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-serra-black">
            {/* Logo top-left */}
            <div className="absolute top-0 left-0 z-20 px-6 py-3">
                <img src={logo} alt="Pé de Serra - Torra de Café" className="h-20 md:h-24 w-auto" />
            </div>
            {/* Background with overlay */}
            <div className="absolute inset-0 z-0 bg-serra-black">
                {/* Logo Translúcida centralizada como marca d'água */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="absolute inset-0 pointer-events-none z-[1] flex items-start justify-center pt-[8vh]"
                >
                    <img src={logoWatermark} alt="" className="w-[80vw] max-w-[700px] h-auto object-contain opacity-[0.20]" />
                </motion.div>

                <div className="absolute inset-0 bg-gradient-to-b from-serra-black/80 via-serra-black/60 to-serra-black" />
            </div>

            <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-20 flex flex-col items-center text-center">
                {/* The Hero's Desire (SB Passo 1) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-serra-gold/30 bg-serra-gold/10 text-serra-gold text-xs uppercase tracking-widest font-body mb-8"
                >
                    <Coffee size={14} />
                    <span>Direto das Montanhas do ES e MG</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-logo text-white mb-6 leading-tight uppercase tracking-[0.2em]"
                >
                    Pé de Serra <span className="text-serra-gold block mt-2">O Seu Novo Padrão</span>
                </motion.h1>

                {/* The Problem (SB Passo 2) */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-lg md:text-xl text-gray-300 font-body max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    O legado das montanhas, torrado com precisão. Do produtor familiar para a sua xícara.
                </motion.p>

                {/* Primary CTA */}
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    onClick={scrollToPricing}
                    className="group relative inline-flex items-center justify-center gap-3 bg-serra-gold text-serra-black px-8 py-5 text-sm md:text-base font-bold font-body uppercase tracking-[0.2em] hover:bg-white hover:text-serra-black transition-colors duration-300 shadow-[0_0_30px_rgba(202,174,124,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]"
                >
                    <Coffee size={20} className="transition-transform group-hover:scale-110" />
                    Garantir Meu Lote Fresco →
                </motion.button>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-0 w-full text-serra-gold/50 flex flex-col items-center gap-2 cursor-pointer"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                onClick={() => {
                    window.scrollBy({ top: window.innerHeight - 100, behavior: "smooth" });
                }}
            >
                <span className="font-body text-[10px] uppercase tracking-[0.2em] text-gray-400 text-center">Descubra o diferencial</span>
                <ChevronDown size={24} className="text-serra-gold" />
            </motion.div>
        </section>
    );
};

export default HeroSectionSB;
