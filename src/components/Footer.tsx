import { Link } from "react-router-dom";
import { Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contato" className="bg-serra-green text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-script text-3xl mb-4 text-serra-gold">Pé de Serra</h3>
            <p className="font-body text-primary-foreground/70 text-sm leading-relaxed">
              Cafés especiais das montanhas de Minas Gerais. Do produtor familiar à sua xícara.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-body text-sm uppercase tracking-widest mb-4 text-serra-gold">Navegação</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-primary-foreground/70 hover:text-serra-gold transition-colors text-sm font-body">Início</Link>
              <Link to="/cafes" className="text-primary-foreground/70 hover:text-serra-gold transition-colors text-sm font-body">Nossos Cafés</Link>
              <Link to="/sobre" className="text-primary-foreground/70 hover:text-serra-gold transition-colors text-sm font-body">Sobre Nós</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-sm uppercase tracking-widest mb-4 text-serra-gold">Contato</h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-foreground/70 hover:text-serra-gold transition-colors text-sm font-body"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
              <a
                href="https://instagram.com/pedeserra"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-foreground/70 hover:text-serra-gold transition-colors text-sm font-body"
              >
                <Instagram size={16} />
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/40 text-xs font-body">
            © {new Date().getFullYear()} Pé de Serra Cafés Especiais. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
