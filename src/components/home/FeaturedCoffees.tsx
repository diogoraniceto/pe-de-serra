import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { coffees } from "@/data/products";
import { useIsMobile } from "@/hooks/use-mobile";

import packAmarelo from "@/assets/pack-amarelo.jpg";
import packVerde from "@/assets/pack-verde.jpg";
import packRosa from "@/assets/pack-rosa.jpg";
import packRoxo from "@/assets/pack-roxo.jpg";

const packImages: Record<string, string> = {
  amarelo: packAmarelo,
  verde: packVerde,
  rosa: packRosa,
  roxo: packRoxo
};

const FeaturedCoffees = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const isMobile = useIsMobile();
  const selectedCoffee = coffees.find((c) => c.id === selectedId);

  const handleSelect = (id: string) => {
    setSelectedId((prev) => prev === id ? null : id);
  };

  return (
    <section className="bg-serra-black py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16">

          <p className="font-body text-serra-gold text-sm uppercase tracking-[0.3em] mb-4">Destaques

          </p>
          <h2 className="font-blackletter text-5xl md:text-6xl text-serra-offwhite">
            nossas seleções
          </h2>
        </motion.div>

        {/* Desktop/Tablet Grid */}
        {!isMobile ?
        <div className="flex flex-col items-center">
            <div
            className={`grid gap-6 transition-all duration-500 ${
            selectedId ?
            "grid-cols-4 max-w-3xl" :
            "grid-cols-2 md:grid-cols-4 max-w-5xl"} w-full`
            }>

              {coffees.map((coffee) => {
              const isSelected = coffee.id === selectedId;
              const hasSelection = selectedId !== null;

              return (
                <motion.div
                  key={coffee.id}
                  layout
                  onClick={() => handleSelect(coffee.id)}
                  className="cursor-pointer flex flex-col items-center"
                  animate={{
                    opacity: hasSelection && !isSelected ? 0.4 : 1,
                    scale: hasSelection && !isSelected ? 0.9 : 1
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}>

                    <motion.div
                    className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
                    isSelected ?
                    "ring-2 ring-serra-gold shadow-[0_0_30px_rgba(191,155,75,0.3)]" :
                    "ring-1 ring-transparent hover:ring-serra-gold/50"}`
                    }
                    whileHover={!hasSelection ? { scale: 1.05 } : {}}
                    transition={{ duration: 0.3 }}>

                      <img
                      src={packImages[coffee.color]}
                      alt={`Embalagem ${coffee.name}`}
                      className="w-full h-auto object-cover" />

                    </motion.div>
                    <p className="font-blackletter text-lg text-serra-offwhite mt-3 text-center">
                      {coffee.name}
                    </p>
                  </motion.div>);

            })}
            </div>

            {/* Desktop Detail Panel */}
            <AnimatePresence mode="wait">
              {selectedCoffee &&
            <motion.div
              key={selectedCoffee.id}
              initial={{ opacity: 0, y: 30, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: 20, height: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full max-w-3xl mt-12 overflow-hidden">

                  <CoffeeDetails coffee={selectedCoffee} />
                </motion.div>
            }
            </AnimatePresence>
          </div> : (

        /* Mobile: Horizontal scroll */
        <div>
            <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6 scrollbar-hide">
              {coffees.map((coffee) => {
              const isSelected = coffee.id === selectedId;
              return (
                <motion.div
                  key={coffee.id}
                  className="snap-center shrink-0 w-[200px] cursor-pointer flex flex-col items-center"
                  onClick={() => handleSelect(coffee.id)}
                  animate={{
                    opacity: selectedId && !isSelected ? 0.4 : 1,
                    scale: selectedId && !isSelected ? 0.9 : 1
                  }}
                  transition={{ duration: 0.4 }}>

                    <div
                    className={`relative overflow-hidden rounded-lg ${
                    isSelected ?
                    "ring-2 ring-serra-gold shadow-[0_0_20px_rgba(191,155,75,0.3)]" :
                    ""}`
                    }>

                      <img
                      src={packImages[coffee.color]}
                      alt={`Embalagem ${coffee.name}`}
                      className="w-full h-auto" />

                    </div>
                    <p className="font-blackletter text-base text-serra-offwhite mt-2 text-center">
                      {coffee.name}
                    </p>
                  </motion.div>);

            })}
            </div>

            {/* Mobile Detail Panel */}
            <AnimatePresence mode="wait">
              {selectedCoffee &&
            <motion.div
              key={selectedCoffee.id}
              initial={{ opacity: 0, y: 20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: 10, height: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-8 overflow-hidden">

                  <CoffeeDetails coffee={selectedCoffee} />
                </motion.div>
            }
            </AnimatePresence>
          </div>)
        }
      </div>
    </section>);

};

/* ---------- Detail sub-component ---------- */
import type { Coffee } from "@/data/products";

const CoffeeDetails = ({ coffee }: {coffee: Coffee;}) =>
<div className="border border-serra-gold/20 rounded-lg p-8 bg-serra-black/80 backdrop-blur">
    <div className="flex flex-col md:flex-row gap-8 items-start">
      <div className="flex-1 space-y-4">
        <p className="font-body text-serra-gold text-xs uppercase tracking-[0.3em]">
          {coffee.region}
        </p>
        <h3 className="font-blackletter text-4xl text-serra-offwhite">
          {coffee.name}
        </h3>
        <p className="font-body text-sm text-serra-offwhite/60">
          Produtor: {coffee.producer} &bull; {coffee.process} &bull;{" "}
          {coffee.altitude}
        </p>

        {/* Sensory notes – staggered animation */}
        <div className="flex gap-2 flex-wrap pt-2">
          {coffee.notes.map((note, i) =>
        <motion.span
          key={note}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, duration: 0.3 }}
          className="font-body text-xs uppercase tracking-wider text-serra-gold border border-serra-gold/30 px-3 py-1 rounded-full">

              {note}
            </motion.span>
        )}
        </div>

        <p className="font-body text-serra-offwhite/70 leading-relaxed text-sm pt-2">
          {coffee.description}
        </p>
      </div>

      <div className="flex flex-col items-center gap-4">
        {/* Score */}
        {coffee.score &&
      <div className="text-center">
            <p className="font-body text-xs text-serra-gold uppercase tracking-widest mb-1">
              Pontuação SCA
            </p>
            <p className="font-blackletter text-4xl text-serra-gold">
              {coffee.score}
            </p>
          </div>
      }

        {/* Prices */}
        <div className="flex gap-6 mt-2">
          {coffee.weights.map((w) =>
        <div key={w.weight} className="text-center">
              <p className="font-body text-xs text-serra-offwhite/50 uppercase">
                {w.weight}
              </p>
              <p className="font-body text-lg font-semibold text-serra-offwhite">
                {w.price}
              </p>
            </div>
        )}
        </div>

        {/* CTA */}
        <a
        href="https://wa.me/5500000000000"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block font-body text-sm uppercase tracking-widest bg-serra-green text-primary-foreground px-8 py-3 hover:bg-serra-gold hover:text-serra-black transition-all duration-300">

          Peça no WhatsApp
        </a>
      </div>
    </div>
  </div>;


export default FeaturedCoffees;