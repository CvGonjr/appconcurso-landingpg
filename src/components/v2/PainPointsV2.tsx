import { Card } from "@/components/ui/card";
import { XCircle } from "lucide-react";

const painPoints = [
  {
    icon: "❌",
    title: "15 abas, 3 apps, PDFs perdidos",
    description:
      "Você tem Estratégia, Direção, Gran, QC... onde diabos está aquele resumo de Administrativo?",
  },
  {
    icon: "❌",
    title: "Redação 3.0 e você não sabe o porquê",
    description:
      "Banca não explica. Professor demora semanas. Você fica no escuro.",
  },
  {
    icon: "❌",
    title: "Plano de estudos que nunca funciona",
    description:
      "Genérico, rígido, feito para um robô. Não se adapta à SUA vida real.",
  },
];

export const PainPointsV2 = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Título */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold">
              Por que concurseiros abandonam a preparação?
            </h2>
            <p className="text-xl text-muted-foreground">
              Não é falta de vontade. É falta de <span className="font-semibold text-foreground">organização</span>.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {painPoints.map((pain, index) => (
              <Card
                key={index}
                className="p-8 space-y-4 border-2 hover:border-destructive/50 hover:-translate-y-2 transition-all duration-300 shadow-futuristic hover:shadow-futuristic-hover group"
              >
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center group-hover:bg-destructive/20 transition-colors">
                    <XCircle className="w-10 h-10 text-destructive" />
                  </div>
                </div>
                <h3 className="font-heading text-xl font-bold text-center">
                  {pain.title}
                </h3>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {pain.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
