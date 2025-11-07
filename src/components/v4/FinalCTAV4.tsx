import { EmailCapture } from "../v2/EmailCapture";

export function FinalCTAV4() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent-gold rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-purple rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold leading-tight">
            Trabalhe 8h. Estude 2h. Seja aprovado.
          </h2>
          
          <p className="font-body text-xl md:text-2xl text-white/90">
            1.200 profissionais já descobriram: dá pra conciliar
          </p>

          <div className="max-w-xl mx-auto pt-4">
            <EmailCapture 
              variant="final" 
              size="large" 
              segment="profissional"
              buttonText="Quero um plano realista 💼"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-8 pt-8 text-white/80">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Teste grátis</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Mobile otimizado</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Adapta à sua rotina</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
