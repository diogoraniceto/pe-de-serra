import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
  const [hasAutoOpened, setHasAutoOpened] = useState(false);
  const isMobile = useIsMobile();
  const selectedCoffee = coffees.find((c) => c.id === selectedId);
  const currentIndex = selectedId ? coffees.findIndex(c => c.id === selectedId) : -1;
  const containerRef = useRef<HTMLDivElement>(null);

  // Aguarda até que 50% do container dos cards esteja visível na tela
  const isInView = useInView(containerRef, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView && !selectedId && !hasAutoOpened) {
      setSelectedId(coffees[0].id);
      setHasAutoOpened(true);
    }
  }, [isInView, selectedId, hasAutoOpened]);

  const handleSelect = (id: string) => {
    setSelectedId(id);
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (currentIndex >= 0) {
      const nextIndex = (currentIndex + 1) % coffees.length;
      handleSelect(coffees[nextIndex].id);
    }
  };

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (currentIndex >= 0) {
      const prevIndex = (currentIndex - 1 + coffees.length) % coffees.length;
      handleSelect(coffees[prevIndex].id);
    }
  };

  const handleViewportEnter = () => {
    if (!selectedId && !hasAutoOpened) {
      setSelectedId(coffees[0].id);
      setHasAutoOpened(true);
    }
  };

  return (
    <section className="bg-[#0D0D0D] pt-48 pb-32 px-6 overflow-hidden relative">
      {/* Subtle technical divider */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/10" />

      <div className="max-w-7xl mx-auto">
        {/* Transition text line */}
        <div className="mb-24 pt-8">
          <p className="font-body text-serra-offwhite/40 text-[11px] md:text-xs tracking-[0.2em] uppercase border-l border-white/20 pl-4">
            Da técnica à xícara: explore nossos lotes atuais.
          </p>
        </div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-left mb-16">

          <p className="font-body text-serra-gold text-sm uppercase tracking-[0.3em] mb-4">
            Destaques
          </p>
          <h2 className="font-blackletter text-5xl md:text-6xl text-serra-offwhite">
            Nossas seleções
          </h2>
        </motion.div>

        <div className="w-full">


          {/* Desktop/Tablet Grid */}
          {!isMobile ?
            <div className="flex flex-col items-center" ref={containerRef}>
              <div
                className={`grid gap-4 md:gap-8 transition-all duration-500 grid-cols-4 max-w-5xl w-full`
                }>

                {coffees.map((coffee) => {
                  const isSelected = coffee.id === selectedId;

                  return (
                    <div key={coffee.id} className="flex flex-col items-center justify-center min-h-[200px]">
                      {!isSelected && (
                        <motion.div
                          layoutId={`coffee-card-${coffee.id}`}
                          onClick={() => handleSelect(coffee.id)}
                          className="cursor-pointer flex flex-col items-center"
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}>

                          <motion.div
                            layoutId={`coffee-image-${coffee.id}`}
                            className="relative overflow-hidden rounded-lg ring-1 ring-transparent hover:ring-serra-gold/50 transition-all duration-300">

                            <img
                              src={packImages[coffee.color]}
                              alt={`Embalagem ${coffee.name}`}
                              className="w-full h-auto object-cover max-w-[150px] md:max-w-full" />

                          </motion.div>
                          <p className="font-blackletter mt-3 text-center text-serra-offwhite text-lg transition-colors">
                            {coffee.name}
                          </p>
                        </motion.div>
                      )}
                    </div>
                  );

                })}
              </div>

              {/* Desktop Detail Panel */}
              <AnimatePresence mode="popLayout">
                {selectedCoffee &&
                  <motion.div
                    key={`detail-${selectedCoffee.id}`}
                    layoutId={`coffee-card-${selectedCoffee.id}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="w-full max-w-5xl mt-12 overflow-hidden">

                    <div className="border border-serra-gold/20 rounded-lg p-8 md:p-12 bg-serra-black/80 backdrop-blur">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <motion.div
                          layoutId={`coffee-image-${selectedCoffee.id}`}
                          className="w-full flex justify-center"
                        >
                          <img
                            src={packImages[selectedCoffee.color]}
                            alt={`Detalhe da Embalagem ${selectedCoffee.name}`}
                            className="w-full max-w-[400px] h-auto object-cover rounded shadow-[0_0_30px_rgba(191,155,75,0.15)]"
                          />
                        </motion.div>

                        <CoffeeDetails coffee={selectedCoffee} onNext={handleNext} onPrev={handlePrev} />
                      </div>
                    </div>
                  </motion.div>
                }
              </AnimatePresence>
            </div> : (

              /* Mobile: Horizontal scroll */
              <div ref={containerRef}>
                <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6 scrollbar-hide">
                  {coffees.map((coffee) => {
                    const isSelected = coffee.id === selectedId;
                    return (
                      <div key={coffee.id} className="snap-center shrink-0 w-[160px] min-h-[220px] flex justify-center items-center">
                        {!isSelected && (
                          <motion.div
                            layoutId={`coffee-card-${coffee.id}`}
                            className="cursor-pointer flex flex-col items-center"
                            onClick={() => handleSelect(coffee.id)}
                            transition={{ duration: 0.4 }}>

                            <motion.div
                              layoutId={`coffee-image-${coffee.id}`}
                              className="relative overflow-hidden rounded-lg">

                              <img
                                src={packImages[coffee.color]}
                                alt={`Embalagem ${coffee.name}`}
                                className="w-[120px] h-auto object-cover mx-auto" />

                            </motion.div>
                            <p className="font-blackletter text-base text-serra-offwhite mt-2 text-center">
                              {coffee.name}
                            </p>
                          </motion.div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Mobile Detail Panel */}
                <AnimatePresence mode="popLayout">
                  {selectedCoffee &&
                    <motion.div
                      key={`detail-mobile-${selectedCoffee.id}`}
                      layoutId={`coffee-card-${selectedCoffee.id}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      className="mt-8">

                      <div className="border border-serra-gold/20 rounded-lg p-6 md:p-8 bg-serra-black/80 backdrop-blur">
                        <div className="flex flex-col gap-8 items-center">
                          <motion.div
                            layoutId={`coffee-image-${selectedCoffee.id}`}
                            className="w-full flex justify-center"
                          >
                            <img
                              src={packImages[selectedCoffee.color]}
                              alt={`Detalhe da Embalagem ${selectedCoffee.name}`}
                              className="w-full max-w-[280px] h-auto object-cover rounded shadow-[0_0_30px_rgba(191,155,75,0.15)]"
                            />
                          </motion.div>
                          <CoffeeDetails coffee={selectedCoffee} onNext={handleNext} onPrev={handlePrev} />
                        </div>
                      </div>
                    </motion.div>
                  }
                </AnimatePresence>
              </div>)
          }
        </div>
      </div>
    </section>);

};

