import { XCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function PainPointsV6() {
  const painPoints = [
    {
      title: "Investi anos e R$30k. Preciso acertar AGORA.",
      description:
        "Você não tem mais 10 anos pra testar. Cada tentativa conta. Precisa de método que te leve direto ao resultado.",
    },
    {
      title: "Apps 'modernos' com firulas que não servem",
      description:
        "Gamificação, streak, medalhas... você não precisa disso. Precisa de organização, método e disciplina. Sem enrolação.",
    },
    {
      title: "Já sei estudar. Preciso de EXECUÇÃO.",
      description:
        "Você não precisa de motivação. Precisa de um sistema que GARANTA que você estude o certo, na hora certa, sem desperdício.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-dark">
            Você é experiente. Precisa de seriedade.
          </h2>
          <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto">
            Chega de promessas vazias. Hora de resultados concretos.
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
            "Hoje eu tento ser mais cirúrgico. Meu método atual é: Ciclo de estudos..." - Antônio, 52 anos
          </p>
        </div>
      </div>
    </section>
  );
}
