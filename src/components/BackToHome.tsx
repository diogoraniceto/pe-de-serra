import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface BackToHomeProps {
  className?: string;
  variant?: "light" | "dark";
}

const BackToHome = ({ className = "", variant = "light" }: BackToHomeProps) => {
  const baseStyles = "inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.2em] transition-all duration-300 group hover:gap-3";
  const variants = {
    light: "text-primary-foreground/60 hover:text-serra-gold",
    dark: "text-muted-foreground hover:text-serra-gold",
  };

  return (
    <Link 
      to="/" 
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <ArrowLeft size={16} className="transition-transform" />
      <span>Voltar ao Início</span>
    </Link>
  );
};

export default BackToHome;
