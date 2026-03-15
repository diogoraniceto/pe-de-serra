import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import produtorEFabio from "@/assets/produtor_e_fabio.jpeg";
const ProducerSpotlight = () => {
  return <section className="py-32 px-6 bg-[#ede8de] overflow-hidden">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <motion.div initial={{
        opacity: 0,
        x: -40
      }} whileInView={{
        opacity: 1,
        x: 0
      }} viewport={{
        once: false
      }} transition={{
        duration: 0.8
      }} className="relative">
        <img src={produtorEFabio} alt="Produtor e Fábio Campos" className="w-full h-[500px] object-cover grayscale contrast-125" />
        <div className="absolute -top-4 -right-4 w-full h-full border-2 border-serra-gold -z-10" />
      </motion.div>

      <motion.div initial={{
        opacity: 0,
        x: 40
      }} whileInView={{
        opacity: 1,
        x: 0
      }} viewport={{
        once: false
      }} transition={{
        duration: 0.8
      }}>
        <p className="font-body text-serra-gold text-sm uppercase tracking-[0.3em] mb-2">
          Raízes
        </p>
        <h2 className="font-script text-5xl md:text-6xl text-foreground mb-8">
          Nossos produtores
        </h2>
        <p className="font-body text-muted-foreground leading-relaxed mb-6">
          Por trás de cada grão, existe uma família. Trabalhamos diretamente com produtores familiares das montanhas de Minas Gerais e Espírito Santo, valorizando o conhecimento passado de geração em geração.
        </p>
        <p className="font-body text-muted-foreground leading-relaxed mb-8">
          Nossos parceiros — Emílio Horst de Iúna, Eduardo Cerqueira de Manhuaçu e Gabriel Protázio de Forquilha do Rio — cultivam café com práticas sustentáveis, respeitando a terra e as tradições.
        </p>
        <Link to="/sobre" className="inline-block font-body text-sm uppercase tracking-widest border-2 border-foreground text-foreground px-8 py-3 hover:bg-foreground hover:text-background transition-all duration-300">
          Nossa história
        </Link>
      </motion.div>
    </div>
  </section>;
};
export default ProducerSpotlight;