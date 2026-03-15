import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { coffees } from "@/data/products";

import { Mountain, User, Beaker, Leaf, MapPin } from "lucide-react";
import BackToHome from "@/components/BackToHome";

type Region = "Todas" | "Espírito Santo" | "Minas Gerais";

const themeColors: Record<string, { bg: string, text: string, lightBg: string }> = {
  amarelo: { bg: "bg-yellow-500", text: "text-amber-600 dark:text-yellow-500", lightBg: "bg-yellow-500/10" },
  verde: { bg: "bg-green-600", text: "text-green-700 dark:text-green-500", lightBg: "bg-green-600/10" },
  rosa: { bg: "bg-pink-500", text: "text-pink-600 dark:text-pink-400", lightBg: "bg-pink-500/10" },
  roxo: { bg: "bg-purple-600", text: "text-purple-600 dark:text-purple-400", lightBg: "bg-purple-600/10" },
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
        <div className="max-w-7xl mx-auto text-center relative">
          <p className="font-body text-serra-gold text-sm uppercase tracking-[0.3em] mb-4">
            Catálogo
          </p>
          <h1 className="font-blackletter text-5xl md:text-7xl text-primary-foreground mb-6">
            Nossos cafés
          </h1>
          <p className="font-body text-primary-foreground/70 max-w-xl mx-auto">
            Lotes limitados. Altitude elevada. Torra fresca. Compare as especificações técnicas e escolha sua experiência sensorial definitiva.
          </p>
          <div className="mt-8">
            <BackToHome variant="light" />
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-background py-8 px-6 border-b border-border">
        <div className="max-w-7xl mx-auto flex justify-center gap-4 flex-wrap">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`font-body text-sm uppercase tracking-widest px-6 py-2 transition-all duration-300 ${filter === f
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
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((coffee, i) => {
            const theme = themeColors[coffee.color] || themeColors.amarelo;
            return (
              <motion.div
                key={coffee.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-[#F9F9F9] dark:bg-[#111111] border border-[#E5E5E5] dark:border-[#222222] rounded-[4px] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* Top accent line */}
                <div className={`absolute top-0 left-0 right-0 h-[3px] ${theme.bg}`} />

                <div className="p-6 h-full flex flex-col">
                  <div className="flex-1">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin size={14} className="text-muted-foreground" />
                        <span className="font-body text-xs text-muted-foreground uppercase tracking-wider">{coffee.region}</span>
                      </div>
                      <h3 className="font-body font-medium text-xl text-foreground tracking-tight leading-tight">{coffee.name}</h3>
                      {coffee.score && (
                        <span className="inline-block mt-3 font-body text-[11px] font-medium text-foreground bg-black/5 dark:bg-white/10 px-2 py-1 rounded">
                          {coffee.score} pts SCA
                        </span>
                      )}
                    </div>

                  {/* Tech Specs */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <User size={14} className="text-muted-foreground" />
                      <span className="font-body text-sm text-foreground/80">{coffee.producer}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mountain size={14} className="text-muted-foreground" />
                      <span className="font-body text-sm text-foreground/80">{coffee.altitude}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Leaf size={14} className="text-muted-foreground" />
                      <span className="font-body text-sm text-foreground/80">{coffee.variety}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Beaker size={14} className="text-muted-foreground" />
                      <span className="font-body text-sm text-foreground/80">{coffee.process}</span>
                    </div>
                  </div>

                  {/* Sensory Notes */}
                    <div className="mb-8">
                      <p className="font-body text-[10px] text-muted-foreground mb-3 uppercase tracking-wider">Notas Sensoriais</p>
                      <div className="flex flex-wrap gap-2">
                        {coffee.notes.map((note) => (
                          <span
                            key={note}
                            className={`font-body text-xs font-medium px-2 py-1 rounded-sm ${theme.lightBg} ${theme.text}`}
                          >
                            {note}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto">
                    {/* Pricing */}
                    <div className="pt-5 border-t border-[#E5E5E5] dark:border-[#222222] space-y-2 mb-6">
                      {coffee.weights.map((w) => (
                        <div key={w.weight} className="flex justify-between items-center">
                          <span className="font-body text-sm text-muted-foreground">{w.weight}</span>
                          <span className="font-body text-sm font-medium text-foreground">{w.price}</span>
                        </div>
                      ))}
                    </div>

                    <a
                      href="https://wa.me/5527999823382"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center font-body text-sm font-medium bg-foreground text-background py-3 rounded-[4px] hover:opacity-90 transition-opacity"
                    >
                      Pedir no WhatsApp
                    </a>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default CafesPage;
