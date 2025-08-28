import { Heart, Instagram, Facebook, MessageCircle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Bella Estética</span>
            </div>
            <p className="text-white/80 leading-relaxed mb-6">
              Há mais de 10 anos dedicados ao cuidado e bem-estar, oferecendo 
              tratamentos estéticos de excelência em um ambiente acolhedor e sofisticado.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-white/80 hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-white/80 hover:text-white transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-white/80 hover:text-white transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#contato" className="text-white/80 hover:text-white transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-white/80">Limpeza de Pele</span>
              </li>
              <li>
                <span className="text-white/80">Massagem Relaxante</span>
              </li>
              <li>
                <span className="text-white/80">Tratamento Anti-idade</span>
              </li>
              <li>
                <span className="text-white/80">Hidratação Facial</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60">
            © 2024 Bella Estética. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};