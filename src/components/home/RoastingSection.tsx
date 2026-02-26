import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import baristaVideo from "@/assets/barista_torra.mp4";

const RoastingSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={baristaVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-serra-black/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-serra-gold text-sm uppercase tracking-[0.3em] mb-4">
            Barista & Torrador
          </p>
          <h2 className="font-blackletter text-5xl md:text-6xl text-primary-foreground mb-8">
            Arte da torra
          </h2>
          <p className="font-body text-primary-foreground/80 leading-relaxed mb-6">
            Fábio é barista certificado e especialista em torra artesanal. Cada lote é cuidadosamente torrado para revelar as características únicas de cada origem — das notas achocolatadas do Caparaó aos tons florais de Matas de Minas.
          </p>
          <p className="font-body text-primary-foreground/80 leading-relaxed mb-8">
            O processo de cupping (degustação técnica) garante que apenas grãos com pontuação acima de 80 pontos cheguem até você. Torra artesanal sob demanda: o intervalo exato entre o mestre torrador e o seu ritual.
          </p>
          <Link
            to="/sobre"
            className="inline-block font-body text-sm uppercase tracking-widest border-2 border-serra-gold text-serra-gold px-8 py-3 hover:bg-serra-gold hover:text-serra-black transition-all duration-300"
          >
            Ver o processo de torra
          </Link>
        </motion.div>

        <div className="hidden lg:block" />
      </div>
    </section>
  );
};

export default RoastingSection;
