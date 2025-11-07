import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQV6() {
  const faqs = [
    {
      question: "Por que não usar Notion/Excel?",
      answer:
        "Pode usar. Mas vai gastar 20h/mês organizando. AppConcurso faz isso em 0h. Você foca em estudar, não em administrar planilhas. Tempo é seu recurso mais valioso aos 50 anos.",
    },
    {
      question: "Tem ciência por trás?",
      answer:
        "Sim. Curva de esquecimento de Ebbinghaus (1885), técnica de Feynman, espaçamento ótimo baseado em meta-análises recentes. Tudo aplicado automaticamente. Não é 'método do coach', é neurociência consolidada.",
    },
    {
      question: "Quanto tempo até o resultado?",
      answer:
        "Depende do seu edital. Mas nossos usuários reduzem 30% do tempo de preparação com método otimizado. Se levaria 18 meses, leva 12. Se levaria 12, leva 8. ROI comprovado.",
    },
    {
      question: "É realmente diferente dos outros apps?",
      answer:
        "Sim. Outros apps focam em gamificação e 'engajamento'. Nós focamos em RESULTADO. Interface profissional, sem distrações. Método científico, não achismo. Analytics sérios, não medalhinhas.",
    },
    {
      question: "Como funciona a revisão espaçada?",
      answer:
        "Algoritmo calcula o momento ÓTIMO de revisar cada conteúdo, baseado na curva de esquecimento. Você revisa justo antes de esquecer, maximizando retenção. Comprovado em 50+ anos de pesquisa.",
    },
    {
      question: "Vale o investimento comparado a cursinhos?",
      answer:
        "Você já gastou R$30k em cursos? AppConcurso organiza TUDO que você já tem. R$49/mês vs R$300-500/mês de cursinho novo. Otimiza o que você já investiu. ROI imediato.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-dark">
            Perguntas técnicas respondidas
          </h2>
          <p className="font-body text-xl text-gray-600 max-w-2xl mx-auto">
            Respostas diretas, sem enrolação
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
            Dúvidas técnicas?{" "}
            <a href="mailto:suporte@appconcurso.com" className="text-primary font-semibold hover:underline">
              Fale com a gente
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
