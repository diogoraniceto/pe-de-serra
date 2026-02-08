import { motion } from "framer-motion";
import { coffees } from "@/data/products";

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
              className="border border-border p-6 hover:border-serra-gold transition-colors duration-300 group"
            >
              <p className="font-body text-xs uppercase tracking-wider text-serra-gold mb-2">
                {coffee.region}
              </p>
              <h3 className="font-blackletter text-2xl text-foreground mb-3">
                {coffee.name}
              </h3>
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
