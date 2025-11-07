import { Check, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function SolutionV3() {
  const pillars = [
    {
      title: "ORGANIZE TUDO",
      badge: "Freemium",
      badgeColor: "bg-blue-100 text-blue-700 border-blue-300",
      color: "from-blue-500 to-blue-600",
      icon: "📂",
      description:
        "Jogue todos os PDFs de todos os cursos. A IA organiza automaticamente por matéria. Nunca mais perca tempo procurando.",
      features: [
        "Upload ilimitado de PDFs",
        "Organização automática por matéria",
        "Busca instantânea",
        "Acesso de qualquer lugar",
      ],
    },
    {
      title: "ESTUDE COM MÉTODO",
      badge: "Freemium",
      badgeColor: "bg-purple-100 text-purple-700 border-purple-300",
      color: "from-purple-500 to-purple-600",
      icon: "🎯",
      description:
        "Esquece 'estudar 8h/dia'. O AppConcurso te diz exatamente o que estudar HOJE, baseado no seu edital e no seu ritmo.",
      features: [
        "Plano personalizado pro seu concurso",
        "Revisão espaçada inteligente",
        "Adaptação ao seu ritmo",
        "Progresso visual claro",
      ],
    },
    {
      title: "CORRIJA COM IA",
      badge: "Novidade 🆕",
      badgeColor: "bg-green-100 text-green-700 border-green-300",
      color: "from-green-500 to-green-600",
      icon: "🤖",
      description:
        "Sua primeira redação vai ser ruim. Normal. A IA te ensina a melhorar em cada tentativa, sem esperar semanas por um professor.",
      features: [
        "Feedback instantâneo",
        "Correção baseada em bancas reais",
        "Sugestões de melhoria específicas",
        "Acompanhamento de evolução",
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
              A solução? 3 pilares que funcionam
            </h2>
          </div>
          <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto">
            Simples, direto e eficaz. É assim que você vai começar do jeito certo.
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

        <div className="text-center mt-12 bg-blue-50 border-2 border-blue-200 rounded-2xl p-8 max-w-4xl mx-auto">
          <p className="font-body text-lg text-blue-900 font-semibold">
            💡 <strong>Comece do jeito certo:</strong> Não precisa ser complexo. Organize, siga o método, evolua com IA.
          </p>
        </div>
      </div>
    </section>
  );
}
