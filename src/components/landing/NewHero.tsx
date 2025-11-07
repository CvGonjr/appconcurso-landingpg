import { EmailCapture } from "./EmailCapture";
import { Badge } from "@/components/ui/badge";
import { Rocket, CheckCircle2 } from "lucide-react";
import dashboardHero from "@/assets/dashboard-hero.png";

export const NewHero = () => {
  return (
    <section className="min-h-[60vh] pt-32 pb-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[60%_40%] gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-fade-in">
            <Badge className="inline-flex items-center gap-2 bg-primary/10 text-primary hover:bg-primary/20 text-sm px-4 py-2">
              <Rocket className="w-4 h-4" />
              Em desenvolvimento - Acesso antecipado
            </Badge>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Pare de se afogar em PDFs de{" "}
              <span className="text-secondary">10 cursinhos</span> diferentes
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              O AppConcurso é o hub inteligente que centraliza TODO seu material + 
              corrige suas discursivas com IA
            </p>
            
            <div className="space-y-4">
              <EmailCapture 
                variant="hero" 
                placeholder="seu@email.com"
                buttonText="Quero acesso antecipado ⚡"
              />
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-secondary" />
                <span>Mais de 847 concurseiros já garantiram acesso</span>
              </div>
            </div>
          </div>
          
          {/* Right Column - Dashboard Image */}
          <div className="relative animate-fade-in lg:block hidden">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
              <img 
                src={dashboardHero}
                alt="Dashboard do AppConcurso"
                className="relative w-full rounded-2xl shadow-futuristic-hover border border-border animate-[float_6s_ease-in-out_infinite]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
