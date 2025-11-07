import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Funciona com meu cursinho [Estratégia, Gran, Direção, etc]?",
    answer:
      "Sim! O AppConcurso é agnóstico de cursinho. Você pode importar PDFs, vídeos e materiais de QUALQUER fonte. Nossa IA organiza automaticamente independente da origem.",
  },
  {
    question: "A IA realmente corrige melhor que um professor?",
    answer:
      "A IA não substitui um professor, mas oferece feedback instantâneo baseado em critérios objetivos de bancas (Cespe, FCC, FGV). É ideal para prática constante. Você recebe análise em 30 segundos vs. semanas esperando correção.",
  },
  {
    question: "Vou precisar pagar múltiplos apps?",
    answer:
      "Não. O AppConcurso é seu hub único. Substitui Notion + Trello + Evernote + Apps de revisão + Plataforma de redação. Tudo em um só lugar por R$49/mês (ou grátis na versão Freemium).",
  },
  {
    question: "Quando o app sai do papel?",
    answer:
      "Estamos em fase final de desenvolvimento. Quem entrar na lista de espera terá acesso antecipado + 50% de desconto vitalício + 3 correções de IA gratuitas.",
  },
  {
    question: "Tem aplicativo mobile?",
    answer:
      "Sim! Teremos apps nativos para iOS e Android. Por enquanto, a versão web é 100% responsiva e funciona perfeitamente no navegador do celular.",
  },
  {
    question: "E se eu não gostar?",
    answer:
      "Versão Freemium é grátis para sempre, sem cartão. No Premium, você pode cancelar a qualquer momento, sem burocracia. Garantia de 7 dias.",
  },
];

export const FAQV2 = () => {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Título */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold">
              Perguntas frequentes
            </h2>
            <p className="text-xl text-muted-foreground">
              Tudo que você precisa saber
            </p>
          </div>

          {/* Accordion */}
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-2 border-border rounded-lg px-6 shadow-futuristic hover:shadow-futuristic-hover transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
