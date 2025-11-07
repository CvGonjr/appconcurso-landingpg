export default function Solution() {
  return (
    <section id="solution" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 text-primary">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              <span className="text-sm font-semibold uppercase tracking-wider">A Solução</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold">
              É por isso que criamos o 
              <span className="bg-gradient-hero bg-clip-text text-transparent"> AppConcurso</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              O AppConcurso é a sua resposta definitiva à fragmentação. Atuamos como seu{" "}
              <span className="font-semibold text-foreground">"Cérebro Organizacional"</span>, e nossa{" "}
              <span className="font-semibold text-foreground">Super Inteligência AC</span> é um mentor virtual 
              completo que guia você do zero até a aprovação.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 pt-8">
            <div className="flex flex-col items-center text-center space-y-4 p-6 bg-card rounded-xl border border-border shadow-card">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Centralização Total</h3>
              <p className="text-muted-foreground">
                Todos os seus cursinhos, editais e materiais em um único lugar organizado.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center space-y-4 p-6 bg-card rounded-xl border border-border shadow-card">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">IA Personalizada</h3>
              <p className="text-muted-foreground">
                Plano de estudos adaptado às suas necessidades e pontos fracos específicos.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center space-y-4 p-6 bg-card rounded-xl border border-border shadow-card">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Foco no que Importa</h3>
              <p className="text-muted-foreground">
                Identifique e trabalhe exatamente no que cai na prova, sem dispersão.
              </p>
            </div>
          </div>
          
          <div className="text-center pt-8">
            <a
              href="#pricing"
              className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-bold text-lg transition-all hover:shadow-lg active:scale-95"
            >
              Comece Grátis Agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
