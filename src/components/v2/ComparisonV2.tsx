import { Card } from "@/components/ui/card";
import { X, Check } from "lucide-react";

const comparisons = [
  {
    before: "5 ferramentas diferentes (Notion, Trello, Evernote...)",
    after: "1 hub completo especializado",
  },
  {
    before: "Organização manual e demorada",
    after: "IA organiza automaticamente",
  },
  {
    before: "Redação sem feedback real",
    after: "Correção inteligente instantânea",
  },
  {
    before: "Planos genéricos de internet",
    after: "Adaptado ao SEU edital",
  },
  {
    before: "R$200+/mês em múltiplos apps",
    after: "R$49/mês tudo incluso",
  },
  {
    before: "Você é só mais um usuário",
    after: "Comunidade de concurseiros",
  },
];

export const ComparisonV2 = () => {
  return (
    <section id="recursos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Título */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold">
              AppConcurso <span className="text-primary">vs.</span> Ferramentas Genéricas
            </h2>
            <p className="text-xl text-muted-foreground">
              Veja por que concurseiros estão <span className="font-semibold text-foreground">migrando</span>
            </p>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-hidden rounded-xl border-2 border-border shadow-futuristic">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="bg-muted/50 p-6 text-left font-heading text-xl font-bold">
                    Você hoje
                  </th>
                  <th className="bg-primary/10 p-6 text-left font-heading text-xl font-bold text-primary">
                    AppConcurso
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((item, index) => (
                  <tr
                    key={index}
                    className={`border-b border-border ${
                      index % 2 === 0 ? "" : "bg-muted/30"
                    }`}
                  >
                    <td className="p-6">
                      <div className="flex items-start gap-3">
                        <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item.before}</span>
                      </div>
                    </td>
                    <td className="p-6 bg-primary/5">
                      <div className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="font-medium">{item.after}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {comparisons.map((item, index) => (
              <Card key={index} className="overflow-hidden border-2">
                <div className="bg-muted/50 p-4">
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground mb-1">
                        Você hoje:
                      </p>
                      <p className="text-sm text-muted-foreground">{item.before}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-primary/5 p-4">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold text-primary mb-1">
                        AppConcurso:
                      </p>
                      <p className="text-sm font-medium">{item.after}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
