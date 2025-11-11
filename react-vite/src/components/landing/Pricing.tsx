import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, X, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Plano Gratuito",
    price: "R$ 0",
    period: "/mês",
    description: "Ideal para começar a organizar seus estudos",
    features: [
      { text: "Até 3 concursos cadastrados", included: true },
      { text: "Organização manual de materiais", included: true },
      { text: "Cronograma básico", included: true },
      { text: "IA limitada (10 interações/mês)", included: true },
      { text: "Ciclos de estudo básicos", included: true },
      { text: "Super Inteligência AC completa", included: false },
      { text: "Flashcards dinâmicos ilimitados", included: false },
      { text: "Resumos inteligentes", included: false },
      { text: "Radar de oportunidades", included: false },
      { text: "Suporte prioritário", included: false }
    ],
    cta: "Começar Grátis",
    variant: "outline" as const,
    popular: false
  },
  {
    name: "Plano Premium VIP",
    price: "R$ 49,90",
    period: "/mês",
    description: "Desbloqueie todo o poder da Super Inteligência AC",
    features: [
      { text: "Concursos ilimitados", included: true },
      { text: "Super Inteligência AC completa", included: true },
      { text: "Ciclos de estudo otimizados", included: true },
      { text: "Flashcards dinâmicos ilimitados", included: true },
      { text: "Resumos inteligentes", included: true },
      { text: "Mapas mentais automáticos", included: true },
      { text: "Radar de oportunidades", included: true },
      { text: "Insights personalizados", included: true },
      { text: "Treinamento ininterrupto", included: true },
      { text: "Suporte prioritário 24/7", included: true }
    ],
    cta: "Começar Agora",
    variant: "hero" as const,
    popular: true
  }
];

export const Pricing = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Investimento</span>
            <h2 className="text-3xl md:text-5xl font-bold">
              Escolha o Plano Ideal para Sua 
              <span className="text-accent"> Aprovação</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Chega de estudar às cegas. O AppConcurso Premium é o seu bilhete para o 
              Treinamento Ininterrupto e a Super Inteligência AC, que unifica, personaliza e guia a sua jornada.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative p-8 space-y-6 ${
                  plan.popular 
                    ? 'border-2 border-primary shadow-elegant' 
                    : 'border border-border'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-hero text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold shadow-glow flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Mais Popular
                  </div>
                )}
                
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <p className="text-muted-foreground">{plan.description}</p>
                </div>
                
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                
                <Button 
                  size="lg" 
                  variant={plan.variant} 
                  className="w-full"
                >
                  {plan.cta}
                </Button>
                
                <div className="space-y-3 pt-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex} 
                      className="flex items-start gap-3"
                    >
                      {feature.included ? (
                        <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                      )}
                      <span className={feature.included ? 'text-foreground' : 'text-muted-foreground'}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center bg-gradient-card p-8 rounded-xl border border-border max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Garantia de Risco Zero</h3>
            <p className="text-muted-foreground">
              Comece hoje mesmo com o Plano Gratuito e teste as ferramentas essenciais de organização. 
              Quando estiver pronto para turbinar seus resultados, faça upgrade para o Premium VIP com total flexibilidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
