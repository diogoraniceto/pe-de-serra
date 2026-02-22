import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import regionCaparao from "@/assets/region-caparao.jpg";
import regionMatas from "@/assets/region-matas.jpg";

const regions = [
  {
    name: "Caparaó",
    image: regionCaparao,
    description: "Altitude acima de 1.000m, microclima único e o Pico da Bandeira como guardião dos cafezais.",
  },
  {
    name: "Matas de Minas",
    image: regionMatas,
    description: "Vales férteis e florestas preservadas que dão vida a cafés com perfil floral e frutado.",
  },
];

const RegionsSection = () => {
  return (
    <section className="bg-serra-green pt-24 pb-0 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-body text-serra-gold text-sm uppercase tracking-[0.3em] mb-4">
            Origem
          </p>
          <h2 className="font-blackletter text-5xl md:text-6xl text-primary-foreground">
            nossas regiões
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {regions.map((region, i) => (
            <motion.div
              key={region.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="relative group cursor-pointer flex flex-col items-center"
            >
              {/* Text above image */}
              <div className="text-center mb-6">
                <h3 className="font-blackletter text-4xl md:text-5xl text-primary-foreground mb-4">
                  {region.name}
                </h3>
                <p className="font-body text-primary-foreground/80 text-sm max-w-xs mx-auto leading-relaxed mb-4">
                  {region.description}
                </p>
                <Link
                  to="/cafes"
                  className="font-body text-sm uppercase tracking-widest text-serra-gold border-b border-serra-gold pb-1 hover:text-primary-foreground hover:border-primary-foreground transition-colors"
                >
                  Ver Cafés →
                </Link>
              </div>

              {/* Arch-top image - bottom aligned with section */}
              <div className="arch-top overflow-hidden h-[350px] md:h-[420px] w-full max-w-[380px]">
                <img
                  src={region.image}
                  alt={region.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegionsSection;
