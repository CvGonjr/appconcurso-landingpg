export default function FinalCTA() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-12 md:p-16 text-center shadow-elegant">
            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-20">
              <svg width="60" height="60" className="absolute inset-0 w-full h-full">
                <defs>
                  <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                    <circle cx="30" cy="30" r="2" fill="white" opacity="0.3"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
            
            <div className="relative space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                <svg className="w-5 h-5 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
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
                <a
                  href="#pricing"
                  className="group inline-flex items-center gap-2 bg-white hover:bg-white/90 text-primary px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all active:scale-95"
                >
                  Criar uma Conta Gratuita
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                
                <a
                  href="#how-it-works"
                  className="inline-flex items-center gap-2 border-2 border-white text-primary-foreground hover:bg-white/10 px-8 py-4 rounded-lg font-bold text-lg transition-all"
                >
                  Ver Demonstração
                </a>
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
}
