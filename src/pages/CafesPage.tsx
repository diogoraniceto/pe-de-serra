import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { coffees } from "@/data/products";

type Region = "Todas" | "Espírito Santo" | "Minas Gerais";

const colorClasses = {
  amarelo: "bg-yellow-500",
  verde: "bg-green-600",
  rosa: "bg-pink-400",
  roxo: "bg-purple-600",
};

const CafesPage = () => {
  const [filter, setFilter] = useState<Region>("Todas");
  const filters: Region[] = ["Todas", "Espírito Santo", "Minas Gerais"];

  const filtered = filter === "Todas" 
    ? coffees 
    : coffees.filter((c) => {
        if (filter === "Espírito Santo") {
          return c.region.includes("ES");
        }
        return c.region.includes("MG");
      });

  return (
    <div className="font-body">
      <Navbar />

      {/* Hero */}
      <section className="bg-serra-green pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-body text-serra-gold text-sm uppercase tracking-[0.3em] mb-4">
            Catálogo
          </p>
          <h1 className="font-blackletter text-5xl md:text-7xl text-primary-foreground mb-6">
            nossos cafés
          </h1>
          <p className="font-body text-primary-foreground/70 max-w-xl mx-auto">
            Conheça nossa seleção de cafés especiais das montanhas do Espírito Santo e Minas Gerais, 
            torrados artesanalmente para revelar o melhor de cada origem.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-background py-8 px-6 border-b border-border">
        <div className="max-w-7xl mx-auto flex justify-center gap-4 flex-wrap">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`font-body text-sm uppercase tracking-widest px-6 py-2 transition-all duration-300 ${
                filter === f
                  ? "bg-serra-green text-primary-foreground"
                  : "border border-border text-muted-foreground hover:border-serra-gold hover:text-serra-gold"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* Products Grid */}
      <section className="bg-background py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((coffee, i) => (
            <motion.div
              key={coffee.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="border border-border hover:border-serra-gold transition-all duration-300 group"
            >
              {/* Color block header */}
              <div className={`h-48 ${colorClasses[coffee.color]} flex items-center justify-center`}>
                <div className="text-center text-white">
                  <p className="font-blackletter text-3xl mb-1">{coffee.name}</p>
                  <p className="font-body text-xs uppercase tracking-widest opacity-80">{coffee.variety}</p>
                </div>
              </div>
              
              <div className="p-6">
                <p className="font-body text-xs uppercase tracking-wider text-serra-gold mb-1">
                  {coffee.region} {coffee.score && `• ${coffee.score} pts`}
                </p>
                <p className="font-body text-[10px] uppercase tracking-wider text-muted-foreground mb-3">
                  {coffee.producer} • {coffee.process} • {coffee.altitude}
                </p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                  {coffee.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {coffee.notes.map((note) => (
                    <span
                      key={note}
                      className="font-body text-[10px] uppercase tracking-wider text-muted-foreground border border-border px-2 py-0.5"
                    >
                      {note}
                    </span>
                  ))}
                </div>
                <div className="space-y-1 mb-6">
                  {coffee.weights.map((w) => (
                    <div key={w.weight} className="flex justify-between">
                      <span className="font-body text-sm text-muted-foreground">{w.weight}</span>
                      <span className="font-body text-sm font-semibold text-foreground">{w.price}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="https://wa.me/5500000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center font-body text-xs uppercase tracking-widest bg-serra-green text-primary-foreground py-3 hover:bg-serra-gold hover:text-serra-black transition-all duration-300"
                >
                  Peça no WhatsApp
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default CafesPage;
