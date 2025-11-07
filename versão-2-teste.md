# PROMPT PARA LOVABLE: Landing Page AppConcurso - MVP Lead Generation

## CONTEXTO DO PROJETO
Você está desenvolvendo a landing page do AppConcurso, um hub inteligente para organização de estudos para concursos públicos. O objetivo é LEAD GENERATION (captura de emails para lista de espera).

**Stack atual:** React + TypeScript + Tailwind CSS + shadcn/ui
**Objetivo:** Conversão >15% de visitantes em leads
**Público:** Concurseiros de 20-45 anos que usam múltiplos cursinhos
**Timeline:** Deploy em 2 semanas

---

## ESTRUTURA COMPLETA DA LANDING PAGE (8 SEÇÕES)

### 1. HEADER (Fixo no topo)
```tsx
- Logo "AppConcurso" (fonte Montserrat, bold, azul primário)
- Menu desktop: Links âncora para #recursos, #planos, #faq
- Botão CTA: "Entrar na Lista VIP" (azul, destaque)
- Menu mobile: Hamburger menu responsivo
- Comportamento: Header fixo com sombra ao scroll
- Z-index: 1000
```

**Requisitos técnicos:**
- Sticky header com `position: fixed`
- Smooth scroll para âncoras
- Highlight do link ativo baseado em scroll position
- Transição suave de sombra ao scroll

---

### 2. HERO SECTION (Acima da dobra - 60vh mínimo)
```tsx
Layout: Duas colunas (60% texto / 40% imagem em desktop, stack em mobile)

COLUNA ESQUERDA:
- Badge/Tag: "🚀 Em desenvolvimento - Acesso antecipado"
- Headline (H1): "Pare de se afogar em PDFs de 10 cursinhos diferentes"
  - Fonte: Montserrat, 3rem, weight 800, cor primária
  - Destaque visual em "10 cursinhos" (cor secundária)
  
- Subheadline: "O AppConcurso é o hub inteligente que centraliza TODO seu material + corrige suas discursivas com IA"
  - Fonte: Poppins, 1.25rem, weight 400, cor texto médio
  
- Formulário de captura inline:
  [Input: placeholder="seu@email.com"] [Botão: "Quero acesso antecipado ⚡"]
  - Input: border sutil, padding generoso, foco com outline azul
  - Botão: Gradiente azul, hover com scale 1.05, loading state
  
- Prova social: "✓ Mais de 847 concurseiros já garantiram acesso"
  - Fonte pequena, ícone check verde, avatares sobrepostos (mockup)

COLUNA DIREITA:
- Imagem/Mockup do dashboard do app
- Formato: PNG com transparência ou SVG
- Efeito: Sombra futurista, leve animação de float (keyframes)
```

**Validações do formulário:**
- Email obrigatório e formato válido (regex)
- Mensagem de erro: "Por favor, insira um email válido"
- Sucesso: Substituir form por "✅ Você está na lista VIP! Confirme seu email."
- POST para `/api/leads` (criar endpoint)

---

### 3. SEÇÃO DE DOR (3 Cards Horizontais)
```tsx
Título da seção: "Por que concurseiros abandonam a preparação?"
Subtítulo: "Não é falta de vontade. É falta de organização."

Layout: Grid 3 colunas em desktop (1 coluna em mobile)

CARD 1:
- Ícone: ❌ (vermelho, 3rem)
- Título: "15 abas, 3 apps, PDFs perdidos"
- Descrição: "Você tem Estratégia, Direção, Gran, QC... onde diabos está aquele resumo de Administrativo?"

CARD 2:
- Ícone: ❌ (vermelho, 3rem)
- Título: "Redação 3.0 e você não sabe o porquê"
- Descrição: "Banca não explica. Professor demora semanas. Você fica no escuro."

CARD 3:
- Ícone: ❌ (vermelho, 3rem)
- Título: "Plano de estudos que nunca funciona"
- Descrição: "Genérico, rígido, feito para um robô. Não se adapta à SUA vida real."
```

