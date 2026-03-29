import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HarioStripSection = () => {
  return (
    <div className="relative bg-[#F5EFE6] border-t border-b border-[#C8A97E]/20 overflow-hidden">

      {/* Subtle warm texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/paper-fibers.png')" }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-12 md:py-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="font-body text-[10px] uppercase tracking-[0.35em] text-[#8B6C42] mb-3">
            Acessórios
          </p>
          <h2 className="font-blackletter text-3xl md:text-4xl text-[#2C1A0E] mb-3">
            O café que você aprecia merece os acessórios certos
          </h2>
          <p className="font-body text-sm text-[#7A5C3A] max-w-lg mx-auto leading-relaxed">
            Curados pelo Fábio Campos para extrair o melhor de cada grão Pé de Serra.
          </p>
        </motion.div>

        {/* Products row */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">

          {/* Kit Hario */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center text-center gap-2"
          >
            <p className="font-body text-xs uppercase tracking-[0.25em] text-[#8B6C42]">Kit V60 Hario</p>
            <p className="font-blackletter text-2xl text-[#2C1A0E]">R$ 195,00</p>
            <p className="font-body text-xs text-[#9A7A56]">Dripper · Servidor · 100 Filtros · Suporte</p>
          </motion.div>

          {/* Divider */}
          <div className="hidden md:block w-px h-16 bg-[#C8A97E]/40" />
          <div className="md:hidden w-24 h-px bg-[#C8A97E]/40" />

          {/* Chaleira */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center text-center gap-2"
          >
            <p className="font-body text-xs uppercase tracking-[0.25em] text-[#8B6C42]">Chaleira Gooseneck</p>
            <p className="font-blackletter text-2xl text-[#2C1A0E]">R$ 165,00</p>
            <p className="font-body text-xs text-[#9A7A56]">Inox · Termômetro embutido · Bico preciso</p>
          </motion.div>

          {/* Divider */}
          <div className="hidden md:block w-px h-16 bg-[#C8A97E]/40" />
          <div className="md:hidden w-24 h-px bg-[#C8A97E]/40" />

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              to="/ritual#hario"
              className="inline-flex items-center gap-2 font-body text-[11px] uppercase tracking-widest text-[#7A5232] hover:text-[#2C1A0E] border border-[#C8A97E]/60 hover:border-[#2C1A0E] px-6 py-3 transition-all duration-200 bg-white/50 hover:bg-white"
            >
              Ver os Acessórios
              <ArrowRight size={12} />
            </Link>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default HarioStripSection;
