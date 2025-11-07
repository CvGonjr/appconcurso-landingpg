import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FolderOpen, Brain, PenTool } from "lucide-react";
import dashboardHero from "@/assets/dashboard-hero.png";

const pillars = [
  {
    icon: FolderOpen,
    iconColor: "text-primary",
    bgColor: "bg-primary/10",
    title: "Centralize em 1 só lugar",
    badge: "Freemium disponível",
    badgeColor: "bg-primary/10 text-primary",
    benefits: [
      "Importa PDFs, vídeos, questões de qualquer cursinho",
      "Organização automática por matéria/assunto",
      "Busca inteligente: encontre qualquer material em 2 segundos"
    ]
  },
  {
    icon: Brain,
    iconColor: "text-accent-purple",
    bgColor: "bg-accent-purple/10",
    title: "Método científico comprovado",
    badge: "Premium",
    badgeColor: "bg-accent-purple/10 text-accent-purple",
    benefits: [
      "Plano adaptado ao SEU edital e rotina",
      "Revisões espaçadas (técnica comprovada)",
      "Mapas mentais e resumos gerados por IA"
    ]
  },
  {
    icon: PenTool,
    iconColor: "text-secondary",
    bgColor: "bg-secondary/10",
    title: "Correção de discursivas instantânea",
    badge: "🆕 NOVIDADE - Em desenvolvimento",
    badgeColor: "bg-secondary/10 text-secondary",
    benefits: [
      "Feedback em 30 segundos (vs. semanas de professor)",
      "IA treinada com critérios de Cespe, FCC, FGV",
      "Aprenda com análise detalhada de cada erro"
    ]
  }
];

export const NewSolution = () => {
  return (
    <section id="recursos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold">
              Como o AppConcurso resolve isso?
            </h2>
            <p className="text-xl text-muted-foreground">
              3 pilares de organização inteligente
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <Card 
                key={index}
                className="p-8 space-y-6 hover:shadow-futuristic-hover transition-all duration-300 hover:-translate-y-1 bg-card border-border animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 ${pillar.bgColor} rounded-xl flex items-center justify-center`}>
                  <pillar.icon className={`w-10 h-10 ${pillar.iconColor}`} />
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-heading text-xl font-semibold">{pillar.title}</h3>
                  <Badge className={`${pillar.badgeColor} font-medium`}>
                    {pillar.badge}
                  </Badge>
                </div>
                
                <ul className="space-y-3">
                  {pillar.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-secondary mt-0.5">•</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4">
                  <img 
                    src={dashboardHero}
                    alt="Screenshot interface"
                    className="w-full rounded-lg border border-border shadow-futuristic"
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
