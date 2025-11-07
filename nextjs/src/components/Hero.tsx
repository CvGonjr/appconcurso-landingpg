export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-subtle">
      <div className="absolute inset-0 bg-gradient-hero opacity-5" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-gradient-card px-4 py-2 rounded-full border border-primary/20 mb-4">
            <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            <span className="text-sm font-medium">Junte-se aos mais de 20.000 Concurseiros de Sucesso</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Conquiste seu Cargo Público:
            </span>
            <br />
            <span className="text-foreground">
              Otimize cada hora de estudo com o seu Mentor de IA
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Chega de materiais fragmentados. Nosso hub inteligente centraliza todos os seus cursinhos e editais, 
            enquanto a <span className="font-semibold text-foreground">Super Inteligência AC</span> cria um plano de estudos personalizado, 
            encontrando suas fraquezas e focando no que realmente cai na prova.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <a 
              href="#pricing"
              className="group inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-bold text-lg transition-all hover:shadow-lg active:scale-95"
            >
              Crie Sua Conta Gratuita Agora
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a 
              href="#how-it-works"
              className="inline-flex items-center gap-2 border-2 border-border hover:border-primary bg-background hover:bg-muted text-foreground px-8 py-4 rounded-lg font-bold text-lg transition-all"
            >
              Ver Como Funciona
            </a>
          </div>
          
          <div className="pt-12">
            <div className="relative max-w-5xl mx-auto">
              <div className="absolute -inset-4 bg-gradient-hero opacity-20 blur-3xl rounded-3xl" />
              <div className="relative w-full aspect-video rounded-2xl shadow-elegant border border-border bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <div className="w-20 h-20 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <p className="text-lg font-semibold text-foreground">Dashboard do QG do Super AC</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
