import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import producerBw from "@/assets/producer-bw.jpg";
const ProducerSpotlight = () => {
  return <section className="py-24 px-6 bg-[#ede8de]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{
        opacity: 0,
        x: -40
      }} whileInView={{
        opacity: 1,
        x: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8
      }} className="relative">
          <img src={producerBw} alt="Produtor de café familiar" className="w-full h-[500px] object-cover grayscale contrast-125" />
          <div className="absolute -top-4 -right-4 w-full h-full border-2 border-serra-gold -z-10" />
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        x: 40
      }} whileInView={{
        opacity: 1,
        x: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8
      }}>
          <p className="font-body text-serra-gold text-sm uppercase tracking-[0.3em] mb-2">
            Producer Spotlight
          </p>
          <h2 className="font-script text-5xl md:text-6xl text-foreground mb-8">
            Nossos Produtores
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-6">
            Por trás de cada grão, existe uma família. Trabalhamos diretamente com produtores
            familiares das montanhas de Minas Gerais, valorizando o conhecimento passado de geração
            em geração.
          </p>
          <p className="font-body text-muted-foreground leading-relaxed mb-8">
            Nossos parceiros cultivam café com práticas sustentáveis, respeitando a terra e as
            tradições. Cada saca que compramos fortalece essas comunidades e preserva a cultura
            cafeeira da região.
          </p>
          <Link to="/sobre" className="inline-block font-body text-sm uppercase tracking-widest border-2 border-foreground text-foreground px-8 py-3 hover:bg-foreground hover:text-background transition-all duration-300">
            Conheça os Produtores
          </Link>
        </motion.div>
      </div>
    </section>;
};
export default ProducerSpotlight;