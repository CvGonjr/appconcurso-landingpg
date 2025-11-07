import { EmailCapture } from "./EmailCapture";
import { Sparkles, Users } from "lucide-react";

export const HeroV2 = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-5" />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 items-center max-w-7xl mx-auto">
          {/* Coluna Esquerda - 60% */}
          <div className="lg:col-span-3 space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                🚀 Em desenvolvimento - Acesso antecipado
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground">
              Pare de se afogar em PDFs de{" "}
              <span className="bg-primary text-primary-foreground px-3 py-1 rounded-lg shadow-lg underline decoration-primary/40 decoration-4 underline-offset-4">
                10 cursinhos diferentes
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              O <span className="font-semibold text-foreground">AppConcurso</span> é o hub inteligente 
              que centraliza <span className="font-semibold text-foreground">TODO seu material</span>{" "}
              + corrige suas discursivas com <span className="font-semibold text-primary">IA</span>
            </p>

            {/* Formulário de Captura */}
            <div className="pt-4">
              <EmailCapture
                variant="hero"
                size="large"
                placeholder="seu@email.com"
                buttonText="Quero acesso antecipado ⚡"
              />
            </div>

            {/* Prova Social */}
            <div className="flex items-center gap-3 pt-2">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-background bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-semibold"
                  >
                    <Users className="w-5 h-5" />
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="text-green-600 font-semibold">✓</span> Mais de{" "}
                <span className="font-semibold text-foreground">847 concurseiros</span> já garantiram acesso
              </p>
            </div>
          </div>

          {/* Coluna Direita - 40% */}
          <div className="lg:col-span-2 animate-fade-in-up">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-hero opacity-20 blur-3xl rounded-3xl animate-glow-pulse" />
              <div className="relative bg-gradient-to-br from-background to-muted p-8 rounded-2xl shadow-futuristic border border-border animate-float">
                {/* Mockup do Dashboard */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="text-xs text-muted-foreground">Dashboard</div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="h-8 bg-primary/20 rounded animate-pulse" />
                    <div className="grid grid-cols-2 gap-3">
                      <div className="h-24 bg-card rounded shadow-sm p-3">
                        <div className="h-3 w-16 bg-muted rounded mb-2" />
                        <div className="h-5 w-12 bg-primary/30 rounded" />
                      </div>
                      <div className="h-24 bg-card rounded shadow-sm p-3">
                        <div className="h-3 w-16 bg-muted rounded mb-2" />
                        <div className="h-5 w-12 bg-secondary/30 rounded" />
                      </div>
                    </div>
                    <div className="h-32 bg-card rounded shadow-sm p-3">
                      <div className="h-3 w-24 bg-muted rounded mb-2" />
                      <div className="space-y-2">
                        <div className="h-2 bg-primary/20 rounded-full" />
                        <div className="h-2 bg-primary/30 rounded-full w-3/4" />
                        <div className="h-2 bg-primary/10 rounded-full w-1/2" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
