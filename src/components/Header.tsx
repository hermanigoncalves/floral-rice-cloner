import { Heart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-primary">Bella Estética</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-foreground hover:text-primary transition-colors">
              Início
            </a>
            <a href="#sobre" className="text-foreground hover:text-primary transition-colors">
              Sobre
            </a>
            <a href="#servicos" className="text-foreground hover:text-primary transition-colors">
              Serviços
            </a>
            <a href="#depoimentos" className="text-foreground hover:text-primary transition-colors">
              Depoimentos
            </a>
            <a href="#contato" className="text-foreground hover:text-primary transition-colors">
              Contato
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              variant="default" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
            >
              Agendar Consulta
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-border/20 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a 
                href="#inicio" 
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={toggleMenu}
              >
                Início
              </a>
              <a 
                href="#sobre" 
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={toggleMenu}
              >
                Sobre
              </a>
              <a 
                href="#servicos" 
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={toggleMenu}
              >
                Serviços
              </a>
              <a 
                href="#depoimentos" 
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={toggleMenu}
              >
                Depoimentos
              </a>
              <a 
                href="#contato" 
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={toggleMenu}
              >
                Contato
              </a>
              <Button 
                variant="default" 
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 w-full mt-4"
                onClick={toggleMenu}
              >
                Agendar Consulta
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};