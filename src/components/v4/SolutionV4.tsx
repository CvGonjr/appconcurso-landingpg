import { Check, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function SolutionV4() {
  const pillars = [
    {
      title: "ORGANIZE TUDO",
      badge: "Freemium",
      badgeColor: "bg-blue-100 text-blue-700 border-blue-300",
      color: "from-blue-500 to-blue-600",
      icon: "⚡",
      description:
        "Zero tempo perdido organizando. Jogue tudo no app, a IA arruma. Você abre e já sabe o que estudar HOJE.",
      features: [
        "Upload e organização instantânea",
        "Busca ultrarrápida",
        "Acesso mobile otimizado",
        "Sincronização automática",
      ],
    },
    {
      title: "ESTUDE COM MÉTODO",
      badge: "Freemium",
      badgeColor: "bg-purple-100 text-purple-700 border-purple-300",
      color: "from-purple-500 to-purple-600",
      icon: "📊",
      description:
        "Dia pesado no trabalho? O app entende. Adapta seu plano pra você não perder o ritmo nos dias ruins. Consistência realista.",
      features: [
        "Adaptação ao seu nível de energia",
        "Plano que se ajusta automaticamente",
        "Revisão inteligente nos dias livres",
        "Progresso mesmo em dias difíceis",
      ],
    },
    {
      title: "CORRIJA COM IA",
      badge: "Novidade 🆕",
      badgeColor: "bg-green-100 text-green-700 border-green-300",
      color: "from-green-500 to-green-600",
      icon: "🚀",
      description:
        "Escreveu a redação no domingo? Segunda de manhã já tem feedback. Professor demora semanas. Você não tem esse tempo.",
      features: [
        "Feedback em minutos, não semanas",
        "Correção baseada em bancas",
        "Evolução mensurável",
        "Sem depender de terceiros",
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
              Solução feita para quem trabalha
            </h2>
          </div>
          <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto">
            Eficiência máxima. Cada minuto conta quando você tem 2h, não 8h.
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

        <div className="text-center mt-12 bg-purple-50 border-2 border-purple-200 rounded-2xl p-8 max-w-4xl mx-auto">
          <p className="font-body text-lg text-purple-900 font-semibold">
            💡 <strong>Para quem trabalha:</strong> Estude menos horas com mais qualidade. O AppConcurso otimiza seu tempo limitado.
          </p>
        </div>
      </div>
    </section>
  );
}
