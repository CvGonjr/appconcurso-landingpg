import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { EmailCapture, EmailCaptureSegment } from "./EmailCapture";
import { Check, X } from "lucide-react";

interface PricingV2Props {
  segment?: EmailCaptureSegment;
}

export function PricingV2({ segment = "geral" }: PricingV2Props) {
  const plans = [
    {
      name: "Freemium",
    badge: "GRÁTIS PARA SEMPRE",
    badgeVariant: "secondary" as const,
    price: "R$ 0",
    period: "/mês",
    features: [
      { text: "Até 3 concursos simultâneos", included: true },
      { text: "Organização básica de materiais", included: true },
      { text: "1 correção de discursiva/mês com IA 🆕", included: true },
      { text: "Revisões espaçadas manuais", included: true },
      { text: "Planos personalizados por IA", included: false },
      { text: "Correções ilimitadas", included: false },
    ],
    ctaText: "Começar grátis",
    highlighted: false,
  },
  {
    name: "Premium",
    badge: "MAIS POPULAR",
    badgeVariant: "default" as const,
    price: "R$ 49",
    originalPrice: "R$ 98",
    period: "/mês",
    discount: "50% OFF - Acesso antecipado",
    features: [
      { text: "Concursos ilimitados", included: true },
      { text: "Organização automática com IA", included: true },
      { text: "Correções de discursivas ilimitadas 🆕", included: true },
      { text: "Planos personalizados adaptativos", included: true },
      { text: "Mapas mentais gerados por IA", included: true },
      { text: "Análise preditiva de performance", included: true },
      { text: "Suporte prioritário", included: true },
    ],
    ctaText: "Garantir 50% OFF",
    highlighted: true,
    note: "⚡ Oferta válida apenas para lista de espera",
  },
];

  return (
    <section id="planos" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Título */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold">
              Escolha seu plano
            </h2>
            <p className="text-xl text-muted-foreground">
              Comece <span className="font-semibold text-foreground">grátis</span>. 
              Evolua quando quiser.
            </p>
          </div>

          {/* Planos */}
          <div className="grid lg:grid-cols-2 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative p-8 space-y-6 ${
                  plan.highlighted
                    ? "border-4 border-primary shadow-futuristic-hover lg:scale-105"
                    : "border-2 border-border shadow-futuristic"
                } transition-all duration-300`}
              >
                {/* Badge de destaque */}
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge
                      variant={plan.badgeVariant}
                      className={`px-4 py-1.5 text-sm font-bold shadow-lg ${
                        plan.highlighted ? "bg-gradient-hero animate-glow-pulse" : ""
                      }`}
                    >
                      {plan.badge}
                    </Badge>
                  </div>
                )}

                {/* Nome do plano */}
                <div className="space-y-2 pt-4">
                  <h3 className="font-heading text-2xl font-bold">{plan.name}</h3>
                </div>

                {/* Preço */}
                <div className="space-y-1">
                  {plan.originalPrice && (
                    <div className="flex items-center gap-2">
                      <span className="text-2xl text-muted-foreground line-through">
                        {plan.originalPrice}
                      </span>
                      {plan.discount && (
                        <Badge variant="destructive" className="text-xs">
                          {plan.discount}
                        </Badge>
                      )}
                    </div>
                  )}
                  <div className="flex items-baseline gap-2">
                    <span className="font-heading text-5xl font-bold">{plan.price}</span>
                    <span className="text-xl text-muted-foreground">{plan.period}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 py-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-5 h-5 text-muted-foreground/40 flex-shrink-0 mt-0.5" />
                      )}
                      <span
                        className={`text-sm ${
                          feature.included ? "text-foreground" : "text-muted-foreground/60"
                        }`}
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="pt-4">
                  <EmailCapture
                    variant="pricing"
                    size="default"
                    buttonText={plan.ctaText}
                    placeholder="seu@email.com"
                    segment={segment}
                  />
                </div>

                {/* Nota adicional */}
                {plan.note && (
                  <p className="text-xs text-center text-muted-foreground pt-2">
                    {plan.note}
                  </p>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
