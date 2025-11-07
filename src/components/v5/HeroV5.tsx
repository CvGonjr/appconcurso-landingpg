import { EmailCapture } from "../v2/EmailCapture";

export function HeroV5() {
  return (
    <section className="relative bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white py-20 md:py-28 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-accent-purple rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-gold rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          {/* Left Column - Content (60%) */}
          <div className="md:col-span-3 space-y-8">
            {/* Badge */}
            <div className="inline-block">
              <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold border-2 border-green-500 shadow-lg">
                👨‍👩‍👧‍👦 Para quem tem responsabilidades
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
              Mãe doente. Filho com febre. Projeto atrasado. E o{" "}
              <span className="bg-green-500 text-white px-3 py-1 rounded-lg font-black shadow-lg">edital?</span>
            </h1>

            {/* Subheadline */}
            <p className="font-body text-xl md:text-2xl text-white/90 leading-relaxed">
              Vida adulta é imprevisível. O AppConcurso cria planos 
              que SE ADAPTAM aos seus imprevistos, sem você perder 
              o ritmo ou sentir culpa.
            </p>

            {/* Email Capture Form */}
            <div className="max-w-xl">
              <EmailCapture 
                variant="hero" 
                size="large" 
                segment="familia"
                buttonText="Quero um plano adaptável 🎯"
              />
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-2 text-white/80">
              <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">450+ pais/mães de família aprovados</span>
            </div>
          </div>

          {/* Right Column - Image (40%) */}
          <div className="md:col-span-2">
            <div className="relative">
              {/* Placeholder for actual mockup image */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-futuristic-hover animate-float border border-white/20">
                <div className="aspect-[4/3] bg-gradient-to-br from-white/20 to-white/5 rounded-lg flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="text-6xl">👨‍👩‍👧</div>
                    <p className="text-white/70 font-body">Flexível & Realista</p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-secondary text-white px-4 py-2 rounded-lg shadow-lg font-semibold text-sm">
                ✓ Flexível
              </div>
              <div className="absolute -bottom-4 -left-4 bg-accent-purple text-white px-4 py-2 rounded-lg shadow-lg font-semibold text-sm">
                ✓ Sem Culpa
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
