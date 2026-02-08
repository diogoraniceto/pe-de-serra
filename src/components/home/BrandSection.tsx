import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import coffeePrep from "@/assets/coffee-prep.jpg";

const BrandSection = () => {
  return (
    <section className="bg-background py-24 px-6">
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
          <h2 className="font-blackletter text-5xl md:text-6xl text-foreground mb-8">
            cafés especiais
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-6">
            Na Pé de Serra, acreditamos que cada xícara conta uma história. Selecionamos grãos de
            produtores familiares das regiões do Caparaó e Matas de Minas, onde a altitude, o clima
            e o cuidado artesanal se unem para criar cafés de qualidade excepcional.
          </p>
          <p className="font-body text-muted-foreground leading-relaxed mb-8">
            Nossa torra artesanal é cuidadosamente conduzida por Fábio, barista e especialista em
            torra, que busca revelar o melhor de cada grão — preservando suas notas sensoriais
            únicas e a identidade da sua origem.
          </p>
          <Link
            to="/sobre"
            className="inline-block font-body text-sm uppercase tracking-widest border-2 border-foreground text-foreground px-8 py-3 hover:bg-foreground hover:text-background transition-all duration-300"
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
            src={coffeePrep}
            alt="Preparação de café especial"
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-serra-gold" />
        </motion.div>
      </div>
    </section>
  );
};

export default BrandSection;
