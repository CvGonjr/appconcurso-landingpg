const pains = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: "Fragmentação de Materiais",
    description: "Cursinho A, B, C... Você perde horas só para encontrar aquela aula que precisa revisar."
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "Excesso de Matéria",
    description: "Milhares de horas de vídeo e PDFs intermináveis. Por onde começar? O que é prioridade?"
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Dificuldade em Fixar Conteúdo",
    description: "Estudar muito não é o mesmo que aprender. A retenção real exige estratégia."
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Procrastinação e Ansiedade",
    description: "A sobrecarga gera paralisia. Você sabe o que precisa fazer, mas não consegue começar."
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Gestão de Tempo Ineficaz",
    description: "Dias passam, mas você não sente progresso real. Onde foi parar todo aquele tempo?"
  }
];

export default function PainPoints() {
  return (
    <section id="pain-points" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 text-destructive">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-semibold uppercase tracking-wider">O Problema</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold">
              O Caos dos Cursinhos Transformou Sua Missão 
              <br />
              em uma <span className="text-destructive">Batalha Impossível?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Entendemos você. No campo de batalha dos concursos, os verdadeiros "vilões" 
              são a fragmentação de materiais e a sobrecarga de informação.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pains.map((pain, index) => (
              <div 
                key={index} 
                className="p-6 space-y-4 hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-gradient-card border border-border/50 rounded-lg"
              >
                <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center text-destructive">
                  {pain.icon}
                </div>
                <h3 className="text-xl font-semibold">{pain.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{pain.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
