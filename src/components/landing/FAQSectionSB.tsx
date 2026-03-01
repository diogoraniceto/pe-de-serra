import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/products";

const FAQSectionSB = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (i: number) => {
        setOpenIndex(openIndex === i ? null : i);
    };

    return (
        <section className="py-24 bg-serra-black border-t border-white/5">
            <div className="max-w-3xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    className="text-center mb-16"
                >
                    <h3 className="text-serra-gold font-body text-xs md:text-sm uppercase tracking-[0.3em] mb-4">
                        Dúvidas Frequentes
                    </h3>
                    <h2 className="text-3xl md:text-4xl font-script text-white">
                        Tudo que você precisa saber
                    </h2>
                </motion.div>

                <div className="space-y-3">
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ delay: i * 0.05 }}
                            className="border border-white/10 rounded-sm overflow-hidden hover:border-serra-gold/30 transition-colors"
                        >
                            <button
                                onClick={() => toggle(i)}
                                className="w-full flex items-center justify-between p-5 text-left font-body text-sm md:text-base text-white hover:text-serra-gold transition-colors"
                            >
                                <span>{faq.question}</span>
                                <ChevronDown
                                    size={18}
                                    className={`shrink-0 ml-4 text-serra-gold transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""
                                        }`}
                                />
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="px-5 pb-5 font-body text-sm text-gray-400 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSectionSB;
