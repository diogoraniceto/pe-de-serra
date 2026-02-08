import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import producerBw from "@/assets/producer-bw.jpg";
import roasting from "@/assets/roasting.jpg";
import heroFarm from "@/assets/hero-farm.jpg";

const values = [
  { title: "Qualidade", description: "Apenas grãos com pontuação acima de 80 pontos SCA." },
  { title: "Origem", description: "Direto dos produtores familiares do Caparaó e Matas de Minas." },
  { title: "Família", description: "Fortalecemos comunidades rurais valorizando o trabalho artesanal." },
  { title: "Frescor", description: "Torra sob demanda — seu café é torrado após o pedido." },
];

const SobrePage = () => {
  return (
    <div className="font-body">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroFarm})` }}
        >
          <div className="absolute inset-0 bg-serra-black/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <p className="font-body text-serra-gold text-sm uppercase tracking-[0.3em] mb-4">
            Nossa História
          </p>
          <h1 className="font-blackletter text-5xl md:text-7xl text-primary-foreground mb-6">
            sobre nós
          </h1>
          <p className="font-body text-primary-foreground/70 max-w-xl mx-auto">
            Conheça a história por trás de cada xícara de café Pé de Serra.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-background py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-body text-serra-gold text-sm uppercase tracking-[0.3em] mb-4">
              O Início
            </p>
            <h2 className="font-script text-5xl text-foreground mb-8">
              Fábio, o Barista
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              A Pé de Serra nasceu da paixão de Fábio pelo café. Barista certificado e especialista
              em torra, ele começou selecionando grãos diretamente de produtores familiares nas
              montanhas de Minas Gerais.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              O nome "Pé de Serra" é uma homenagem às terras altas onde os melhores cafés crescem —
              ao pé das serras do Caparaó e das Matas de Minas, onde altitude, clima e solo se unem
              para criar grãos excepcionais.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              Cada lote é pessoalmente selecionado, torrado e provado por Fábio através do processo
              de cupping, garantindo que apenas cafés com pontuação acima de 80 pontos cheguem até você.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src={roasting}
              alt="Processo de torra artesanal"
              className="w-full h-[500px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Producer */}
      <section className="bg-serra-green py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src={producerBw}
              alt="Produtor familiar"
              className="w-full h-[500px] object-cover grayscale contrast-125"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-body text-serra-gold text-sm uppercase tracking-[0.3em] mb-4">
              Parceria
            </p>
            <h2 className="font-blackletter text-5xl text-primary-foreground mb-8">
              produtores familiares
            </h2>
            <p className="font-body text-primary-foreground/80 leading-relaxed mb-6">
              Acreditamos no comércio direto e justo. Cada produtor parceiro recebe valor justo pelo
              seu trabalho, e juntos construímos uma cadeia de café mais sustentável e transparente.
            </p>
            <p className="font-body text-primary-foreground/80 leading-relaxed">
              Visitamos pessoalmente cada fazenda, conhecemos as famílias e acompanhamos todo o
              processo — da colheita ao beneficiamento. É assim que garantimos a qualidade e a
              rastreabilidade de cada grão.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-background py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="font-body text-serra-gold text-sm uppercase tracking-[0.3em] mb-4">
              Princípios
            </p>
            <h2 className="font-blackletter text-5xl text-foreground">nossos valores</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 border border-border hover:border-serra-gold transition-colors"
              >
                <h3 className="font-blackletter text-2xl text-foreground mb-3">{v.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {v.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-serra-cream py-16 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-script text-4xl text-foreground mb-6">
            Quer conhecer nossos cafés?
          </h2>
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-body text-sm uppercase tracking-widest bg-serra-green text-primary-foreground px-10 py-4 hover:bg-serra-gold hover:text-serra-black transition-all duration-300"
          >
            Fale Conosco no WhatsApp
          </a>
        </motion.div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default SobrePage;
