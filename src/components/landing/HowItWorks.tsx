import { Card } from "@/components/ui/card";
import { User, Zap, Target } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: User,
    title: "Construa Seu Perfil de Herói",
    description: "Cadastre seus concursos-alvo, organize seus materiais de todos os cursinhos e defina suas metas. Simples e rápido."
  },
  {
    number: "02",
    icon: Zap,
    title: "Ative Sua Super Inteligência AC",
    description: "Nossa IA analisa seu perfil, identifica lacunas de conhecimento e cria um plano de estudos personalizado e otimizado."
  },
  {
    number: "03",
    icon: Target,
    title: "Execute a Missão e Monitore o Progresso",
    description: "Siga seu ciclo de estudos, use flashcards dinâmicos, resumos inteligentes e acompanhe sua evolução em tempo real."
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Como Funciona</span>
            <h2 className="text-3xl md:text-5xl font-bold">
              Alcance a Aprovação em <span className="text-accent">3 Passos Simples</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting Lines */}
            <div className="hidden md:block absolute top-24 left-1/6 right-1/6 h-0.5 bg-gradient-hero -z-10" 
                 style={{ width: '66%', left: '16.6%' }} />
            
            {steps.map((step, index) => (
              <Card 
                key={index} 
                className="relative p-8 space-y-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-card"
              >
                <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg shadow-glow">
                  {step.number}
                </div>
                
                <div className="pt-4">
                  <div className="w-16 h-16 bg-gradient-card rounded-xl flex items-center justify-center mb-6">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
