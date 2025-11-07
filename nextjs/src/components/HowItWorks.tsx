const steps = [
  {
    number: "01",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: "Construa Seu Perfil de Herói",
    description: "Cadastre seus concursos-alvo, organize seus materiais de todos os cursinhos e defina suas metas. Simples e rápido."
  },
  {
    number: "02",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Ative Sua Super Inteligência AC",
    description: "Nossa IA analisa seu perfil, identifica lacunas de conhecimento e cria um plano de estudos personalizado e otimizado."
  },
  {
    number: "03",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Execute a Missão e Monitore o Progresso",
    description: "Siga seu ciclo de estudos, use flashcards dinâmicos, resumos inteligentes e acompanhe sua evolução em tempo real."
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Como Funciona</span>
            <h2 className="text-3xl md:text-5xl font-bold">
              Alcance a Aprovação em <span className="text-accent">3 Passos Simples</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting Lines - Desktop only */}
            <div className="hidden md:block absolute top-24 left-1/6 right-1/6 h-0.5 bg-gradient-hero -z-10" 
                 style={{ width: '66%', left: '16.6%' }} />
            
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="relative p-8 space-y-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-card rounded-lg border border-border"
              >
                <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg">
                  {step.number}
                </div>
                
                <div className="pt-4">
                  <div className="w-16 h-16 bg-gradient-card rounded-xl flex items-center justify-center mb-6 text-primary">
                    {step.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
