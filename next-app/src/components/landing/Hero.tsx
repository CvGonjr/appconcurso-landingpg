import Image from "next/image";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-subtle">
      <div className="absolute inset-0 bg-gradient-hero opacity-5" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gradient-card px-4 py-2 rounded-full border border-primary/20 mb-4">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">Junte-se aos mais de 20.000 Concurseiros de Sucesso</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Conquiste seu Cargo Público:
            </span>
            <br />
            <span className="text-foreground">
              Otimize cada hora de estudo com o seu Mentor de IA
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Chega de materiais fragmentados. Nosso hub inteligente centraliza todos os seus cursinhos e editais, 
            enquanto a <span className="font-semibold text-foreground">Super Inteligência AC</span> cria um plano de estudos personalizado, 
            encontrando suas fraquezas e focando no que realmente cai na prova.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="xl" variant="hero" className="group">
              Crie Sua Conta Gratuita Agora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="xl" variant="outline">
              Ver Como Funciona
            </Button>
          </div>
          
          <div className="pt-12 animate-fade-in-up">
            <div className="relative max-w-5xl mx-auto">
              <div className="absolute -inset-4 bg-gradient-hero opacity-20 blur-3xl rounded-3xl" />
              <Image
                src="/images/dashboard-hero.png"
                alt="Dashboard do QG do Super AC"
                width={1280}
                height={720}
                className="relative w-full rounded-2xl shadow-elegant border border-border"
                priority={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
