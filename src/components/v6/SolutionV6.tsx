import { Check, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function SolutionV6() {
  const pillars = [
    {
      title: "ORGANIZE TUDO",
      badge: "Profissional",
      badgeColor: "bg-blue-100 text-blue-700 border-blue-300",
      color: "from-blue-600 to-blue-700",
      icon: "🗄️",
      description:
        "Sistema profissional. Nada de interface infantil. Organização séria, busca rápida, zero distração.",
      features: [
        "Interface limpa e objetiva",
        "Organização hierárquica",
        "Busca avançada e precisa",
        "Foco em produtividade",
      ],
    },
    {
      title: "ESTUDE COM MÉTODO",
      badge: "Científico",
      badgeColor: "bg-purple-100 text-purple-700 border-purple-300",
      color: "from-purple-600 to-purple-700",
      icon: "🧪",
      description:
        "Revisão espaçada (comprovada em 50+ estudos científicos). Não é 'achismo', é neurociência aplicada.",
      features: [
        "Curva de Ebbinghaus aplicada",
        "Espaçamento ótimo calculado",
        "Técnica de Feynman integrada",
        "Baseado em evidências",
      ],
    },
    {
      title: "CORRIJA COM IA",
      badge: "Premium",
      badgeColor: "bg-green-100 text-green-700 border-green-300",
      color: "from-green-600 to-green-700",
      icon: "🎓",
      description:
        "IA treinada com 10.000 redações nota 10 de Cespe, FCC, FGV. Critérios objetivos, não 'achômetro' de professor.",
      features: [
        "Treinada com bancas reais",
        "Critérios oficiais aplicados",
        "Feedback objetivo e mensurável",
        "Evolução estatística",
      ],
    },
  ];

  return (
    <section id="recursos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Award className="w-8 h-8 text-blue-600" />
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-dark">
              Método validado cientificamente
            </h2>
          </div>
          <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto">
            Sem firulas. Só o que comprovadamente funciona.
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
                      <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
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
            📊 <strong>Método comprovado:</strong> ROI mensurável. Cada hora de estudo otimizada. Zero desperdício de tempo e dinheiro.
          </p>
        </div>
      </div>
    </section>
  );
}
