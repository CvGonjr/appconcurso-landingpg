import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FolderOpen, Brain, PenTool, Check } from "lucide-react";

const pillars = [
  {
    icon: FolderOpen,
    iconColor: "text-blue-600",
    bgColor: "bg-blue-50",
    title: "Centralize em 1 só lugar",
    badge: "Freemium disponível",
    badgeVariant: "default" as const,
    features: [
      "Importa PDFs, vídeos, questões de qualquer cursinho",
      "Organização automática por matéria/assunto",
      "Busca inteligente: encontre qualquer material em 2 segundos",
    ],
    mockupBg: "bg-gradient-to-br from-blue-50 to-blue-100",
  },
  {
    icon: Brain,
    iconColor: "text-purple-600",
    bgColor: "bg-purple-50",
    title: "Método científico comprovado",
    badge: "Premium",
    badgeVariant: "secondary" as const,
    features: [
      "Plano adaptado ao SEU edital e rotina",
      "Revisões espaçadas (técnica comprovada)",
      "Mapas mentais e resumos gerados por IA",
    ],
    mockupBg: "bg-gradient-to-br from-purple-50 to-purple-100",
  },
  {
    icon: PenTool,
    iconColor: "text-green-600",
    bgColor: "bg-green-50",
    title: "Correção de discursivas instantânea",
    badge: "🆕 NOVIDADE - Em desenvolvimento",
    badgeVariant: "destructive" as const,
    features: [
      "Feedback em 30 segundos (vs. semanas de professor)",
      "IA treinada com critérios de Cespe, FCC, FGV",
      "Aprenda com análise detalhada de cada erro",
    ],
    mockupBg: "bg-gradient-to-br from-green-50 to-green-100",
  },
];

export const SolutionV2 = () => {
  return (
    <section id="recursos" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Título */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold">
              Como o AppConcurso resolve isso?
            </h2>
            <p className="text-xl text-muted-foreground">
              <span className="font-semibold text-foreground">3 pilares</span> de organização inteligente
            </p>
          </div>

          {/* Pilares */}
          <div className="grid lg:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <Card
                  key={index}
                  className="p-0 overflow-hidden border-2 hover:-translate-y-2 transition-all duration-300 shadow-futuristic hover:shadow-futuristic-hover"
                >
                  {/* Ícone e Badge */}
                  <div className={`${pillar.bgColor} p-8 space-y-4`}>
                    <div className="flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center">
                        <Icon className={`w-12 h-12 ${pillar.iconColor}`} />
                      </div>
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-center">
                      {pillar.title}
                    </h3>
                    <div className="flex justify-center">
                      <Badge variant={pillar.badgeVariant} className="text-xs px-3 py-1">
                        {pillar.badge}
                      </Badge>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="p-8 space-y-4">
                    <ul className="space-y-3">
                      {pillar.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Mockup */}
                    <div className={`${pillar.mockupBg} rounded-lg p-6 mt-6`}>
                      <div className="space-y-2">
                        <div className="h-3 bg-white/60 rounded w-3/4" />
                        <div className="h-3 bg-white/40 rounded w-1/2" />
                        <div className="h-24 bg-white/50 rounded mt-4" />
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
