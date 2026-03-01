import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import logoWatermark from "@/assets/logo-pe-de-serra 1.png";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image - comentado */}
      {/* <div
                                                       className="absolute inset-0 bg-cover bg-center"
                                                       style={{ backgroundImage: `url(${heroFarm})` }}
                                                      >
                                                       <div className="absolute inset-0 bg-serra-black/60" />
                                                      </div> */}

      {/* Background video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover">

          <source
            src="https://uaxraccxizldcvuwjitt.supabase.co/storage/v1/object/public/app/0208%20(1).mp4"
            type="video/mp4" />

        </video>
        <div className="absolute inset-0 bg-serra-black/60" />
      </div>

      {/* Logo Translúcida centralizada na tela inteira */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-[1] pointer-events-none flex items-start justify-center pt-[8vh]"
      >
        <img src={logoWatermark} alt="" className="w-[80vw] max-w-[700px] h-auto object-contain opacity-[0.20]" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center items-center text-center px-6 max-w-4xl">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-body text-serra-gold text-xs uppercase tracking-[0.3em] mb-2"
        >
          Cafés Especiais
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-logo text-5xl md:text-7xl lg:text-8xl text-primary-foreground mb-3 uppercase tracking-[0.2em] leading-none"
        >
          Pé de Serra
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="font-body text-serra-gold/80 text-[11px] uppercase tracking-[0.4em] mb-8"
        >
          Espírito Santo • Minas Gerais
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-body text-primary-foreground/80 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
        >
          O legado das montanhas, torrado com precisão. Do produtor familiar para a sua xícara.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="z-20 relative"
        >
          <Link
            to="/cafes"
            className="inline-block font-body text-sm uppercase tracking-widest bg-serra-gold text-serra-black font-semibold px-10 py-4 hover:bg-white hover:text-serra-black transition-all duration-300 shadow-[0_0_30px_rgba(202,174,124,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
          >
            Conheça nossos cafés →
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/50 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}>

        <span className="font-body text-xs uppercase tracking-widest">ROLAR
        </span>
        <ChevronDown size={20} />
      </motion.div>
    </section>);
};

export default HeroSection;