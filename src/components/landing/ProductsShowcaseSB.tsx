import { motion } from "framer-motion";
import { coffees } from "@/data/products";

const ProductsShowcaseSB = () => {
    return (
        <section className="py-24 bg-serra-black min-h-screen relative" id="products-showcase">
            {/* Background Decorator */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-serra-gold/20 to-transparent" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-serra-gold font-body text-xs md:text-sm uppercase tracking-[0.3em] mb-4"
                    >
                        Nossos Cafés
                    </motion.h3>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-script text-white leading-tight mb-6"
                    >
                        Qual perfil <br className="md:hidden" /> é o seu?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 font-body text-base md:text-lg"
                    >
                        4 origens, 4 personalidades. Do frutado ao achocolatado — encontre o grão que combina com a sua manhã.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {coffees.map((coffee, index) => (
                        <motion.div
                            key={coffee.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-serra-black group border border-white/5 rounded-sm p-8 hover:border-serra-gold/30 transition-all duration-500 flex flex-col items-center cursor-pointer relative overflow-hidden"
                            onClick={() => {
                                document.getElementById("pricing-section")?.scrollIntoView({ behavior: "smooth" });
                            }}
                        >
                            {/* Hover effect background */}
                            <div className="absolute inset-0 bg-gradient-to-b from-serra-gold/5 object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

                            {/* Decorative line top */}
                            <div className="w-12 h-px bg-serra-gold/30 mb-8 relative z-10" />

                            <div className="relative w-32 h-40 flex-shrink-0 mb-8 z-10 transform group-hover:-translate-y-2 transition-transform duration-500">
                                <img
                                    src={coffee.image}
                                    alt={`Embalagem do café ${coffee.name}`}
                                    className="w-full h-full object-contain filter drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)]"
                                />
                            </div>

                            <div className="text-center relative z-10 flex-grow flex flex-col">
                                <h4 className="font-script text-2xl text-serra-gold mb-2">{coffee.name}</h4>
                                <p className="font-body text-[10px] uppercase tracking-wider text-gray-500 mb-4">{coffee.process}</p>

                                <div className="flex flex-wrap justify-center gap-1.5 mb-6">
                                    {coffee.notes.slice(0, 3).map((note, i) => (
                                        <span
                                            key={i}
                                            className="px-2 py-1 text-[10px] font-body bg-white/5 text-gray-300 rounded-sm border border-white/10"
                                        >
                                            {note}
                                        </span>
                                    ))}
                                    {coffee.notes.length > 3 && (
                                        <span className="px-2 py-1 text-[10px] font-body bg-white/5 text-gray-300 rounded-sm border border-white/10">
                                            +{coffee.notes.length - 3}
                                        </span>
                                    )}
                                </div>

                                <div className="mt-auto pt-6 border-t border-white/5 w-full">
                                    <span className="font-body text-xs text-serra-gold uppercase tracking-widest group-hover:underline transition-all">
                                        Selecionar →
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductsShowcaseSB;