**Estilo dos cards:**
- Background: Branco com borda sutil
- Padding: 2rem
- Border-radius: 1rem
- Hover: Sombra mais forte + translate Y(-5px)
- Transição: 0.3s ease

---

### 4. SEÇÃO DE SOLUÇÃO - 3 PILARES (ID: #recursos)
```tsx
Título: "Como o AppConcurso resolve isso?"
Subtítulo: "3 pilares de organização inteligente"

Layout: 3 cards verticais com ícone, título, lista e screenshot

PILAR 1: ORGANIZE TUDO
- Ícone: 🗂️ (4rem, azul)
- Título: "Centralize em 1 só lugar"
- Lista de benefícios:
  • Importa PDFs, vídeos, questões de qualquer cursinho
  • Organização automática por matéria/assunto
  • Busca inteligente: encontre qualquer material em 2 segundos
- Screenshot/Mockup: Interface de organização de materiais
- Badge: "Freemium disponível"

PILAR 2: ESTUDE COM CIÊNCIA
- Ícone: 🧠 (4rem, roxo)
- Título: "Método científico comprovado"
- Lista:
  • Plano adaptado ao SEU edital e rotina
  • Revisões espaçadas (técnica comprovada)
  • Mapas mentais e resumos gerados por IA
- Screenshot: Cronograma inteligente
- Badge: "Premium"

PILAR 3: CORRIJA COM IA 🆕
- Ícone: ✍️ (4rem, verde)
- Título: "Correção de discursivas instantânea"
- Lista:
  • Feedback em 30 segundos (vs. semanas de professor)
  • IA treinada com critérios de Cespe, FCC, FGV
  • Aprenda com análise detalhada de cada erro
- Screenshot: Interface de correção com feedback
- Badge destacado: "🆕 NOVIDADE - Em desenvolvimento"
```

**Layout técnico:**
- Grid 3 colunas (desktop) / 1 coluna (mobile)
- Cards com padding 3rem
- Screenshots com border-radius e sombra
- Badges com cores diferenciadas (azul/roxo/verde)

---

### 5. COMPARAÇÃO (Tabela de Diferencial)
```tsx
Título: "AppConcurso vs. Ferramentas Genéricas"
Subtítulo: "Veja por que concurseiros estão migrando"

Layout: Tabela responsiva 2 colunas

| Você hoje | AppConcurso |
|-----------|-------------|
| 5 ferramentas diferentes (Notion, Trello, Evernote...) | ✅ 1 hub completo especializado |
| Organização manual e demorada | ✅ IA organiza automaticamente |
| Redação sem feedback real | ✅ Correção inteligente instantânea |
| Planos genéricos de internet | ✅ Adaptado ao SEU edital |
| R$200+/mês em múltiplos apps | ✅ R$49/mês tudo incluso |
| Você é só mais um usuário | ✅ Comunidade de concurseiros |
```

**Estilo da tabela:**
- Coluna esquerda: Background cinza claro, ícone ❌
- Coluna direita: Background azul claro, ícone ✅
- Mobile: Cards empilhados ao invés de tabela
- Fonte: 1.1rem, linha de separação sutil

---

### 6. PLANOS (ID: #planos)
```tsx
Título: "Escolha seu plano"
Subtítulo: "Comece grátis. Evolua quando quiser."

Layout: 2 cards lado a lado (stack em mobile)

CARD FREEMIUM:
- Badge: "GRÁTIS PARA SEMPRE"
- Título: "Freemium"
- Preço: "R$ 0/mês"
- Features:
  ✓ Até 3 concursos simultâneos
  ✓ Organização básica de materiais
  ✓ 1 correção de discursiva/mês com IA 🆕
  ✓ Revisões espaçadas manuais
  ✗ Planos personalizados por IA
  ✗ Correções ilimitadas
- CTA: [Input email] [Botão: "Começar grátis"]

CARD PREMIUM (Destacado com borda dourada):
- Badge: "MAIS POPULAR" (dourado)
- Título: "Premium"
- Preço: 
  - Riscado: "R$ 98/mês"
  - Destaque: "R$ 49/mês"
  - Label: "50% OFF - Acesso antecipado"
- Features:
  ✓ Concursos ilimitados
  ✓ Organização automática com IA
  ✓ Correções de discursivas ilimitadas 🆕
  ✓ Planos personalizados adaptativos
  ✓ Mapas mentais gerados por IA
  ✓ Análise preditiva de performance
  ✓ Suporte prioritário
- CTA: [Input email] [Botão: "Garantir 50% OFF"]
- Texto abaixo: "⚡ Oferta válida apenas para lista de espera"
```

