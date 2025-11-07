'use client';

import { useState } from 'react';

const rationalFeatures = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Ciclos de Estudo Otimizados",
    description: "Sistemas de revisão espaçada baseados em ciência cognitiva para maximizar retenção."
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Flashcards Dinâmicos",
    description: "Cartões inteligentes que se adaptam ao seu desempenho e priorizam conteúdos que você precisa reforçar."
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Resumos Inteligentes",
    description: "IA cria resumos personalizados dos seus materiais, destacando pontos cruciais."
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    title: "Mapas Mentais",
    description: "Visualização de conexões entre conceitos para facilitar memorização e compreensão."
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    title: "Sugestões de Visualização",
    description: "Recomendações de vídeos e materiais complementares alinhados ao seu estudo."
  }
];

const emotionalFeatures = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Insights Personalizados",
    description: "Análise do seu comportamento de estudo com dicas para melhorar produtividade e bem-estar."
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Radar de Oportunidades",
    description: "Notificações inteligentes sobre editais que combinam com seu perfil e momento de preparo."
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Suporte do QG",
    description: "Comunidade ativa de concurseiros e mentoria para manter você motivado e conectado."
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Treinamento Ininterrupto",
    description: "Acesso ilimitado a simulados, questões e exercícios práticos para testar conhecimento."
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Concursos Pré-Estruturados",
    description: "Base de dados com editais organizados e prontos para você começar imediatamente."
  }
];

export default function Features() {
  const [activeTab, setActiveTab] = useState('rational');

  return (
    <section id="features" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">Arsenal Completo</span>
            <h2 className="text-3xl md:text-5xl font-bold">
              <span className="bg-gradient-hero bg-clip-text text-transparent">Super Inteligência AC:</span>
              <br />
              Desbloqueie Seu Arsenal para a Aprovação
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A Super Inteligência AC age como um mentor virtual completo, otimizando o estudo 
              em dois níveis: o racional (conteúdo) e o emocional (motivação).
            </p>
          </div>
          
          {/* Tab Buttons */}
          <div className="flex gap-2 max-w-md mx-auto">
            <button
              onClick={() => setActiveTab('rational')}
              className={`flex-1 px-6 py-3 rounded-lg font-semibold text-base transition-all ${
                activeTab === 'rational'
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              Pilar Racional
            </button>
            <button
              onClick={() => setActiveTab('emotional')}
              className={`flex-1 px-6 py-3 rounded-lg font-semibold text-base transition-all ${
                activeTab === 'emotional'
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              Pilar Emocional
            </button>
          </div>
          
          {/* Tab Content */}
          <div className="mt-12">
            {activeTab === 'rational' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
                {rationalFeatures.map((feature, index) => (
                  <div 
                    key={index} 
                    className="p-6 space-y-4 hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-card rounded-lg border border-border"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            )}
            
            {activeTab === 'emotional' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
                {emotionalFeatures.map((feature, index) => (
                  <div 
                    key={index} 
                    className="p-6 space-y-4 hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-card rounded-lg border border-border"
                  >
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