/* ---------- Detail sub-component ---------- */
import type { Coffee } from "@/data/products";

const CoffeeDetails = ({ coffee, onNext, onPrev }: { coffee: Coffee; onNext: () => void; onPrev: () => void; }) =>
  <div className="flex flex-col gap-6 w-full">
    <div className="space-y-4">
      <p className="font-body text-serra-gold text-xs uppercase tracking-[0.3em]">
        {coffee.region}
      </p>
      <h3 className="font-blackletter text-4xl lg:text-5xl text-serra-offwhite">
        {coffee.name}
      </h3>
      <p className="font-body text-sm text-serra-offwhite/70">
        Produtor: {coffee.producer} &bull; {coffee.process} &bull;{" "}
        {coffee.altitude}
      </p>

      {/* Sensory notes */}
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

      <p className="font-body text-serra-offwhite/70 leading-relaxed text-base pt-2">
        {coffee.description}
      </p>
    </div>

    <div className="flex flex-col items-start gap-6 border-t border-serra-gold/20 pt-6 mt-2">
      <div className="flex flex-row w-full justify-between items-center gap-4 flex-wrap">
        {/* Score */}
        {coffee.score &&
          <div className="text-left">
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
            <div key={w.weight} className="text-left">
              <p className="font-body text-xs text-serra-offwhite/50 uppercase">
                {w.weight}
              </p>
              <p className="font-body text-lg font-semibold text-serra-offwhite">
                {w.price}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* CTA */}
      <a
        href="https://wa.me/5500000000000"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full text-center mt-2 inline-block font-body text-sm uppercase tracking-widest bg-serra-green text-primary-foreground px-8 py-4 hover:bg-serra-gold hover:text-serra-black transition-all duration-300">

        Pedir Este Café →
      </a>

      {/* Navigation */}
      <div className="flex justify-between w-full mt-4 pt-6 border-t border-serra-gold/10">
        <button onClick={onPrev} className="flex items-center gap-2 text-serra-gold/70 hover:text-serra-gold transition-colors font-body text-sm uppercase tracking-widest">
          <ChevronLeft size={16} /> Anterior
        </button>
        <button onClick={onNext} className="flex items-center gap-2 text-serra-gold/70 hover:text-serra-gold transition-colors font-body text-sm uppercase tracking-widest">
          Próximo <ChevronRight size={16} />
        </button>
      </div>
    </div>
  </div>;


export default FeaturedCoffees;