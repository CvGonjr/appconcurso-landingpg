import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-12 md:p-16 text-center shadow-elegant">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20" />
            
            <div className="relative space-y-6 animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
                <span className="text-primary-foreground font-medium">Junte-se a milhares de aprovados</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground leading-tight">
                Pronto para transformar 
                <br />
                seus estudos?
              </h2>
              
              <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
                Comece agora a usar o AppConcurso e maximize suas chances de aprovação 
                em concursos públicos com organização, inteligência e comunidade.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
                <Button 
                  size="xl" 
                  variant="secondary"
                  className="group shadow-lg hover:shadow-xl bg-white hover:bg-white/90"
                >
                  Criar uma Conta Gratuita
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button 
                  size="xl" 
                  variant="outline"
                  className="border-2 border-white text-primary-foreground hover:bg-white/10"
                >
                  Ver Demonstração
                </Button>
              </div>
              
              <p className="text-sm text-primary-foreground/80 pt-4">
                ✓ Sem cartão de crédito necessário  •  ✓ Configuração em 2 minutos  •  ✓ Cancele quando quiser
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
