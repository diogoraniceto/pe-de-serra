import { motion } from "framer-motion";
import { coffees } from "@/data/products";
import coffeeProduct from "@/assets/coffee-product.jpg";

const FeaturedCoffees = () => {
  const featured = coffees.slice(0, 2);

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
            Destaques
          </p>
          <h2 className="font-blackletter text-5xl md:text-6xl text-foreground">
            nossas seleções
          </h2>
        </motion.div>

        <div className="space-y-24">
          {featured.map((coffee, i) => (
            <motion.div
              key={coffee.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                i % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <img
                  src={coffeeProduct}
                  alt={coffee.name}
                  className="w-full h-[450px] object-cover"
                />
              </div>

              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <p className="font-body text-serra-gold text-xs uppercase tracking-[0.3em] mb-2">
                  {coffee.region} {coffee.score && `• ${coffee.score} pts`}
                </p>
                <h3 className="font-blackletter text-4xl text-foreground mb-4">
                  {coffee.name}
                </h3>
                <div className="flex gap-3 mb-6">
                  {coffee.notes.map((note) => (
                    <span
                      key={note}
                      className="font-body text-xs uppercase tracking-wider text-muted-foreground border border-border px-3 py-1"
                    >
                      {note}
                    </span>
                  ))}
                </div>
                <p className="font-body text-muted-foreground leading-relaxed mb-6">
                  {coffee.description}
                </p>
                <div className="flex gap-4 mb-8">
                  {coffee.weights.map((w) => (
                    <div key={w.weight} className="text-center">
                      <p className="font-body text-xs text-muted-foreground uppercase">{w.weight}</p>
                      <p className="font-body text-lg font-semibold text-foreground">{w.price}</p>
                    </div>
                  ))}
                </div>
                <a
                  href="https://wa.me/5500000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-body text-sm uppercase tracking-widest bg-serra-green text-primary-foreground px-8 py-3 hover:bg-serra-gold hover:text-serra-black transition-all duration-300"
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

export default FeaturedCoffees;
