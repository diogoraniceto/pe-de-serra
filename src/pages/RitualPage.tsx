import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, Droplets, Flame, Timer, Coffee, Scale, CircleDot } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const steps = [
    {
        number: "01",
        title: "O Bloom",
        icon: <Droplets className="w-6 h-6" />,
        description:
            "Despeje um pouco de água quente sobre o pó para despertar os aromas e liberar o CO₂ retido na torra fresca. Aguarde 30 segundos e observe o café \"respirar\" — é o sinal de frescor.",
        detail: "30 segundos",
    },
    {
        number: "02",
        title: "Despejos Cíclicos",
        icon: <CircleDot className="w-6 h-6" />,
        description:
            "Em vez de despejar toda a água de uma vez, faça de 3 a 4 despejos graduais e circulares. Isso garante o equilíbrio perfeito entre acidez, doçura e corpo na sua xícara.",
        detail: "3 a 4 ciclos",
    },
    {
        number: "03",
        title: "A Paciência",
        icon: <Timer className="w-6 h-6" />,
        description:
            "Deixe a gravidade trabalhar. A água percola lentamente pelo café, revelando as notas sensoriais únicas de cada origem — caramelo do Caparaó, chocolate de Matas de Minas.",
        detail: "2 a 3 minutos",
    },
];

const tips = [
    {
        icon: <Flame className="w-5 h-5 text-serra-gold" />,
        label: "Temperatura da Água",
        value: "92°C – 96°C",
        note: "Nunca use água fervendo",
    },
    {
        icon: <Scale className="w-5 h-5 text-serra-gold" />,
        label: "Proporção",
        value: "1 : 15",
        note: "10g de café para 150ml de água",
    },
    {
        icon: <Coffee className="w-5 h-5 text-serra-gold" />,
        label: "Moagem",
        value: "Média",
        note: "Textura de areia de praia",
    },
];

