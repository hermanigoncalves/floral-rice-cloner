import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Clock, Star } from "lucide-react";

export const Services = () => {
  const services = [
    {
      title: "Limpeza de Pele",
      description: "Tratamento profundo para renovação e purificação da pele do rosto",
      price: "R$ 120",
      duration: "60 min",
      rating: 4.9,
      popular: false
    },
    {
      title: "Massagem Relaxante", 
      description: "Massagem terapêutica para alívio do estresse e tensões musculares",
      price: "R$ 180",
      duration: "90 min", 
      rating: 4.8,
      popular: true
    },
    {
      title: "Tratamento Anti-idade",
      description: "Procedimentos avançados para rejuvenescimento facial",
      price: "R$ 250",
      duration: "75 min",
      rating: 5.0,
      popular: false
    },
    {
      title: "Hidratação Facial",
      description: "Hidratação profunda com produtos premium para todos os tipos de pele",
      price: "R$ 150", 
      duration: "45 min",
      rating: 4.7,
      popular: false
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubra nossa gama completa de tratamentos estéticos personalizados
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className={`glass-card hover:shadow-elegant transition-all duration-300 group relative ${
                service.popular ? 'ring-2 ring-primary/50' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {service.popular && (
                <Badge 
                  className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-primary text-white px-4 py-1"
                >
                  Mais Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-foreground mb-2">
                  {service.title}
                </CardTitle>
                <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>{service.duration}</span>
                  <div className="flex items-center ml-2">
                    <Star className="w-4 h-4 fill-accent text-accent" />
                    <span className="ml-1">{service.rating}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-6">
                  <span className="text-3xl font-bold text-primary">
                    {service.price}
                  </span>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-white transition-all duration-300"
                >
                  Agendar Serviço
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};