**Diferencial visual:**
- Card Premium: Border gradiente, scale 1.05, z-index maior
- Hover nos cards: Leve elevação
- CTAs: Mesma captura de email (reutilizar componente)

---

### 7. FAQ (ID: #faq)
```tsx
Título: "Perguntas frequentes"
Subtítulo: "Tudo que você precisa saber"

Componente: Accordion (shadcn/ui)

Perguntas:

1. "Funciona com meu cursinho [Estratégia, Gran, Direção, etc]?"
   Resposta: "Sim! O AppConcurso é agnóstico de cursinho. Você pode importar PDFs, vídeos e materiais de QUALQUER fonte. Nossa IA organiza automaticamente independente da origem."

2. "A IA realmente corrige melhor que um professor?"
   Resposta: "A IA não substitui um professor, mas oferece feedback instantâneo baseado em critérios objetivos de bancas (Cespe, FCC, FGV). É ideal para prática constante. Você recebe análise em 30 segundos vs. semanas esperando correção."

3. "Vou precisar pagar múltiplos apps?"
   Resposta: "Não. O AppConcurso é seu hub único. Substitui Notion + Trello + Evernote + Apps de revisão + Plataforma de redação. Tudo em um só lugar por R$49/mês (ou grátis na versão Freemium)."

4. "Quando o app sai do papel?"
   Resposta: "Estamos em fase final de desenvolvimento. Quem entrar na lista de espera terá acesso antecipado + 50% de desconto vitalício + 3 correções de IA gratuitas."

5. "Tem aplicativo mobile?"
   Resposta: "Sim! Teremos apps nativos para iOS e Android. Por enquanto, a versão web é 100% responsiva e funciona perfeitamente no navegador do celular."

6. "E se eu não gostar?"
   Resposta: "Versão Freemium é grátis para sempre, sem cartão. No Premium, você pode cancelar a qualquer momento, sem burocracia. Garantia de 7 dias."
```

**Comportamento:**
- Accordion fechado por padrão
- Ícone + / - ao expandir
- Animação suave (framer-motion ou CSS transition)
- Mobile: Full width

---

### 8. CTA FINAL + FOOTER
```tsx
CTA FINAL:
- Background: Gradiente azul escuro
- Texto centralizado (branco):
  - Headline: "Sua aprovação começa aqui"
  - Subheadline: "Junte-se a 847 concurseiros que já garantiram acesso antecipado"
- Formulário: [Email grande] [Botão: "Entrar na lista VIP"]
- Nota: "Sem cartão. Sem compromisso. Apenas concurseiros sérios."

FOOTER (Minimalista):
- Logo AppConcurso (versão monocromática)
- Links: Sobre | Blog | Contato | Política de Privacidade
- Redes sociais: Instagram, YouTube, LinkedIn (ícones)
- Copyright: "© 2025 AppConcurso. Todos os direitos reservados."
- Background: Cinza escuro (#1a1a1a)
- Texto: Cinza claro
```

---

## REQUISITOS TÉCNICOS GLOBAIS

### Design System (Tailwind Config)
```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#007bff',
          dark: '#0056b3',
          light: '#4da3ff'
        },
        secondary: {
          DEFAULT: '#00e676',
          dark: '#00c853',
        },
        accent: {
          gold: '#ffd700',
          purple: '#9c27b0',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'futuristic': '0 5px 15px rgba(0, 0, 0, 0.08)',
        'futuristic-hover': '0 8px 20px rgba(0, 0, 0, 0.15)',
      }
    }
  }
}
```

