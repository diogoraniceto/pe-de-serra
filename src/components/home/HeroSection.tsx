import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import heroFarm from "@/assets/hero-farm.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroFarm})` }}
      >
        <div className="absolute inset-0 bg-serra-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-body text-serra-gold text-sm uppercase tracking-[0.3em] mb-6"
        >
          Cafés Especiais • Minas Gerais
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-script text-6xl md:text-8xl lg:text-9xl text-primary-foreground mb-6"
        >
          Pé de Serra
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-body text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Cafés especiais das montanhas de Minas Gerais.
          <br />
          Do produtor familiar à sua xícara.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Link
            to="/cafes"
            className="inline-block font-body text-sm uppercase tracking-widest border-2 border-serra-gold text-serra-gold px-8 py-4 hover:bg-serra-gold hover:text-serra-black transition-all duration-300"
          >
            Conheça Nossos Cafés →
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/50 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="font-body text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
