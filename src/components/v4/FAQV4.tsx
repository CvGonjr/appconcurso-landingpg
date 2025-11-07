import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQV4() {
  const faqs = [
    {
      question: "Funciona pra quem só tem 2h/dia?",
      answer:
        "Perfeitamente. Nosso algoritmo otimiza CADA MINUTO. Qualidade > Quantidade de horas. 2h focadas com método valem mais que 5h desorganizadas.",
    },
    {
      question: "E se eu falhar um dia?",
      answer:
        "O app não te pune. Reajusta o próximo dia automaticamente. Vida real tem imprevistos - chefe pediu hora extra, trânsito absurdo, filho doente. O plano se adapta.",
    },
    {
      question: "Posso estudar no intervalo do almoço?",
      answer:
        "Sim! App mobile otimizado. 20min no almoço = 1 módulo completo. 30min no ônibus = revisão de uma matéria. Todo tempo conta.",
    },
    {
      question: "Como o app sabe meu nível de energia?",
      answer:
        "Você indica rapidamente no início do dia (alta/média/baixa energia). O app ajusta automaticamente o tipo e volume de conteúdo. Dia cansado? Só revisão leve. Dia disposto? Conteúdo novo.",
    },
    {
      question: "Vale a pena com rotina caótica?",
      answer:
        "Especialmente pra você. Rotina regular é fácil de planejar. Rotina caótica precisa de adaptação inteligente. É exatamente nosso diferencial.",
    },
    {
      question: "Quanto tempo até ver resultado?",
      answer:
        "Primeira semana: menos estresse, mais clareza. Primeiro mês: consistência real pela primeira vez. 3-6 meses: progresso mensurável no edital. Depende do seu concurso e dedicação.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-dark">
            Perguntas de quem trabalha
          </h2>
          <p className="font-body text-xl text-gray-600 max-w-2xl mx-auto">
            Respondemos as dúvidas mais comuns
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
