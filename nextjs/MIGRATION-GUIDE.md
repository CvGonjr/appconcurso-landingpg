# 🎯 Guia de Migração: React → Next.js

Este documento explica como migrar os componentes restantes do React/Vite para Next.js.

## 📋 Checklist de Componentes

- [x] **Navigation** - ✅ Migrado
- [x] **Hero** - ✅ Migrado
- [x] **PainPoints** - ✅ Migrado
- [x] **Solution** - ✅ Migrado
- [ ] **HowItWorks** - ⏳ Pendente
- [ ] **Features** - ⏳ Pendente
- [ ] **Pricing** - ⏳ Pendente
- [ ] **FAQ** - ⏳ Pendente
- [ ] **FinalCTA** - ⏳ Pendente
- [ ] **Footer** - ⏳ Pendente

## 🔄 Regras de Migração

### 1. Remover Dependências UI

❌ **Não funciona** (shadcn/ui components):
```tsx
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion } from "@/components/ui/accordion";
```

✅ **Substitua por** HTML + Tailwind:
```tsx
// Button
<button className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg">
  Texto
</button>

// Card
<div className="bg-card border border-border rounded-lg p-6 shadow-card">
  Conteúdo
</div>
```

### 2. Remover Ícones Lucide

❌ **Não funciona**:
```tsx
import { ArrowRight, Sparkles } from "lucide-react";
<ArrowRight className="w-5 h-5" />
```

✅ **Substitua por** SVG inline:
```tsx
<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
</svg>
```

### 3. Adicionar 'use client' quando necessário

Se o componente usa hooks (`useState`, `useEffect`, event handlers), adicione no topo:

```tsx
'use client';

import { useState } from 'react';

export default function MeuComponente() {
  const [state, setState] = useState(false);
  // ...
}
```

### 4. Remover Imports de Assets

❌ **Não funciona**:
```tsx
import dashboardHero from "@/assets/dashboard-hero.png";
<img src={dashboardHero} />
```

✅ **Substitua por**:
```tsx
// Coloque a imagem em nextjs/public/dashboard-hero.png
<img src="/dashboard-hero.png" alt="Dashboard" />

// Ou use Next.js Image (recomendado)
import Image from 'next/image';
<Image src="/dashboard-hero.png" alt="Dashboard" width={1200} height={800} />
```

## 📝 Exemplo Prático: Migrando FAQ

### Código React Original

```tsx
// src/components/landing/FAQ.tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Pergunta 1?",
    answer: "Resposta 1"
  }
];

export const FAQ = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <Accordion type="single" collapsible>
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
```

### Código Next.js Migrado

```tsx
// nextjs/src/components/FAQ.tsx
'use client';

import { useState } from 'react';

const faqs = [
  {
    question: "Pergunta 1?",
    answer: "Resposta 1"
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left px-6 py-4 font-semibold hover:bg-muted transition-colors flex justify-between items-center"
              >
                {faq.question}
                <svg 
                  className={`w-5 h-5 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-muted-foreground">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

## 🎨 Componentes UI Comuns

### Button

```tsx
// Primary
<button className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition-all hover:shadow-lg active:scale-95">
  Texto
</button>

// Outline
<button className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg font-semibold transition-all">
  Texto
</button>

// Secondary
<button className="bg-secondary hover:bg-secondary/80 text-foreground px-6 py-3 rounded-lg font-semibold transition-all">
  Texto
</button>
```

### Card

```tsx
<div className="bg-card border border-border rounded-lg p-6 shadow-card hover:shadow-elegant transition-all hover:-translate-y-1">
  <h3 className="text-xl font-semibold mb-3">Título</h3>
  <p className="text-muted-foreground">Conteúdo</p>
</div>
```

### Badge

```tsx
<div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
  Texto do Badge
</div>
```

### Tabs (Features)

```tsx
'use client';

import { useState } from 'react';

export default function Features() {
  const [activeTab, setActiveTab] = useState('rational');

  return (
    <section id="features" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Tab Buttons */}
        <div className="flex gap-2 max-w-md mx-auto mb-12">
          <button
            onClick={() => setActiveTab('rational')}
            className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'rational'
                ? 'bg-primary text-white'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            Pilar Racional
          </button>
          <button
            onClick={() => setActiveTab('emotional')}
            className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'emotional'
                ? 'bg-primary text-white'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            Pilar Emocional
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'rational' && (
          <div className="grid md:grid-cols-3 gap-6">
            {/* Features cards */}
          </div>
        )}
        
        {activeTab === 'emotional' && (
          <div className="grid md:grid-cols-3 gap-6">
            {/* Features cards */}
          </div>
        )}
      </div>
    </section>
  );
}
```

## ✅ Checklist de Migração por Componente

### HowItWorks
- [ ] Copiar código de `src/components/landing/HowItWorks.tsx`
- [ ] Remover imports de `lucide-react`
- [ ] Substituir `<User>`, `<Zap>`, `<Target>` por SVG
- [ ] Remover `Card` component
- [ ] Adicionar `id="how-it-works"` na section
- [ ] Testar no navegador

### Features
- [ ] Copiar código de `src/components/landing/Features.tsx`
- [ ] Adicionar `'use client'` no topo
- [ ] Criar state `const [activeTab, setActiveTab] = useState('rational')`
- [ ] Substituir `<Tabs>` por botões customizados
- [ ] Remover todos os ícones Lucide por SVG
- [ ] Remover `Card` component
- [ ] Testar troca de tabs

### Pricing
- [ ] Copiar código de `src/components/landing/Pricing.tsx`
- [ ] Remover imports de `Button`, `Card`
- [ ] Substituir `<Check>` e `<X>` por SVG
- [ ] Criar botões customizados
- [ ] Adicionar `id="pricing"` na section
- [ ] Testar responsividade

### FAQ
- [ ] Copiar código de `src/components/landing/FAQ.tsx`
- [ ] Adicionar `'use client'` no topo
- [ ] Criar accordion customizado (exemplo acima)
- [ ] Adicionar `id="faq"` na section
- [ ] Testar animação de abrir/fechar

### FinalCTA
- [ ] Copiar código de `src/components/landing/FinalCTA.tsx`
- [ ] Remover imports de `Button`
- [ ] Substituir ícones por SVG
- [ ] Criar botões customizados
- [ ] Manter gradient background

### Footer
- [ ] Copiar código de `src/components/landing/Footer.tsx`
- [ ] Remover imports de ícones sociais
- [ ] Substituir por SVG ou usar links simples
- [ ] Ajustar links

## 🚀 Testando

Após cada migração:

```bash
cd nextjs
npm run dev
```

Acesse http://localhost:3000 e verifique:
- ✅ Componente renderiza corretamente
- ✅ Estilos aplicados (cores, espaçamento)
- ✅ Hover effects funcionam
- ✅ Mobile responsivo
- ✅ Smooth scroll funciona (para links âncora)

## 🐛 Problemas Comuns

### "Module not found: Can't resolve '@/components/ui/...'"
➜ Remova os imports de shadcn/ui components

### "Unexpected token 'export'"
➜ Adicione `'use client'` no topo do arquivo

### "Cannot find module 'lucide-react'"
➜ Substitua ícones por SVG inline

### Componente não aparece
➜ Verifique se importou e adicionou no `page.tsx`

## 📚 Recursos Úteis

- [Heroicons](https://heroicons.com/) - Ícones SVG prontos
- [Tailwind Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet)
- [Next.js Documentation](https://nextjs.org/docs)

---

**Última Atualização**: Novembro 2025
