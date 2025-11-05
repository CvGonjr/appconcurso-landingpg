import { Rocket } from "lucide-react";
import dashboardHero from "@/assets/dashboard-hero.png";
import { EmailCapture } from "./EmailCapture";

export const Hero = () => {
  return (
    <section className="min-h-[60vh] pt-32 pb-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[60%_40%] gap-12 items-center max-w-7xl mx-auto">
          {/* Left Column - Text Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-gradient-card px-4 py-2 rounded-full border border-primary/20">
              <Rocket className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium">Em desenvolvimento - Acesso antecipado</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold leading-tight">
              Pare de se afogar em PDFs de{" "}
              <span className="text-secondary">10 cursinhos diferentes</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              O AppConcurso é o hub inteligente que centraliza <span className="font-semibold text-foreground">TODO seu material</span> + corrige suas discursivas com IA
            </p>
            
            <div className="pt-4">
              <EmailCapture 
                variant="hero" 
                size="large"
              />
            </div>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
              <span className="text-secondary font-semibold">✓</span>
              <span>Mais de <span className="font-semibold text-foreground">847 concurseiros</span> já garantiram acesso</span>
            </div>
          </div>
          
          {/* Right Column - Dashboard Image */}
          <div className="relative animate-fade-in-up lg:block hidden">
            <div className="absolute -inset-4 bg-gradient-hero opacity-20 blur-3xl rounded-3xl" />
            <img 
              src={dashboardHero} 
              alt="Dashboard do AppConcurso mostrando organização de materiais de estudo" 
              className="relative w-full rounded-2xl shadow-futuristic border border-border hover:shadow-futuristic-hover transition-shadow duration-300"
              style={{
                animation: "float 6s ease-in-out infinite"
              }}
            />
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </section>
  );
};
