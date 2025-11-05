import { Folders, Brain, PenTool } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const pillars = [
  {
    icon: Folders,
    title: "Centralize em 1 só lugar",
    color: "text-primary",
    bgColor: "bg-primary/10",
    badge: "Freemium disponível",
    badgeVariant: "secondary" as const,
    benefits: [
      "Importa PDFs, vídeos, questões de qualquer cursinho",
      "Organização automática por matéria/assunto",
      "Busca inteligente: encontre qualquer material em 2 segundos"
    ]
  },
  {
    icon: Brain,
    title: "Método científico comprovado",
    color: "text-accent-purple",
    bgColor: "bg-accent-purple/10",
    badge: "Premium",
    badgeVariant: "default" as const,
    benefits: [
      "Plano adaptado ao SEU edital e rotina",
      "Revisões espaçadas (técnica comprovada)",
      "Mapas mentais e resumos gerados por IA"
    ]
  },
  {
    icon: PenTool,
    title: "Correção de discursivas instantânea",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    badge: "🆕 NOVIDADE",
    badgeVariant: "secondary" as const,
    benefits: [
      "Feedback em 30 segundos (vs. semanas de professor)",
      "IA treinada com critérios de Cespe, FCC, FGV",
      "Aprenda com análise detalhada de cada erro"
    ]
  }
];

export const Solution = () => {
  return (
    <section className="py-20 bg-gradient-subtle" id="recursos">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
              Como o AppConcurso resolve isso?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              3 pilares de organização inteligente
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <div 
                key={index} 
                className="bg-card rounded-2xl border-2 border-border p-8 space-y-6 hover:shadow-futuristic-hover transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="space-y-4">
                  <div className={`w-16 h-16 ${pillar.bgColor} rounded-2xl flex items-center justify-center`}>
                    <pillar.icon className={`w-8 h-8 ${pillar.color}`} />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-heading font-semibold leading-tight">
                      {pillar.title}
                    </h3>
                    <Badge variant={pillar.badgeVariant} className="text-xs">
                      {pillar.badge}
                    </Badge>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {pillar.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="text-secondary font-bold flex-shrink-0">•</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4">
                  <div className="w-full h-40 bg-muted rounded-lg flex items-center justify-center text-muted-foreground text-sm border border-border">
                    [Screenshot Mockup]
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
