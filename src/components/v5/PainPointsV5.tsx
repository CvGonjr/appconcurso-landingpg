import { XCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function PainPointsV5() {
  const painPoints = [
    {
      title: "Planejei a semana. Filha ficou doente. Perdido.",
      description:
        "Você montou o cronograma perfeito. Aí a vida acontece: familiar doente, reunião urgente, imprevisto. Lá se vai a semana.",
    },
    {
      title: "Não tenho 8h/dia. Tenho 1h aqui, 30min ali.",
      description:
        "Você estuda enquanto o jantar cozinha. 20min antes de dormir. Sábado de manhã. Mas os materiais não se encaixam nesses pedaços.",
    },
    {
      title: "Já testei tudo. Preciso do que FUNCIONA.",
      description:
        "Notion, Trello, planilhas, apps... você já tentou de tudo. Precisa de algo feito para SUA realidade, não para estudante ideal.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-dark">
            A vida real não cabe em cronogramas rígidos
          </h2>
          <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto">
            Você não é indisciplinado. Você tem responsabilidades.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {painPoints.map((point, index) => (
            <Card
              key={index}
              className="border-2 border-red-200 bg-red-50/50 hover:shadow-futuristic-hover hover:-translate-y-1 transition-all duration-300"
            >
              <CardContent className="p-8 space-y-4">
                <div className="flex items-start gap-4">
                  <XCircle className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
                  <div className="space-y-3">
                    <h3 className="font-heading text-xl font-bold text-red-700">
                      {point.title}
                    </h3>
                    <p className="font-body text-gray-700 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="font-body text-lg text-gray-600 italic">
            "Outro ponto é a imprevisibilidade da vida. Mês passado minha mãe ficou doente..." - Roberto, 38 anos
          </p>
        </div>
      </div>
    </section>
  );
}
