import { motion } from "framer-motion";
import { coffees } from "@/data/products";
import { Check, X, MessageCircle } from "lucide-react";

const StakesSectionSB = () => {
    return (
        <section className="bg-serra-black relative" id="pricing-section">
            {/* The Stakes (SB Passo 6 e 7 - Success/Failure) */}
            <div className="py-24 border-t border-white/5">
                <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">

                    {/* Failure State */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        className="bg-red-950/10 border border-red-900/20 p-8 rounded-sm"
                    >
                        <h3 className="font-script text-3xl text-gray-400 mb-6 flex items-center gap-3">
                            <span className="w-8 h-px bg-gray-600 block" />
                            Café Comum
                        </h3>
                        <ul className="space-y-4 font-body text-gray-500">
                            <li className="flex items-start gap-3">
                                <X className="w-5 h-5 text-red-900/50 shrink-0 mt-0.5" />
                                <span>Torra velha que perdeu aromas.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <X className="w-5 h-5 text-red-900/50 shrink-0 mt-0.5" />
                                <span>Extremamente amargo e adstringente.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <X className="w-5 h-5 text-red-900/50 shrink-0 mt-0.5" />
                                <span>Precisa de muito açúcar para ser bebido.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <X className="w-5 h-5 text-red-900/50 shrink-0 mt-0.5" />
                                <span>Apenas cafeína, sem experiência de sabor.</span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Success State */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.2 }}
                        className="bg-serra-gold/5 border border-serra-gold/20 p-8 rounded-sm relative overflow-hidden"
                    >
                        {/* Decal */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-serra-gold/10 rounded-full blur-3xl -mr-16 -mt-16" />

                        <h3 className="font-script text-3xl text-serra-gold mb-6 flex items-center gap-3">
                            <span className="w-8 h-px bg-serra-gold block" />
                            O Especial Pé de Serra
                        </h3>
                        <ul className="space-y-4 font-body text-gray-200">
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-serra-gold shrink-0 mt-0.5" />
                                <span>Torra fresca, feito sob demanda.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-serra-gold shrink-0 mt-0.5" />
                                <span>Doçura natural e notas sensoriais claras.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-serra-gold shrink-0 mt-0.5" />
                                <span>Delicioso puro, sem precisar adoçar.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-serra-gold shrink-0 mt-0.5" />
                                <span>Um ritual prazeroso e revigorante pela manhã.</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>

            {/* Pricing / Call to Action */}
            <div className="py-24 bg-gradient-to-b from-transparent to-serra-black border-t border-white/5 relative">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-fixed bg-center opacity-5 mix-blend-screen" />

                <div className="max-w-6xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-script text-serra-gold mb-6">
                            Escolha o <br className="md:hidden" /> Seu Lote
                        </h2>
                        <p className="text-gray-300 font-body text-lg max-w-2xl mx-auto">
                            Torrado sob demanda. Enviado em até 48h. Entrega para todo o Brasil.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Pacote 250g — Mais Vendido */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            className="bg-serra-gold/5 border-2 border-serra-gold p-10 flex flex-col items-center text-center rounded-sm relative scale-100 md:scale-105 shadow-[0_0_50px_rgba(202,174,124,0.1)] z-10 h-full"
                        >
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-serra-gold text-serra-black font-body text-[10px] uppercase font-bold tracking-widest whitespace-nowrap">
                                Mais Vendido
                            </div>
                            
                            <div className="flex-1 w-full flex flex-col items-center">
                                <h3 className="font-body text-xs uppercase tracking-[0.2em] text-serra-gold mb-2 mt-4">Qualquer Variedade</h3>
                                <div className="flex items-baseline gap-2 mb-6">
                                    <span className="font-script text-5xl text-white">250g</span>
                                </div>
                                <p className="font-body text-sm text-gray-300 mb-8 w-full border-b border-serra-gold/20 pb-8">
                                    Ideal para descobrir seu novo sabor favorito. Aproximadamente 25 xícaras.
                                </p>

                                <div className="space-y-3 w-full mb-10">
                                <div className="flex justify-between items-center text-sm font-body">
                                    <span className="text-white">Mel Amarelo</span>
                                    <span className="text-serra-gold font-bold">R$ 55,00</span>
                                </div>
                                <div className="flex justify-between items-center text-sm font-body">
                                    <span className="text-white">Cítrico das Alturas</span>
                                    <span className="text-serra-gold font-bold">R$ 50,00</span>
                                </div>
                                <div className="flex justify-between items-center text-sm font-body">
                                    <span className="text-white">Aveludado de Minas</span>
                                    <span className="text-serra-gold font-bold">R$ 50,00</span>
                                </div>
                                <div className="flex justify-between items-center text-sm font-body">
                                    <span className="text-white">Complexo das Nuvens</span>
                                    <span className="text-serra-gold font-bold">R$ 55,00</span>
                                </div>
                                </div>
                            </div>

                            <a
                                href="https://wa.me/5527999823382?text=Ol%C3%A1%21%20Gostaria%20de%20pedir%20o%20pacote%20de%20250g%20da%20Landing%20Page."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full mt-auto bg-serra-gold text-serra-black hover:bg-white hover:text-serra-black py-4 px-6 rounded-sm font-body font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(202,174,124,0.3)] hover:shadow-[0_0_30px_rgba(202,174,124,0.5)]"
                            >
                                <MessageCircle size={18} />
                                Pedir 250g no WhatsApp
                            </a>
                        </motion.div>

                        {/* Pacote 500g — Melhor Custo-Benefício */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ delay: 0.2 }}
                            className="bg-serra-black border border-white/10 p-10 flex flex-col items-center text-center rounded-sm hover:border-serra-gold/40 transition-colors h-full"
                        >
                            <div className="flex-1 w-full flex flex-col items-center">
                                <div className="flex items-baseline gap-2 mb-6">
                                    <span className="font-script text-5xl text-white">500g</span>
                                </div>
                                <p className="font-body text-sm text-gray-400 mb-8 w-full border-b border-white/10 pb-8">
                                    Para quem já não consegue mais viver sem. Aproximadamente 50 xícaras.
                                </p>

                                <div className="space-y-3 w-full mb-10">
                                <div className="flex justify-between items-center text-sm font-body">
                                    <span className="text-gray-300">Mel Amarelo</span>
                                    <span className="text-gray-500 italic">Esgotado</span>
                                </div>
                                <div className="flex justify-between items-center text-sm font-body">
                                    <span className="text-gray-300">Cítrico das Alturas</span>
                                    <span className="text-serra-gold">R$ 97,00</span>
                                </div>
                                <div className="flex justify-between items-center text-sm font-body">
                                    <span className="text-gray-300">Aveludado de Minas</span>
                                    <span className="text-serra-gold">R$ 97,00</span>
                                </div>
                                <div className="flex justify-between items-center text-sm font-body">
                                    <span className="text-gray-300">Complexo das Nuvens</span>
                                    <span className="text-gray-500 italic">Esgotado</span>
                                </div>
                                </div>
                            </div>

                            <a
                                href="https://wa.me/5527999823382?text=Ol%C3%A1%21%20Gostaria%20de%20pedir%20o%20pacote%20de%20500g%20da%20Landing%20Page."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full mt-auto bg-white text-serra-black hover:bg-gray-200 py-4 px-6 rounded-sm font-body font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-2 transition-colors"
                            >
                                <MessageCircle size={18} />
                                Pedir 500g no WhatsApp
                            </a>
                        </motion.div>
                    </div>

                    <p className="text-center font-body text-xs text-gray-500 mt-12 uppercase tracking-widest">
                        Resposta em até 30 minutos · Pagamento por Pix ou cartão
                    </p>
                </div>
            </div>
        </section>
    );
};

export default StakesSectionSB;
