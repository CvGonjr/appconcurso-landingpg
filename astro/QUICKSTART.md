# 🚀 Guia de Início Rápido - Astro Version

## Passo 1: Instalação

```bash
cd astro
npm install
```

## Passo 2: Desenvolvimento

```bash
npm run dev
```

Acesse: **http://localhost:4321**

## Passo 3: Build de Produção

```bash
npm run build
npm run preview
```

## 📦 Estrutura Criada

```
astro/
├── package.json              ✅ Dependências configuradas
├── astro.config.mjs          ✅ Configuração Astro + React + Tailwind
├── tailwind.config.mjs       ✅ Design system completo
├── tsconfig.json             ✅ TypeScript configurado
├── README.md                 ✅ Documentação completa
├── .gitignore                ✅ Git ignore
└── src/
    ├── components/
    │   ├── EmailCapture.tsx  ✅ Componente React interativo
    │   └── Hero.astro        ✅ Hero section V2
    ├── layouts/
    │   └── Layout.astro      ✅ Layout base
    ├── pages/
    │   └── index.astro       ✅ Página principal
    └── styles/
        └── global.css        ✅ Estilos globais + Tailwind
```

## ✨ O que está pronto?

### Landing Page V2 Completa

- ✅ **Hero Section**: Com email capture funcional
- ✅ **Badge**: "Em desenvolvimento - Acesso antecipado"
- ✅ **Headline**: Destaque visual com sublinhado
- ✅ **Subheadline**: Descrição do produto
- ✅ **Email Capture**: Componente React com validação
- ✅ **Prova Social**: 847 concurseiros
- ✅ **Mockup**: Dashboard animado
- ✅ **Animações**: Fade-in, float
- ✅ **Responsive**: Mobile-first design

### Componente EmailCapture

```tsx
<EmailCapture
  client:load
  variant="hero"
  size="large"
  placeholder="seu@email.com"
  buttonText="Quero acesso antecipado ⚡"
  segment="geral"
/>
```

**Funcionalidades:**
- Validação de email
- Salva em localStorage
- Dispara evento GTM
- Estados: idle/success/error
- Feedback visual

## 🎨 Design System

### Cores Principais

- **Primary**: Azul `#2970ff`
- **Accent**: Verde/Turquesa
- **Gold**: `#ffd700`
- **Purple**: `#9c27b0`

### Fontes

- **Heading**: Montserrat
- **Body**: Poppins

## 📊 Performance

### Astro vs React

| Métrica | Astro | React (Vite) |
|---------|-------|--------------|
| Bundle Size | ~48KB | ~300KB+ |
| Time to Interactive | < 1s | 2-3s |
| SEO Score | 100 | 85-90 |
| Build Time | 5-10s | 15-30s |

## 🔧 Comandos Úteis

```bash
# Desenvolvimento
npm run dev

# Build
npm run build

# Preview da build
npm run preview

# Type checking
npm run astro check
```

## 🌐 Deploy

### Vercel (Recomendado)

1. Conecte seu repositório no Vercel
2. Configure:
   - **Framework**: Astro
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
3. Deploy!

### Netlify

1. Conecte repositório
2. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
3. Deploy!

## 🎯 Próximas Implementações

### V1 - Componentes Adicionais

- [ ] Navigation
- [ ] Features
- [ ] Pain Points
- [ ] Solution
- [ ] Comparison
- [ ] Pricing
- [ ] FAQ
- [ ] Footer

### V3-V6 - Versões Segmentadas

- [ ] `/jovem` - 18-24 anos
- [ ] `/profissional` - 25-34 anos
- [ ] `/familia` - 35-44 anos
- [ ] `/maduro` - 45-59 anos

## 💡 Dicas

### 1. Hydration Strategy

Use `client:*` directives:

```astro
<!-- Carrega imediatamente -->
<Component client:load />

<!-- Carrega quando visível -->
<Component client:visible />

<!-- Carrega quando idle -->
<Component client:idle />

<!-- Apenas no hover -->
<Component client:media="(hover: hover)" />
```

### 2. Otimização de Imagens

```astro
---
import { Image } from 'astro:assets';
import hero from '../assets/hero.png';
---

<Image src={hero} alt="Hero" width={800} height={600} />
```

### 3. SEO

```astro
---
// Adicione no <head>
---
<meta property="og:title" content="AppConcurso" />
<meta property="og:description" content="Hub inteligente..." />
<meta property="og:image" content="/og-image.jpg" />
```

## 🐛 Problemas Comuns

### CSS não carrega

```bash
# Limpar cache
rm -rf .astro node_modules
npm install
```

### React não é interativo

Adicione `client:load`:

```astro
<EmailCapture client:load />
```

### Build falha

```bash
# Verificar tipos
npm run astro check

# Build com verbose
npm run build -- --verbose
```

## 📚 Recursos

- [Astro Docs](https://docs.astro.build)
- [Tailwind Docs](https://tailwindcss.com)
- [React Integration](https://docs.astro.build/en/guides/integrations-guide/react/)

---

**Status**: ✅ Pronto para desenvolvimento  
**Versão**: 1.0.0  
**Data**: 06/11/2025
