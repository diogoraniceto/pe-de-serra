import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import regionCaparao from "@/assets/region-caparao.jpg";
import regionMatas from "@/assets/region-matas.jpg";

const regions = [
  {
    name: "Caparaó",
    image: regionCaparao,
    description: "Altitude que beira as nuvens e o microclima único dão vida a cafés com acidez brilhante e cítrica, revelando doçura de mel e rapadura com o brilho das frutas.",
    altitude: "1000m - 1500m",
    terroir: "Clima de Altitude"
  },
  {
    name: "Matas de Minas",
    image: regionMatas,
    description: "Vales férteis e florestas preservadas que geram cafés super encorpados. O perfil sensorial destaca a doçura do caramelo e notas achocolatadas.",
    altitude: "800m - 1200m",
    terroir: "Mata Atlântica"
  },
];

const RegionsSection = () => {
  return (
    <section className="bg-serra-green py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <p className="font-body text-serra-gold text-sm uppercase tracking-[0.3em] mb-4">
            Origem
          </p>
          <h2 className="font-blackletter text-5xl md:text-6xl text-primary-foreground">
            Nossas regiões
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {regions.map((region, i) => (
            <motion.div
              key={region.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="relative group overflow-hidden w-full h-[600px] md:h-[750px] flex items-center justify-center"
            >
              {/* Arch shape container */}
              <div className="arch-top w-full h-full relative overflow-hidden">
                <img
                  src={region.image}
                  alt={region.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-serra-black/60 group-hover:bg-serra-black/50 transition-colors duration-500" />

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 md:p-12 z-10 text-primary-foreground">
                  <h3 className="font-blackletter text-5xl md:text-6xl mb-6">
                    {region.name}
                  </h3>

                  {/* Ficha Técnica / Tags */}
                  <div className="flex flex-wrap justify-center gap-3 mb-8">
                    <div className="border border-serra-gold/50 bg-serra-black/30 backdrop-blur-sm px-4 py-1.5 rounded-full">
                      <p className="font-body text-xs text-serra-gold uppercase tracking-widest">
                        Altitude: <span className="text-primary-foreground font-medium">{region.altitude}</span>
                      </p>
                    </div>
                    <div className="border border-serra-gold/50 bg-serra-black/30 backdrop-blur-sm px-4 py-1.5 rounded-full">
                      <p className="font-body text-xs text-serra-gold uppercase tracking-widest">
                        Terroir: <span className="text-primary-foreground font-medium">{region.terroir}</span>
                      </p>
                    </div>
                  </div>

                  <p className="font-body text-primary-foreground/90 text-sm md:text-base max-w-sm mb-10 leading-relaxed font-light">
                    {region.description}
                  </p>

                  <Link
                    to="/cafes"
                    className="font-body text-sm uppercase tracking-widest border-b border-serra-gold pb-1 text-serra-gold hover:text-white hover:border-white transition-colors"
                  >
                    Ver Cafés →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegionsSection;
