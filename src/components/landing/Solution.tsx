import { Button } from "@/components/ui/button";
import { Sparkles, Target, TrendingUp } from "lucide-react";

export const Solution = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 text-primary">
              <Sparkles className="w-6 h-6" />
              <span className="text-sm font-semibold uppercase tracking-wider">A Solução</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold">
              É por isso que criamos o 
              <span className="bg-gradient-hero bg-clip-text text-transparent"> AppConcurso</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              O AppConcurso é a sua resposta definitiva à fragmentação. Atuamos como seu{" "}
                  <span className="font-semibold text-foreground">Cérebro Organizacional</span>, e nossa{" "}
                  <span className="font-semibold text-foreground">Super Inteligência AC</span> é um mentor virtual 
              completo que guia você do zero até a aprovação.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 pt-8">
            <div className="flex flex-col items-center text-center space-y-4 p-6 bg-card rounded-xl border border-border shadow-card">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center shadow-glow">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Centralização Total</h3>
              <p className="text-muted-foreground">
                Todos os seus cursinhos, editais e materiais em um único lugar organizado.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center space-y-4 p-6 bg-card rounded-xl border border-border shadow-card">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center shadow-glow">
                <Sparkles className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">IA Personalizada</h3>
              <p className="text-muted-foreground">
                Plano de estudos adaptado às suas necessidades e pontos fracos específicos.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center space-y-4 p-6 bg-card rounded-xl border border-border shadow-card">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center shadow-glow">
                <TrendingUp className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Foco no que Importa</h3>
              <p className="text-muted-foreground">
                Identifique e trabalhe exatamente no que cai na prova, sem dispersão.
              </p>
            </div>
          </div>
          
          <div className="text-center pt-8">
            <Button size="xl" variant="hero">
              Comece Grátis Agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