const RitualPage = () => {
    return (
        <div className="font-body">
            <Navbar />

            {/* Hero */}
            <section className="relative pt-40 pb-24 px-6 overflow-hidden bg-serra-black">
                <div className="absolute inset-0 bg-gradient-to-b from-serra-black via-serra-green/20 to-serra-black" />
                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="font-body text-serra-gold text-xs uppercase tracking-[0.3em] mb-6"
                    >
                        O Ritual
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="font-blackletter text-4xl md:text-6xl lg:text-7xl text-primary-foreground mb-8 leading-tight"
                    >
                        A Arte do Preparo Ideal
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="font-body text-primary-foreground/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed italic"
                    >
                        A perfeição do grão encontra o seu momento de extração.
                    </motion.p>
                </div>
            </section>

            {/* O Segredo do Tempo */}
            <section className="bg-background py-28 px-6">
                <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="font-body text-serra-gold text-sm uppercase tracking-[0.3em] mb-4">
                            O Segredo do Tempo
                        </p>
                        <h2 className="font-blackletter text-4xl md:text-5xl text-foreground mb-8">
                            Entre o 5º e o 7º dia
                        </h2>
                        <p className="font-body text-muted-foreground leading-relaxed mb-6 text-lg">
                            O auge sensorial do seu café Pé de Serra acontece entre o <strong className="text-foreground">5º e o 7º dia</strong> após a torra artesanal. É nessa janela que os açúcares caramelizados e os óleos aromáticos atingem o equilíbrio perfeito.
                        </p>
                        <p className="font-body text-muted-foreground leading-relaxed text-lg">
                            É por isso que torramos sob demanda: para que cada pacote chegue na sua casa exatamente nesse ponto de perfeição. Abra, sinta o aroma e prepare — você está no momento ideal.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8 }}
                        className="relative flex items-center justify-center"
                    >
                        {/* Visual element - Timeline */}
                        <div className="w-full max-w-sm mx-auto">
                            <div className="relative border-l-2 border-serra-gold/30 pl-8 space-y-10">
                                {[
                                    { day: "Dia 1-2", label: "Desgaseificação", desc: "O CO₂ está intenso. O café ainda está se estabilizando." },
                                    { day: "Dia 3-4", label: "Maturação", desc: "Os sabores começam a se abrir. Aromas mais definidos." },
                                    { day: "Dia 5-7", label: "Auge Sensorial", desc: "Equilíbrio perfeito entre acidez, doçura e corpo.", highlight: true },
                                    { day: "Dia 8+", label: "Declínio gradual", desc: "Ainda bom, mas já perdendo nuances sutis." },
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false }}
                                        transition={{ delay: i * 0.15 }}
                                        className="relative"
                                    >
                                        <div className={`absolute -left-[41px] w-4 h-4 rounded-full border-2 ${item.highlight ? "bg-serra-gold border-serra-gold scale-125" : "bg-background border-serra-gold/40"}`} />
                                        <p className={`font-body text-xs uppercase tracking-widest mb-1 ${item.highlight ? "text-serra-gold font-bold" : "text-muted-foreground"}`}>
                                            {item.day}
                                        </p>
                                        <p className={`font-body text-sm font-medium mb-1 ${item.highlight ? "text-foreground" : "text-muted-foreground"}`}>
                                            {item.label}
                                        </p>
                                        <p className="font-body text-xs text-muted-foreground/70">{item.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Guia Passo a Passo */}
            <section className="bg-serra-green py-28 px-6">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        className="text-center mb-20"
                    >
                        <p className="font-body text-serra-gold text-sm uppercase tracking-[0.3em] mb-4">
                            O Método
                        </p>
                        <h2 className="font-blackletter text-4xl md:text-6xl text-primary-foreground mb-4">
                            Guia de Extração
                        </h2>
                        <p className="font-body text-primary-foreground/60 text-base max-w-xl mx-auto">
                            Três passos simples que separam um café bom de um café inesquecível.
                        </p>
                    </motion.div>

                    <div className="space-y-16">
                        {steps.map((step, i) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.8, delay: i * 0.1 }}
                                className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-8 items-start"
                            >
                                {/* Number and icon */}
                                <div className="flex flex-col items-center md:items-start">
                                    <span className="font-script text-6xl text-serra-gold/30 leading-none">
                                        {step.number}
                                    </span>
                                    <div className="mt-4 w-12 h-12 rounded-full border border-serra-gold/30 flex items-center justify-center text-serra-gold">
                                        {step.icon}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="bg-serra-black/20 border border-primary-foreground/10 backdrop-blur-sm p-8 md:p-10 rounded-sm">
                                    <h3 className="font-blackletter text-3xl text-primary-foreground mb-4">
                                        {step.title}
                                    </h3>
                                    <p className="font-body text-primary-foreground/80 leading-relaxed text-base mb-4">
                                        {step.description}
                                    </p>
                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-serra-gold/30 rounded-full">
                                        <Clock size={14} className="text-serra-gold" />
                                        <span className="font-body text-xs text-serra-gold uppercase tracking-wider">
                                            {step.detail}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Dicas de Mestre */}
            <section className="bg-background py-28 px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        className="text-center mb-16"
                    >
                        <p className="font-body text-serra-gold text-sm uppercase tracking-[0.3em] mb-4">
                            Dicas de Mestre
                        </p>
                        <h2 className="font-blackletter text-4xl md:text-5xl text-foreground">
                            Os parâmetros do Fábio
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {tips.map((tip, i) => (
                            <motion.div
                                key={tip.label}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center p-8 border border-border hover:border-serra-gold transition-colors group"
                            >
                                <div className="w-14 h-14 mx-auto mb-6 rounded-full border border-serra-gold/20 flex items-center justify-center group-hover:border-serra-gold transition-colors">
                                    {tip.icon}
                                </div>
                                <p className="font-body text-xs text-muted-foreground uppercase tracking-widest mb-2">
                                    {tip.label}
                                </p>
                                <p className="font-blackletter text-3xl text-foreground mb-2">
                                    {tip.value}
                                </p>
                                <p className="font-body text-sm text-muted-foreground">
                                    {tip.note}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="bg-serra-cream py-20 px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                >
                    <p className="font-body text-serra-gold text-sm uppercase tracking-[0.3em] mb-4">
                        Próximo Passo
                    </p>
                    <h2 className="font-script text-3xl md:text-4xl text-foreground mb-4">
                        Agora que você conhece o ritual,
                    </h2>
                    <p className="font-body text-muted-foreground text-lg mb-8">
                        escolha o seu próximo lote e viva a experiência completa.
                    </p>
                    <Link
                        to="/cafes"
                        className="inline-block font-body text-sm uppercase tracking-widest bg-serra-green text-primary-foreground px-10 py-4 hover:bg-serra-gold hover:text-serra-black transition-all duration-300"
                    >
                        Ver nossos cafés →
                    </Link>
                </motion.div>
            </section>

            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default RitualPage;
