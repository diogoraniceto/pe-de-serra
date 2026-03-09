import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight, MapPin, Award, Truck } from "lucide-react";
import produtorImg from "@/assets/produtor.jpeg";

const GuideSectionSB = () => {
    const steps = [
        {
            icon: <CheckCircle2 className="w-8 h-8 text-serra-gold" />,
            title: "1. Escolha a Experiência",
            description: "Amarelo, Verde, Rosa ou Roxo. Cada cor representa notas sensoriais únicas dos grãos das nossas montanhas capixabas e mineiras."
        },
        {
            icon: <ChevronRight className="w-8 h-8 text-serra-gold" />,
            title: "2. Peça Fácil no WhatsApp",
            description: "Sem carrinhos complexos ou cadastros longos. Você fala direto com nossa equipe humanizada em menos de 2 minutos."
        },
        {
            icon: <Truck className="w-8 h-8 text-serra-gold" />,
            title: "3. Receba Fresco em Casa",
            description: "Enviamos o café recém-torrado para todo o Brasil. Abra o pacote e sinta o aroma inundar a sua casa no primeiro dia."
        }
    ];

    return (
        <section className="py-24 bg-serra-black text-white relative border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">

                {/* The Guide (Empathy & Authority - SB Passo 3) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl md:text-5xl font-script text-serra-gold leading-tight">
                            Da escolha do grão <br />ao ponto da torra
                        </h2>
                        <p className="text-gray-400 font-body text-lg leading-relaxed">
                            Fábio, barista e mestre de torra, seleciona pessoalmente cada lote junto a produtores familiares do Caparaó e Matas de Minas. Ele prova, aprova e torra sob demanda — para que você receba café fresco, com rastreabilidade da fazenda à sua mesa.
                        </p>
                        <ul className="space-y-4 pt-4">
                            <li className="flex items-center gap-4 text-gray-300 font-body">
                                <MapPin className="text-serra-gold shrink-0" size={24} />
                                <span>Direto de produtores familiares em altitudes acima de 1000m.</span>
                            </li>
                            <li className="flex items-center gap-4 text-gray-300 font-body">
                                <Award className="text-serra-gold shrink-0" size={24} />
                                <span>Grãos acima de 85 pontos SCA — cupping aprovado pelo Fábio.</span>
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] md:aspect-square rounded-sm overflow-hidden border border-white/10 relative">
                            <img
                                src={produtorImg}
                                alt="Produtor de café segurando grãos"
                                className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-serra-black/80 via-transparent to-transparent" />
                        </div>

                        {/* Trust badge */}
                        <div className="absolute -bottom-8 -left-8 bg-serra-gold text-serra-black p-6 rounded-sm max-w-[200px] shadow-2xl hidden md:block">
                            <p className="font-script text-2xl mb-1">100%</p>
                            <p className="font-body text-xs font-bold uppercase tracking-wider">Arábica Selecionado à Mão</p>
                        </div>
                    </motion.div>
                </div>

                {/* The Plan (SB Passo 4) */}
                <div className="text-center mb-16">
                    <h3 className="text-serra-gold font-body text-sm uppercase tracking-[0.2em] mb-4">Como Funciona</h3>
                    <h2 className="text-3xl md:text-4xl font-script text-white">3 Passos Para o Melhor Café da Sua Vida</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
                    {/* Connecting line for desktop */}
                    <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-serra-gold/30 to-transparent z-0" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="relative z-10 flex flex-col items-center text-center p-6 bg-serra-black/50 border border-white/5 backdrop-blur-sm rounded-lg hover:border-serra-gold/30 transition-colors"
                        >
                            <div className="w-24 h-24 rounded-full bg-serra-black border border-serra-gold/20 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(202,174,124,0.1)]">
                                {step.icon}
                            </div>
                            <h4 className="font-script text-2xl text-white mb-4">{step.title}</h4>
                            <p className="font-body text-gray-400 leading-relaxed text-sm">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default GuideSectionSB;
