import { EmailCapture } from "../v2/EmailCapture";

export function HeroV6() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 md:py-28 overflow-hidden">
      {/* Professional Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          {/* Left Column - Content (60%) */}
          <div className="md:col-span-3 space-y-8">
            {/* Badge */}
            <div className="inline-block">
              <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold border border-blue-500/30">
                🎯 Método científico comprovado
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
              Você já testou tudo. Agora precisa do que{" "}
              <span className="bg-blue-500 text-white px-3 py-1 rounded-lg font-black shadow-lg">REALMENTE funciona</span>
            </h1>

            {/* Subheadline */}
            <p className="font-body text-xl md:text-2xl text-white/90 leading-relaxed">
              Chega de Apps mirabolantes que prometem e não entregam. 
              O AppConcurso usa ciência (revisão espaçada, IA, analytics) 
              para resultados reais.
            </p>

            {/* Email Capture Form */}
            <div className="max-w-xl">
              <EmailCapture 
                variant="hero" 
                size="large" 
                segment="maduro"
                buttonText="Quero método sério 📊"
              />
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-2 text-white/80">
              <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">Aprovados de 45-59 anos: 180 concurseiros</span>
            </div>
          </div>

          {/* Right Column - Image (40%) */}
          <div className="md:col-span-2">
            <div className="relative">
              {/* Placeholder for actual mockup image */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-futuristic-hover animate-float border border-white/20">
                <div className="aspect-[4/3] bg-gradient-to-br from-white/20 to-white/5 rounded-lg flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="text-6xl">📊</div>
                    <p className="text-white/70 font-body">Método Científico</p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg font-semibold text-sm">
                ✓ Comprovado
              </div>
              <div className="absolute -bottom-4 -left-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg font-semibold text-sm">
                ✓ Eficiente
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
