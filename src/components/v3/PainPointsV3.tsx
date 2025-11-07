import { XCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function PainPointsV3() {
  const painPoints = [
    {
      title: "Comprei 5 cursos e não sei por onde começar",
      description:
        "Estratégia, Gran, Direção, QC... você tem tudo mas não sabe a ordem. Resultado? Estuda aleatoriamente e não vê progresso.",
    },
    {
      title: "Baixei 200 PDFs e agora não acho nada",
      description:
        "Aquele resumo de Administrativo que você jurou que salvou? Desapareceu. Você perde mais tempo PROCURANDO do que estudando.",
    },
    {
      title: "Todo mundo fala coisa diferente",
      description:
        "Um coach fala pra fazer questões. Outro fala pra ler teoria. Outro fala pra fazer mapas mentais. E você? Tá perdido.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-dark">
            Você se reconhece em alguma dessas situações?
          </h2>
          <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto">
            A maioria dos concurseiros iniciantes passa por isso. Você não está sozinho.
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
            "Cara, eu sou resultado de testar MIL coisas até achar o que funciona..." - Lucas, 22 anos
          </p>
        </div>
      </div>
    </section>
  );
}
