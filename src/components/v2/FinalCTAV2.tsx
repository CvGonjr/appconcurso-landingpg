import { EmailCapture } from "./EmailCapture";

export const FinalCTAV2 = () => {
  return (
    <section className="py-20 bg-gradient-blue-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-20" />
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "1s" }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Sua aprovação começa aqui
          </h2>
          <p className="text-xl md:text-2xl text-white/90">
            Junte-se a <span className="font-bold">847 concurseiros</span> que já garantiram acesso antecipado
          </p>
          
          <div className="pt-4">
            <EmailCapture
              variant="final"
              size="large"
              buttonText="Entrar na lista VIP"
              placeholder="seu@email.com"
              className="max-w-xl mx-auto"
            />
          </div>

          <p className="text-sm text-white/70 pt-4">
            Sem cartão. Sem compromisso. Apenas concurseiros sérios.
          </p>
        </div>
      </div>
    </section>
  );
};
