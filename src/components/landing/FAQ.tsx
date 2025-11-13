import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Para qual tipo de prova/concurso o AppConcurso serve?",
    answer: "O AppConcurso é projetado para concurseiros em todas as fases e atende a concursos de todos os níveis (fundamental, médio e superior). Seja para concursos municipais, estaduais ou federais, nossa plataforma se adapta às suas necessidades específicas, permitindo cadastrar editais personalizados e organizar materiais de qualquer área."
  },
  {
    question: "Como o AppConcurso me ajuda a organizar meus estudos?",
    answer: "Ele atua como um hub centralizado onde você cadastra concursos e organiza matérias, tópicos e aulas de diversas fontes em um só lugar. Com a Super Inteligência AC (no plano Premium), você recebe um ciclo de estudos personalizado, flashcards dinâmicos, resumos inteligentes e mapas mentais, eliminando a fragmentação e maximizando sua eficiência."
  },
  {
    question: "Posso cancelar o Plano Premium a qualquer momento?",
    answer: "Sim. Nosso modelo é baseado em assinatura e você pode cancelar quando quiser, com total flexibilidade. Não há contratos de longo prazo ou taxas de cancelamento. Você mantém acesso até o final do período já pago."
  },
  {
    question: "Como funciona o Plano Gratuito (Basic)?",
    answer: "O Plano Gratuito oferece ferramentas essenciais para organização manual de até 3 concursos, com IA e ciclo de estudos limitados (10 interações mensais). É perfeito para você conhecer a plataforma e começar a organizar seus materiais antes de fazer upgrade para o Premium."
  },
  {
    question: "É seguro colocar os dados do meu cartão?",
    answer: "Sim. A segurança é nossa prioridade máxima. Usamos um gateway de pagamento externo e seguro (certificado PCI-DSS), e seus dados são protegidos pela plataforma do Firebase (Google), uma das infraestruturas mais seguras do mundo. Nunca armazenamos informações completas do seu cartão em nossos servidores."
  },
  {
    question: "O que é a 'Super Inteligência AC'?",
    answer: "É o produto estrela do nosso Plano Premium. A Super Inteligência AC atua como um mentor de IA pessoal que personaliza sua jornada de estudos, otimizando tanto aspectos racionais (resumos, flashcards, ciclos de revisão) quanto emocionais (motivação, insights, radar de oportunidades). Ela analisa seu desempenho, identifica pontos fracos e adapta seu plano para maximizar resultados."
  }
];

export const FAQ = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Dúvidas</span>
            <h2 className="text-3xl md:text-5xl font-bold">Perguntas Frequentes</h2>
            <p className="text-xl text-muted-foreground">
              Encontre respostas para as dúvidas mais comuns sobre o AppConcurso
            </p>
          </div>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="bg-card border border-border rounded-lg px-6 shadow-sm hover:shadow-card transition-shadow"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6">
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
