import { motion } from "framer-motion";
import { coffees } from "@/data/products";

const colorClasses = {
  amarelo: "bg-yellow-500",
  verde: "bg-green-600",
  rosa: "bg-pink-400",
  roxo: "bg-purple-600",
};

const PricingSection = () => {
  return (
    <section className="bg-background py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-body text-serra-gold text-sm uppercase tracking-[0.3em] mb-4">
            Produtos
          </p>
          <h2 className="font-blackletter text-5xl md:text-6xl text-foreground">
            nossos cafés
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coffees.map((coffee, i) => (
            <motion.div
              key={coffee.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border border-border hover:border-serra-gold transition-colors duration-300 group"
            >
              {/* Color indicator */}
              <div className={`h-2 ${colorClasses[coffee.color]}`} />
              
              <div className="p-6">
                <p className="font-body text-xs uppercase tracking-wider text-serra-gold mb-1">
                  {coffee.region}
                </p>
                <p className="font-body text-[10px] uppercase tracking-wider text-muted-foreground mb-2">
                  {coffee.producer} • {coffee.altitude}
                </p>
                <h3 className="font-blackletter text-2xl text-foreground mb-1">
                  {coffee.name}
                </h3>
                <p className="font-body text-xs text-muted-foreground mb-3">
                  {coffee.variety} • {coffee.process}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {coffee.notes.slice(0, 3).map((note) => (
                    <span
                      key={note}
                      className="font-body text-[10px] uppercase tracking-wider text-muted-foreground border border-border px-2 py-0.5"
                    >
                      {note}
                    </span>
                  ))}
                </div>
                {coffee.score && (
                  <p className="font-body text-xs text-serra-gold mb-3">
                    ★ {coffee.score} pts
                  </p>
                )}
                <div className="space-y-2 mb-6">
                  {coffee.weights.map((w) => (
                    <div key={w.weight} className="flex justify-between items-center">
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
      </div>
    </section>
  );
};

export default PricingSection;
