import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import fabioCafe from "@/assets/fabio-cafe.png";

const BrandSection = () => {
  return (
    <section className="bg-serra-black py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-serra-gold text-sm uppercase tracking-[0.3em] mb-4">
            Nossa essência
          </p>
          <h2 className="font-blackletter text-5xl md:text-7xl text-primary-foreground mb-8">
            Cafés especiais
          </h2>
          <p className="font-body text-primary-foreground/90 leading-relaxed mb-6 text-lg">
            Honramos a jornada de cada grão. Do Caparaó às Matas de Minas, selecionamos apenas o que a altitude e o cuidado artesanal podem criar.
          </p>
          <p className="font-body text-primary-foreground/80 leading-relaxed mb-10 text-lg">
            Nossa torra artesanal é cuidadosamente conduzida por Fábio Campos, barista e especialista em torra, que busca revelar o melhor de cada grão — preservando suas notas sensoriais únicas e a identidade da sua origem.
          </p>
          <Link
            to="/sobre"
            className="inline-block font-body text-sm uppercase tracking-widest border-2 border-serra-gold text-serra-gold px-8 py-4 hover:bg-serra-gold hover:text-serra-black transition-all duration-300"
          >
            Conheça quem torra seu café
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="relative h-[600px] w-full"
        >
          <img
            src={fabioCafe}
            alt="Barista preparando café com latte art"
            className="w-full h-full object-cover rounded-sm"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default BrandSection;