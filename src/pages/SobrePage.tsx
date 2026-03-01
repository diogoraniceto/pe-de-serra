import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import roasting from "@/assets/roasting-new.jpg";
import heroFarm from "@/assets/hero-farm.jpg";

const values = [
  { title: "Qualidade", description: "Apenas grãos com pontuação acima de 85 pontos SCA." },
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
            Sobre nós
          </h1>
          <p className="font-body text-primary-foreground/70 max-w-xl mx-auto">
            Nascemos do respeito à terra e da busca pelo café perfeito. Conheça a jornada que traz a alma das montanhas até você.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-background py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
          >
            <p className="font-body text-serra-gold text-sm uppercase tracking-[0.3em] mb-4">
              O Início
            </p>
            <h2 className="font-script text-5xl text-foreground mb-8">
              Fábio, Barista & Mestre de Torra
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              A Pé de Serra nasceu da paixão do Fábio pelo café. Como Barista certificado e Mestre de Torra, ele iniciou sua jornada percorrendo as montanhas de Minas Gerais e do Espírito Santo para selecionar grãos diretamente de pequenos produtores familiares.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              O nome "Pé de Serra" é uma homenagem às terras altas onde os melhores cafés crescem. É no encontro do microclima do Caparaó e das Matas de Minas que a altitude e o cuidado manual se unem para criar grãos de qualidade excepcional.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              Cada lote é pessoalmente selecionado e provado pelo Fábio através de rigorosas sessões de cupping. Esse compromisso técnico garante que apenas cafés com pontuação acima de 85 pontos SCA — o padrão de excelência internacional — cheguem até o seu ritual diário.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
          >
            <img
              src={roasting}
              alt="Processo de torra artesanal"
              className="w-full h-[500px] object-cover"
            />
          </motion.div>
        </div>
      </section>


      {/* Values */}
      <section className="bg-background py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-center mb-16"
          >
            <p className="font-body text-serra-gold text-sm uppercase tracking-[0.3em] mb-4">
              Princípios
            </p>
            <h2 className="font-blackletter text-5xl text-foreground">Nossos valores</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
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
          viewport={{ once: false }}
        >
          <h2 className="font-script text-4xl text-foreground mb-6">
            Pronto para experimentar?
          </h2>
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-body text-sm uppercase tracking-widest bg-serra-green text-primary-foreground px-10 py-4 hover:bg-serra-gold hover:text-serra-black transition-all duration-300"
          >
            fale conosco no Whatsapp
          </a>
        </motion.div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default SobrePage;
