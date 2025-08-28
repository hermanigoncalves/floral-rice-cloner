import { Button } from "@/components/ui/button";
import { Sparkles, Calendar } from "lucide-react";
import heroImage from "@/assets/spa-hero-bg.jpg";

export const Hero = () => {
  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.3)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Floating elements */}
      <div className="absolute inset-0">
        <Sparkles className="absolute top-1/4 left-1/4 w-6 h-6 text-accent/30 animate-float" />
        <Sparkles className="absolute top-3/4 right-1/4 w-4 h-4 text-primary/40 animate-float" style={{ animationDelay: '2s' }} />
        <Sparkles className="absolute top-1/2 right-1/3 w-5 h-5 text-accent/20 animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Desperte sua
            <span className="block bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Beleza Natural
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transforme sua rotina de cuidados em momentos de bem-estar e autoestima. 
            Tratamentos personalizados em um ambiente acolhedor e sofisticado.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-6 group"
            >
              <Calendar className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Agendar Avaliação Gratuita
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/50 text-white hover:bg-white/10 backdrop-blur-sm text-lg px-8 py-6"
            >
              Conhecer Tratamentos
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};