import { Award, Heart, Leaf } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import interiorImage from "@/assets/spa-interior.jpg";

export const About = () => {
  const features = [
    {
      icon: Award,
      title: "Excelência em Tratamentos",
      description: "Utilizamos as mais modernas técnicas e equipamentos para garantir resultados excepcionais."
    },
    {
      icon: Heart,
      title: "Cuidado Personalizado", 
      description: "Cada tratamento é desenvolvido especialmente para suas necessidades e objetivos únicos."
    },
    {
      icon: Leaf,
      title: "Produtos Naturais",
      description: "Priorizamos ingredientes naturais e orgânicos para cuidar da sua pele com delicadeza."
    }
  ];

  return (
    <section id="sobre" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Sobre Nossa Clínica
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Há mais de 10 anos dedicados ao cuidado e bem-estar, nossa clínica oferece 
            tratamentos estéticos de excelência em um ambiente acolhedor e sofisticado.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="animate-slide-up">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={interiorImage} 
                alt="Interior da clínica" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-6 animate-slide-up">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="glass-card hover:shadow-elegant transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};