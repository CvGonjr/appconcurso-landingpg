# Landing Page AppConcurso - Versão 2 (MVP Lead Generation)

## 📋 Visão Geral

Esta é a **versão alternativa** da landing page do AppConcurso, desenvolvida com foco em **conversão e captura de leads** para a lista de espera do produto.

## 🎯 Objetivo

- **Meta de conversão**: >15% de visitantes em leads
- **Foco**: Lead generation (captura de emails)
- **Público-alvo**: Concurseiros de 20-45 anos que usam múltiplos cursinhos

## 🚀 Como Acessar

### Versão Original
- URL: `http://localhost:8081/`
- Página completa atual do projeto

### Versão 2 (Alternativa)
- URL: `http://localhost:8081/v2`
- Nova landing page focada em conversão

## 📐 Estrutura da Landing Page V2

A landing page está dividida em **8 seções estratégicas**:

### 1. **Navigation** (Header Fixo)
- Sticky header com sombra ao scroll
- Links âncora com smooth scroll
- Highlight da seção ativa
- Menu responsivo mobile (hamburger)
- Componente: `NavigationV2.tsx`

### 2. **Hero Section**
- Layout 60% texto / 40% mockup
- Badge de "Acesso antecipado"
- Headline impactante sobre os "10 cursinhos"
- Formulário de captura de email inline
- Prova social (847 concurseiros)
- Mockup animado do dashboard
- Componente: `HeroV2.tsx`

### 3. **Pain Points** (Seção de Dor)
- 3 cards destacando problemas dos concurseiros:
  - PDFs perdidos em múltiplos apps
  - Redação sem feedback
  - Planos genéricos que não funcionam
- Componente: `PainPointsV2.tsx`

### 4. **Solution** (3 Pilares)
- **Pilar 1**: Organize tudo (Freemium)
- **Pilar 2**: Estude com ciência (Premium)
- **Pilar 3**: Corrija com IA 🆕 (Novidade)
- Cards com ícones, badges e mockups
- Componente: `SolutionV2.tsx`

### 5. **Comparison** (Tabela Comparativa)
- "Você hoje" vs "AppConcurso"
- 6 pontos de comparação
- Responsiva (tabela em desktop, cards em mobile)
- Componente: `ComparisonV2.tsx`

### 6. **Pricing** (Planos)
- **Freemium**: R$ 0/mês (grátis para sempre)
- **Premium**: R$ 49/mês (50% OFF para lista de espera)
- Formulários de captura integrados
- Componente: `PricingV2.tsx`

### 7. **FAQ** (Perguntas Frequentes)
- 6 perguntas/respostas
- Accordion com animação suave
- Responde principais objeções
- Componente: `FAQV2.tsx`

### 8. **Final CTA + Footer**
- CTA com gradiente azul escuro
- Último formulário de captura
- Footer minimalista com links e redes sociais
- Componentes: `FinalCTAV2.tsx` e `FooterV2.tsx`

## 🎨 Design System

