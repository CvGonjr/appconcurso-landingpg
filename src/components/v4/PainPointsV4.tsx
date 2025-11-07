import { XCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function PainPointsV4() {
  const painPoints = [
    {
      title: "Acordo 5h, trabalho até 18h, volto morto",
      description:
        "Você planeja estudar 3h depois do trabalho. Realidade? Bate o cansaço e você desiste. Culpa, frustração, ciclo vicioso.",
    },
    {
      title: "Plano de estudos não respeita minha energia",
      description:
        "Segunda você tá motivado. Sexta você tá no modo sobrevivência. Mas o plano exige a mesma coisa todo dia. Não funciona.",
    },
    {
      title: "Perco 1h organizando antes de estudar",
      description:
        "Chega em casa, tem que decidir o que estudar, procurar material, montar cronograma. Quando vai estudar de fato? Já perdeu 1h.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-dark">
            A rotina de quem trabalha é brutal
          </h2>
          <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto">
            E os métodos tradicionais não foram feitos pra você. A gente sabe.
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
            "O mais difícil? Sem dúvida é manter a consistência quando você tá exausto..." - Marina, 29 anos
          </p>
        </div>
      </div>
    </section>
  );
}
