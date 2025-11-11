import { AlertCircle, BookOpen, Brain, Clock, Frown, Layers } from "lucide-react";
import { Card } from "@/components/ui/card";

const pains = [
  {
    icon: Layers,
    title: "Fragmentação de Materiais",
    description: "Cursinho A, B, C... Você perde horas só para encontrar aquela aula que precisa revisar."
  },
  {
    icon: BookOpen,
    title: "Excesso de Matéria",
    description: "Milhares de horas de vídeo e PDFs intermináveis. Por onde começar? O que é prioridade?"
  },
  {
    icon: Brain,
    title: "Dificuldade em Fixar Conteúdo",
    description: "Estudar muito não é o mesmo que aprender. A retenção real exige estratégia."
  },
  {
    icon: Frown,
    title: "Procrastinação e Ansiedade",
    description: "A sobrecarga gera paralisia. Você sabe o que precisa fazer, mas não consegue começar."
  },
  {
    icon: Clock,
    title: "Gestão de Tempo Ineficaz",
    description: "Dias passam, mas você não sente progresso real. Onde foi parar todo aquele tempo?"
  }
];

export const PainPoints = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <div className="inline-flex items-center gap-2 text-destructive">
              <AlertCircle className="w-6 h-6" />
              <span className="text-sm font-semibold uppercase tracking-wider">O Problema</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold">
              O Caos dos Cursinhos Transformou Sua Missão 
              <br />
              em uma <span className="text-destructive">Batalha Impossível?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Entendemos você. No campo de batalha dos concursos, os verdadeiros "vilões" 
              são a fragmentação de materiais e a sobrecarga de informação.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pains.map((pain, index) => (
              <Card 
                key={index} 
                className="p-6 space-y-4 hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center">
                  <pain.icon className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-xl font-semibold">{pain.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{pain.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
