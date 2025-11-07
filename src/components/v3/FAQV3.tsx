import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQV3() {
  const faqs = [
    {
      question: "Funciona pra quem nunca estudou pra concurso?",
      answer:
        "Sim! 80% dos nossos usuários são de primeiro concurso. O app foi feito pensando em quem está começando. Interface simples, explicações claras, sem assumir conhecimento prévio.",
    },
    {
      question: "Preciso ter todos os materiais antes?",
      answer:
        "Não! Você pode começar com o que você tem e ir adicionando. A IA organiza conforme você vai colocando. Comece hoje mesmo com 1 PDF, amanhã adiciona mais.",
    },
    {
      question: "É difícil de usar?",
      answer:
        "Se você usa Instagram, vai usar o AppConcurso. Interface simples, sem complicação. A maioria das pessoas começa a usar em menos de 5 minutos.",
    },
    {
      question: "Quanto tempo leva pra ver resultado?",
      answer:
        "Você vai sentir a diferença na primeira semana: menos caos, mais clareza do que estudar. Aprovação depende do seu concurso e dedicação, mas o método acelera sua preparação.",
    },
    {
      question: "E se eu não gostar?",
      answer:
        "Versão gratuita pra sempre disponível! Teste sem compromisso. Se quiser mais recursos, upgrade quando sentir que vale a pena. Sem pegadinhas.",
    },
    {
      question: "Posso usar no celular?",
      answer:
        "Sim! App otimizado pra mobile. Estude no ônibus, no intervalo, onde estiver. Sincroniza automaticamente entre todos os seus dispositivos.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-dark">
            Dúvidas? A gente responde
          </h2>
          <p className="font-body text-xl text-gray-600 max-w-2xl mx-auto">
            Perguntas frequentes de quem está começando agora
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
