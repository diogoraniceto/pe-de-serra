import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import produtorEFabio from "@/assets/produtor_e_fabio.jpeg";
import produtoresNovo from "@/assets/produtores_novo_sem_zoom.jpeg";

const photos = [
  { src: produtorEFabio, alt: "Produtor e Fábio Campos", filter: "grayscale contrast-125" },
  { src: produtoresNovo, alt: "Família produtora parceira", filter: "grayscale contrast-110 brightness-125" },
];

const ProducerSpotlight = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % photos.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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
        <div className="relative overflow-hidden h-[500px]">
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={photos[current].src}
              alt={photos[current].alt}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5 }}
              className={`w-full h-full object-cover ${photos[current].filter}`}
            />
          </AnimatePresence>
          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {photos.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? "bg-serra-gold scale-125" : "bg-white/60"}`}
              />
            ))}
          </div>
          {/* Arrows */}
          <button
            onClick={() => setCurrent((current - 1 + photos.length) % photos.length)}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-black/30 hover:bg-black/50 text-white transition-colors"
          >‹</button>
          <button
            onClick={() => setCurrent((current + 1) % photos.length)}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-black/30 hover:bg-black/50 text-white transition-colors"
          >›</button>
        </div>
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