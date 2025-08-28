import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

export const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Maria Silva",
      service: "Limpeza de Pele",
      text: "Excelente atendimento! Minha pele ficou renovada e radiante.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Ana Costa", 
      service: "Massagem Relaxante",
      text: "Ambiente acolhedor e profissionais muito qualificados. Recomendo!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Carla Santos",
      service: "Tratamento Anti-idade", 
      text: "Resultados incríveis! Me sinto mais jovem e confiante.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section id="depoimentos" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            O que Nossas Clientes Dizem
          </h2>
          <p className="text-xl text-muted-foreground">
            Histórias reais de transformação e bem-estar
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="glass-card shadow-elegant border-none relative overflow-hidden">
            <div className="absolute top-4 left-4">
              <Quote className="w-12 h-12 text-primary/20" />
            </div>
            
            <CardContent className="p-8 md:p-12 text-center">
              <div className="mb-6">
                <img 
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover shadow-soft"
                />
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
              </div>
              
              <blockquote className="text-xl md:text-2xl text-foreground mb-6 font-medium leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              
              <div>
                <p className="font-semibold text-foreground text-lg">
                  {testimonials[currentTestimonial].name}
                </p>
                <p className="text-muted-foreground">
                  {testimonials[currentTestimonial].service}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* All Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className={`glass-card hover:shadow-elegant transition-all duration-300 cursor-pointer ${
                currentTestimonial === index ? 'ring-2 ring-primary/50' : ''
              }`}
              onClick={() => setCurrentTestimonial(index)}
            >
              <CardContent className="p-6 text-center">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                />
                
                <div className="flex justify-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                
                <h4 className="font-semibold text-foreground mb-1">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-muted-foreground mb-3">
                  {testimonial.service}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  "{testimonial.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentTestimonial === index ? 'bg-primary' : 'bg-muted'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};