### Componente Reutilizável: EmailCapture
```tsx
// components/EmailCapture.tsx
interface EmailCaptureProps {
  variant: 'hero' | 'pricing' | 'final';
  placeholder?: string;
  buttonText?: string;
  size?: 'default' | 'large';
}

// Funcionalidades:
// - Validação de email em tempo real
// - Estado de loading ao submeter
// - Mensagem de sucesso/erro
// - POST para /api/leads com { email, variant, timestamp }
// - Event tracking (window.dataLayer.push para GTM)
```

### API Endpoint
```typescript
// Criar arquivo: app/api/leads/route.ts (se usar Next.js)
// OU: src/api/leads.ts (se API Routes do React)

POST /api/leads
Body: { email: string, variant: string, timestamp: string }
Response: { success: boolean, message: string }

// Validações:
// - Email válido (regex)
// - Não duplicar (verificar se já existe)
// - Rate limiting (max 5 submissões/IP/hora)

// Storage: LocalStorage temporário OU Supabase/Firebase
```

### Responsividade
```css
Breakpoints:
- Mobile: < 640px (1 coluna, texto menor, hamburger menu)
- Tablet: 640px - 1024px (2 colunas em algumas seções)
- Desktop: > 1024px (layout completo 3 colunas)

Componentes críticos mobile:
- Header: Hamburger menu
- Hero: Stack (texto em cima, imagem embaixo)
- Cards: 1 coluna
- Tabela comparação: Cards empilhados
- Planos: Stack vertical
```

### Performance
```
- Lazy loading de imagens (React.lazy + Suspense)
- Code splitting por seção
- Fonte: Preload Google Fonts
- Imagens: Formato WebP + fallback PNG
- Bundle size: Máximo 300KB initial load
```

### Acessibilidade
```
- Todos os botões com aria-label
- Formulários com label visível ou aria-label
- Contraste de cores WCAG AA
- Navegação por teclado (Tab)
- Skip to main content link
```

---

## PRIORIZAÇÃO DE DESENVOLVIMENTO

### Fase 1 (Dias 1-3): Core Structure
1. Header + Hero com formulário funcional
2. Seção de Dor (3 cards)
3. Seção de Solução (3 pilares)
4. Footer básico

### Fase 2 (Dias 4-5): Conversão
5. Tabela de comparação
6. Planos (Freemium vs Premium)
7. FAQ (Accordion)
8. CTA Final

### Fase 3 (Dias 6-7): Otimização
9. Responsividade completa
10. Animações e micro-interações
11. API de captura de leads
12. Testes de validação

---

## ASSETS NECESSÁRIOS

Solicite ao time ou crie placeholders para:
- [ ] Logo AppConcurso (SVG, versões colorida e monocromática)
- [ ] Mockup do dashboard (PNG transparente, ~800px width)
- [ ] Screenshot: Interface de organização
- [ ] Screenshot: Cronograma inteligente
- [ ] Screenshot: Interface de correção com IA
- [ ] Ícones para pilares (podem ser emojis ou Lucide icons)
- [ ] Avatares para prova social (usar UI Avatars ou similar)

---

## RESULTADO ESPERADO

Ao final, a landing page deve:
✅ Carregar em < 3 segundos
✅ Converter > 15% dos visitantes em leads
✅ Ser 100% responsiva (mobile-first)
✅ Ter formulário funcional capturando emails
✅ Comunicar claramente os 3 pilares (Organização + Método + IA)
✅ Destacar "Correção de discursivas com IA" como diferencial
✅ Oferecer Freemium claro com upgrade path

---

## COMANDOS PARA LOVABLE

Copie e cole este prompt no Lovable e adicione:

"Por favor, implemente esta landing page seguindo a estrutura exata descrita acima. Priorize:
1. Conversão (formulários funcionais em 3 pontos)
2. Clareza (3 pilares muito visíveis)
3. Mobile-first (responsividade perfeita)
4. Performance (lazy loading, otimização)

Comece pela Fase 1 e me mostre o resultado antes de avançar para Fase 2."