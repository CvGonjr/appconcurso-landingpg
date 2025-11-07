import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQV5() {
  const faqs = [
    {
      question: "Funciona com rotina irregular?",
      answer:
        "Perfeito pra isso. O app se adapta a QUALQUER rotina. Você informa disponibilidade quando pode, ele monta o plano. Semana tranquila? Acelera. Semana caótica? Alivia sem culpa.",
    },
    {
      question: "Tenho 40 anos. É tarde?",
      answer:
        "Nosso aprovado mais velho tinha 54 anos. Método funciona independente da idade. Na verdade, maturidade + método = combinação poderosa. Você já sabe estudar, só precisa de organização.",
    },
    {
      question: "E se eu tiver que parar 1 mês?",
      answer:
        "Pausa o plano. Quando voltar, retoma de onde parou. Sem perder progresso, sem refazer cronograma. Familiar internado? Viagem de trabalho? Vida acontece. O app entende.",
    },
    {
      question: "Posso estudar em horários fragmentados?",
      answer:
        "Perfeitamente. 30min de manhã + 20min no almoço + 1h à noite = plano completo. O app otimiza cada pedaço de tempo. Não precisa de blocos de 3h.",
    },
    {
      question: "Como funciona a adaptação automática?",
      answer:
        "Você marca o que conseguiu fazer. O app recalcula o próximo período automaticamente. Perdeu 3 dias? Redistribui o conteúdo nos próximos 10 dias. Zero trabalho manual.",
    },
    {
      question: "Vale a pena com tantas responsabilidades?",
      answer:
        "Especialmente pra você. Quem tem tempo ilimitado não precisa de eficiência. Você PRECISA. Cada minuto conta. 450 pais/mães já provaram que é possível.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-dark">
            Perguntas de pais e mães concurseiros
          </h2>
          <p className="font-body text-xl text-gray-600 max-w-2xl mx-auto">
            Dúvidas de quem equilibra família e estudo
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border-2 border-gray-200 rounded-xl px-6 hover:border-primary transition-colors"
              >
                <AccordionTrigger className="font-heading text-lg font-semibold text-primary-dark hover:text-primary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-body text-gray-700 leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="font-body text-gray-600">
            Ainda tem dúvidas?{" "}
            <a href="mailto:suporte@appconcurso.com" className="text-primary font-semibold hover:underline">
              Fale com a gente
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
