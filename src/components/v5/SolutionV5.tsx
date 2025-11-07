import { Check, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function SolutionV5() {
  const pillars = [
    {
      title: "ORGANIZE TUDO",
      badge: "Freemium",
      badgeColor: "bg-blue-100 text-blue-700 border-blue-300",
      color: "from-blue-500 to-blue-600",
      icon: "🗂️",
      description:
        "Todos os materiais de todos os cursinhos em 1 lugar. Acesso rápido. Quando você tem 30 minutos, não perde 10 procurando.",
      features: [
        "Upload de todos os cursos",
        "Organização centralizada",
        "Busca em segundos",
        "Acesso quando tiver tempo",
      ],
    },
    {
      title: "ESTUDE COM MÉTODO",
      badge: "Freemium",
      badgeColor: "bg-purple-100 text-purple-700 border-purple-300",
      color: "from-purple-500 to-purple-600",
      icon: "🔄",
      description:
        "Perdeu 5 dias por imprevisto? O app recalcula TUDO automaticamente. Você não refaz plano, só continua estudando.",
      features: [
        "Recalculo automático de plano",
        "Pausa e retoma sem perder progresso",
        "Adapta a pedaços de tempo",
        "Consistência realista",
      ],
    },
    {
      title: "CORRIJA COM IA",
      badge: "Novidade 🆕",
      badgeColor: "bg-green-100 text-green-700 border-green-300",
      color: "from-green-500 to-green-600",
      icon: "✍️",
      description:
        "Escreveu a redação? Feedback em 30 segundos. Não tem tempo de esperar professor? A IA te guia.",
      features: [
        "Correção instantânea",
        "Sem depender de horários",
        "Aprenda no seu tempo",
        "Evolução mensurável",
      ],
    },
  ];

  return (
    <section id="recursos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-accent-gold" />
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-dark">
              Flexibilidade sem perder eficiência
            </h2>
          </div>
          <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto">
            Feito para quem tem vida adulta completa, não só estudos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => (
            <Card
              key={index}
              className="border-2 hover:shadow-futuristic-hover hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${pillar.color}`}></div>
              <CardContent className="p-8 space-y-6">
                <div className="space-y-3">
                  <div className="text-5xl mb-4">{pillar.icon}</div>
                  <Badge className={`${pillar.badgeColor} border`}>
                    {pillar.badge}
                  </Badge>
                  <h3 className="font-heading text-2xl font-bold text-primary-dark">
                    {pillar.title}
                  </h3>
                  <p className="font-body text-gray-700 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t">
                  {pillar.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="font-body text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 bg-green-50 border-2 border-green-200 rounded-2xl p-8 max-w-4xl mx-auto">
          <p className="font-body text-lg text-green-900 font-semibold">
            💡 <strong>Para quem tem família:</strong> O plano se adapta à sua vida, não o contrário. Imprevistos acontecem, progresso continua.
          </p>
        </div>
      </div>
    </section>
  );
}
