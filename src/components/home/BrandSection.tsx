import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import brandLifestyle from "@/assets/brand-lifestyle.png";

const BrandSection = () => {
  return (
    <section className="bg-serra-black py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-serra-gold text-sm uppercase tracking-[0.3em] mb-4">
            Nossa Essência
          </p>
          <h2 className="font-blackletter text-5xl md:text-7xl text-primary-foreground mb-8">
            cafés especiais
          </h2>
          <p className="font-body text-primary-foreground/90 leading-relaxed mb-6 text-lg">
            Nós da Pé de Serra, acreditamos que cada xícara conta uma história. Selecionamos grãos de produtores familiares das regiões do Caparaó e Matas de Minas, onde a altitude, o clima e o cuidado artesanal se unem para criar cafés de qualidade excepcional.
          </p>
          <p className="font-body text-primary-foreground/80 leading-relaxed mb-10">
            Nossa torra artesanal é cuidadosamente conduzida por Fábio, barista e especialista em
            torra, que busca revelar o melhor de cada grão — preservando suas notas sensoriais
            únicas e a identidade da sua origem.
          </p>
          <Link
            to="/sobre"
            className="inline-block font-body text-sm uppercase tracking-widest border-2 border-serra-gold text-serra-gold px-8 py-4 hover:bg-serra-gold hover:text-serra-black transition-all duration-300"
          >
            Conheça Nossa História
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <img
            src={brandLifestyle}
            alt="Café especial Pé de Serra"
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute -top-4 -left-4 w-full h-full border-2 border-serra-gold -z-10" />
        </motion.div>
      </div>
    </section>
  );
};

export default BrandSection;
