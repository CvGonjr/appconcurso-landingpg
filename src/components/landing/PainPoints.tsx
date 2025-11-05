import { FileX, AlertCircle, CalendarX } from "lucide-react";
import { Card } from "@/components/ui/card";

const pains = [
  {
    icon: FileX,
    title: "15 abas, 3 apps, PDFs perdidos",
    description: "Você tem Estratégia, Direção, Gran, QC... onde diabos está aquele resumo de Administrativo?"
  },
  {
    icon: AlertCircle,
    title: "Redação 3.0 e você não sabe o porquê",
    description: "Banca não explica. Professor demora semanas. Você fica no escuro."
  },
  {
    icon: CalendarX,
    title: "Plano de estudos que nunca funciona",
    description: "Genérico, rígido, feito para um robô. Não se adapta à SUA vida real."
  }
];

export const PainPoints = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
              Por que concurseiros{" "}
              <span className="text-destructive">abandonam a preparação?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Não é falta de vontade. É falta de organização.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {pains.map((pain, index) => (
              <Card 
                key={index} 
                className="p-8 space-y-4 hover:shadow-futuristic-hover transition-all duration-300 hover:-translate-y-1 bg-card border-2 border-border"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-destructive/10 rounded-2xl flex items-center justify-center">
                  <pain.icon className="w-8 h-8 text-destructive" />
                </div>
                <h3 className="text-xl font-heading font-semibold">{pain.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{pain.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