### Cores
- **Primary**: Azul (#007bff, #0056b3, #4da3ff)
- **Secondary**: Verde (#00c853, #00e676)
- **Accent**: Ouro (#ffd700), Roxo (#9c27b0)

### Tipografia
- **Headings**: Montserrat (800, 700, 600)
- **Body**: Poppins (400, 500, 600)

### Sombras
- `futuristic`: 0 5px 15px rgba(0, 0, 0, 0.08)
- `futuristic-hover`: 0 8px 20px rgba(0, 0, 0, 0.15)

### Animações
- `float`: Animação flutuante (3s)
- `fade-in`: Fade in com translate Y
- `glow-pulse`: Pulso de brilho

## 🔧 Componentes Principais

### EmailCapture (Reutilizável)
**Arquivo**: `src/components/v2/EmailCapture.tsx`

**Props**:
- `variant`: "hero" | "pricing" | "final"
- `placeholder`: string
- `buttonText`: string
- `size`: "default" | "large"

**Funcionalidades**:
- Validação de email em tempo real (regex)
- Estados: loading, success, error
- Armazena leads no localStorage
- Event tracking para GTM (Google Tag Manager)
- Feedback visual de sucesso

**Uso**:
```tsx
<EmailCapture
  variant="hero"
  size="large"
  placeholder="seu@email.com"
  buttonText="Quero acesso antecipado ⚡"
/>
```

## 📱 Responsividade

### Breakpoints
- **Mobile**: < 640px (1 coluna, menu hamburger)
- **Tablet**: 640px - 1024px (2 colunas)
- **Desktop**: > 1024px (3 colunas, layout completo)

### Ajustes Mobile
- Hero: Stack vertical (texto > imagem)
- Cards: 1 coluna
- Tabela: Cards empilhados
- Planos: Stack vertical
- Navigation: Hamburger menu

## 🎯 Conversão & Tracking

### Pontos de Captura de Email
1. **Hero Section** (principal)
2. **Plano Freemium** (card)
3. **Plano Premium** (card)
4. **CTA Final** (última chance)

### Armazenamento
- **LocalStorage**: Temporário (demonstração)
- **Estrutura**:
```json
{
  "email": "usuario@email.com",
  "variant": "hero",
  "timestamp": "2025-11-05T10:30:00Z"
}
```

### Google Tag Manager
Event tracking automático:
```javascript
window.dataLayer.push({
  event: "lead_captured",
  email: "usuario@email.com",
  variant: "hero"
});
```

## 🚀 Performance

### Otimizações Implementadas
- ✅ Lazy loading de componentes
- ✅ Fontes preload (Montserrat + Poppins)
- ✅ Animações CSS otimizadas
- ✅ Smooth scroll nativo
- ✅ Componentes reutilizáveis

### Métricas Alvo
- **Bundle size**: < 300KB (initial load)
- **Load time**: < 3 segundos
- **Lighthouse Score**: > 90

## 📦 Arquivos Criados

### Componentes V2
```
src/components/v2/
├── EmailCapture.tsx       # Formulário reutilizável
├── NavigationV2.tsx       # Header fixo
├── HeroV2.tsx            # Seção hero
├── PainPointsV2.tsx      # Cards de dor
├── SolutionV2.tsx        # 3 pilares
├── ComparisonV2.tsx      # Tabela comparativa
├── PricingV2.tsx         # Planos
├── FAQV2.tsx             # Perguntas frequentes
├── FinalCTAV2.tsx        # CTA final
└── FooterV2.tsx          # Footer
```

### Páginas
```
src/pages/
└── IndexV2.tsx           # Página principal V2
```

### Configuração
```
tailwind.config.ts        # Design system atualizado
index.html                # Google Fonts adicionadas
```

## 🔄 Próximos Passos

### Fase 1: Validação (Concluída ✅)
- [x] Estrutura completa
- [x] Componentes funcionais
- [x] Design responsivo
- [x] Formulários de captura

### Fase 2: Integração Backend
- [ ] Criar API endpoint `/api/leads`
- [ ] Integração com banco de dados (Supabase/Firebase)
- [ ] Email marketing (Mailchimp/SendGrid)
- [ ] Rate limiting (proteção contra spam)

### Fase 3: Otimização
- [ ] A/B testing de headlines
- [ ] Heatmap (Hotjar/Microsoft Clarity)
- [ ] Analytics detalhado
- [ ] Otimização de conversão baseada em dados

### Fase 4: Assets
- [ ] Logo AppConcurso (SVG)
- [ ] Mockups reais do dashboard
- [ ] Screenshots de features
- [ ] Imagens otimizadas (WebP)

## 🧪 Como Testar

### 1. Acessar a landing page
```bash
npm run dev
# Acesse: http://localhost:8081/v2
```

### 2. Testar captura de email
- Preencher formulário em qualquer seção
- Verificar validação (email inválido)
- Submeter email válido
- Verificar mensagem de sucesso
- Inspecionar localStorage: `leads`

### 3. Testar navegação
- Clicar em links do header
- Verificar smooth scroll
- Testar menu mobile (< 768px)
- Verificar highlight de seção ativa

### 4. Testar responsividade
- Redimensionar janela
- Testar em diferentes dispositivos
- Verificar breakpoints (640px, 1024px)

## 📊 Diferenças vs Versão Original

| Aspecto | Versão Original | Versão 2 (V2) |
|---------|-----------------|---------------|
| **Foco** | Apresentação do produto | Lead generation |
| **CTAs** | Genéricos | 4 pontos de captura |
| **Estrutura** | 10 seções | 8 seções otimizadas |
| **Copywriting** | Descritivo | Conversão (dor > solução) |
| **Formulários** | Nenhum | 4 formulários inline |
| **Prova Social** | Básica | 847 concurseiros + avatares |
| **Planos** | 2 opções | Freemium + Premium (50% OFF) |
| **Novidade** | Não destacada | "Correção IA" com badge 🆕 |

## 💡 Dicas de Uso

### Para Desenvolvedores
- Use `EmailCapture` em qualquer lugar que precise capturar emails
- Customize cores no `tailwind.config.ts`
- Adicione novas seções seguindo o padrão V2
- Mantenha componentes na pasta `src/components/v2/`

### Para Designers
- Mockups devem seguir as cores do design system
- Usar gradientes e sombras definidos
- Manter consistência de espaçamento (múltiplos de 4px)
- Ícones Lucide React (já instalado)

### Para Product Managers
- Monitore taxa de conversão por variante (hero, pricing, final)
- A/B test diferentes headlines
- Ajuste copy baseado em feedback
- Priorize otimização dos pontos de maior tráfego

## 📞 Suporte

Para dúvidas ou problemas:
1. Verificar documentação acima
2. Inspecionar erros no console do navegador
3. Verificar logs do terminal de desenvolvimento
4. Consultar código dos componentes V2

---

**Desenvolvido com foco em conversão** 🚀  
**Stack**: React + TypeScript + Tailwind CSS + shadcn/ui
