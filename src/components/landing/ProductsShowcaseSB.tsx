import { motion } from "framer-motion";
import { coffees } from "@/data/products";
import { Mountain, User, Beaker, Leaf, MapPin } from "lucide-react";

const themeColors: Record<string, { bg: string, text: string, lightBg: string }> = {
    amarelo: { bg: "bg-yellow-500", text: "text-amber-600 dark:text-yellow-500", lightBg: "bg-yellow-500/10" },
    verde: { bg: "bg-green-600", text: "text-green-700 dark:text-green-500", lightBg: "bg-green-600/10" },
    rosa: { bg: "bg-pink-500", text: "text-pink-600 dark:text-pink-400", lightBg: "bg-pink-500/10" },
    roxo: { bg: "bg-purple-600", text: "text-purple-600 dark:text-purple-400", lightBg: "bg-purple-600/10" },
};

const ProductsShowcaseSB = () => {
    return (
        <section className="py-24 bg-serra-black min-h-screen relative" id="products-showcase">
            {/* Background Decorator */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-serra-gold/20 to-transparent" />

            <div className="max-w-[1400px] mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        className="text-serra-gold font-body text-xs md:text-sm uppercase tracking-[0.3em] mb-4"
                    >
                        Nossos Cafés
                    </motion.h3>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-script text-white leading-tight mb-6"
                    >
                        Qual perfil <br className="md:hidden" /> é o seu?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 font-body text-base md:text-lg"
                    >
                        4 origens, 4 personalidades. Do frutado ao achocolatado — encontre o grão que combina com a sua manhã.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {coffees.map((coffee, i) => {
                        const theme = themeColors[coffee.color] || themeColors.amarelo;
                        return (
                            <motion.div
                                key={coffee.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative bg-[#111111] border border-[#222222] rounded-[4px] hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col overflow-hidden text-left"
                            >
                                {/* Top accent line */}
                                <div className={`absolute top-0 left-0 right-0 h-[3px] ${theme.bg}`} />

                                <div className="p-6 flex-1 flex flex-col">
                                    {/* Header */}
                                    <div className="mb-6">
                                        <div className="flex items-center gap-2 mb-2">
                                            <MapPin size={14} className="text-gray-400" />
                                            <span className="font-body text-xs text-gray-400 uppercase tracking-wider">{coffee.region}</span>
                                        </div>
                                        <h3 className="font-body font-medium text-xl text-white tracking-tight leading-tight">{coffee.name}</h3>
                                        {coffee.score && (
                                            <span className="inline-block mt-3 font-body text-[11px] font-medium text-white bg-white/10 px-2 py-1 rounded">
                                                {coffee.score} pts SCA
                                            </span>
                                        )}
                                    </div>

                                    {/* Tech Specs */}
                                    <div className="space-y-3 mb-6">
                                        <div className="flex items-center gap-3">
                                            <User size={14} className="text-gray-400" />
                                            <span className="font-body text-sm text-gray-300">{coffee.producer}</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Mountain size={14} className="text-gray-400" />
                                            <span className="font-body text-sm text-gray-300">{coffee.altitude}</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Leaf size={14} className="text-gray-400" />
                                            <span className="font-body text-sm text-gray-300">{coffee.variety}</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Beaker size={14} className="text-gray-400" />
                                            <span className="font-body text-sm text-gray-300">{coffee.process}</span>
                                        </div>
                                    </div>

                                    {/* Sensory Notes */}
                                    <div className="mb-8">
                                        <p className="font-body text-[10px] text-gray-500 mb-3 uppercase tracking-wider">Notas Sensoriais</p>
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

                                    <div className="mt-auto">
                                        {/* Pricing */}
                                        <div className="pt-5 border-t border-[#222222] space-y-2 mb-6">
                                            {coffee.weights.map((w) => (
                                                <div key={w.weight} className="flex justify-between items-center">
                                                    <span className="font-body text-sm text-gray-400">{w.weight}</span>
                                                    <span className="font-body text-sm font-medium text-white">{w.price}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <a
                                            href="https://wa.me/5500000000000"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block w-full text-center font-body text-sm font-medium bg-serra-green text-white py-3 rounded-[4px] hover:opacity-90 transition-opacity"
                                        >
                                            Pedir no WhatsApp
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ProductsShowcaseSB;
