# AppConcurso - Astro Version

Versão da landing page do AppConcurso construída com **Astro** para máxima performance e SEO.

## 🚀 Stack Tecnológica

- **Astro 4.0** - Framework moderno para sites estáticos
- **React 18** - Componentes interativos (hydration parcial)
- **Tailwind CSS 3.4** - Estilização utilitária
- **TypeScript** - Type safety

## 📁 Estrutura do Projeto

```
astro/
├── src/
│   ├── components/
│   │   ├── EmailCapture.tsx      # Componente React interativo
│   │   └── Hero.astro             # Hero section (V2)
│   ├── layouts/
│   │   └── Layout.astro           # Layout base
│   ├── pages/
│   │   └── index.astro            # Página principal (V2)
│   └── styles/
│       └── global.css             # Estilos globais
├── public/                         # Assets estáticos
├── astro.config.mjs               # Configuração do Astro
├── tailwind.config.mjs            # Configuração do Tailwind
├── tsconfig.json                  # Configuração TypeScript
└── package.json
```

## 🛠️ Instalação

```bash
cd astro
npm install
```

## 💻 Desenvolvimento

```bash
npm run dev
```

Servidor local: `http://localhost:4321`

## 🏗️ Build para Produção

```bash
npm run build
```

Saída gerada em: `dist/`

## 📦 Preview da Build

```bash
npm run preview
```

## ✨ Recursos Implementados

### V2 - Landing Page Principal

- ✅ Hero section com email capture
- ✅ Badge de "Em desenvolvimento"
- ✅ Headline destacado com sublinhado
- ✅ Subheadline explicativo
- ✅ Formulário de captura de email interativo
- ✅ Prova social (847 concurseiros)
- ✅ Mockup do dashboard (placeholder)
- ✅ Animações suaves (fade-in, float)
- ✅ Responsive design (mobile-first)
- ✅ LocalStorage para leads
- ✅ Google Tag Manager ready

### Componente EmailCapture (React)

**Props:**
- `variant`: 'hero' | 'pricing' | 'final'
- `size`: 'large' | 'medium' | 'small'
- `placeholder`: string
- `buttonText`: string
- `segment`: 'jovem' | 'profissional' | 'familia' | 'maduro' | 'geral'

**Funcionalidades:**
- ✅ Validação de email
- ✅ Feedback visual (success/error)
- ✅ Salva em localStorage
- ✅ Dispara evento GTM
- ✅ Estados de UI (idle/success/error)
- ✅ Hydration parcial (`client:load`)

## 🎨 Design System

### Cores

```javascript
primary: {
  DEFAULT: 'hsl(212, 85%, 45%)',  // Azul principal
  dark: '#0056b3',                 // Azul escuro
  light: '#4da3ff',                // Azul claro
}

accent: {
  DEFAULT: 'hsl(172, 70%, 45%)',  // Verde/turquesa
  gold: '#ffd700',                 // Dourado
  purple: '#9c27b0',               // Roxo
}
```

### Tipografia

- **Headings**: Montserrat (400, 600, 700, 800, 900)
- **Body**: Poppins (300, 400, 500, 600, 700)

### Animações

- `animate-fade-in`: Fade in com translateY
- `animate-fade-in-up`: Fade in com mais movimento
- `animate-float`: Flutuação suave (3s loop)

## 🔄 Diferenças vs React Version

### Vantagens do Astro:

1. **Performance**: Zero JS enviado ao cliente (exceto componentes interativos)
2. **SEO**: HTML gerado estaticamente
3. **Build Size**: ~95% menor que versão React
4. **TTI (Time to Interactive)**: Instantâneo
5. **Hydration Parcial**: Apenas EmailCapture é interativo

### Quando Usar Astro:

- ✅ Landing pages estáticas
- ✅ Sites com muito conteúdo
- ✅ Foco em SEO e performance
- ✅ Baixa interatividade

### Quando Usar React (Vite):

- ✅ Dashboards interativos
- ✅ SPAs complexas
- ✅ Autenticação e rotas protegidas
- ✅ Alta interatividade

## 📊 Métricas de Performance

### Lighthouse Score (Esperado)

- **Performance**: 100
- **Accessibility**: 95+
- **Best Practices**: 100
- **SEO**: 100

### Bundle Size

- **HTML**: ~15KB (gzipped)
- **CSS**: ~8KB (gzipped)
- **JS**: ~25KB (apenas EmailCapture)

**Total**: ~48KB vs ~300KB+ (React SPA)

## 🚀 Deploy

### Vercel

```bash
npm run build
vercel --prod
```

### Netlify

```bash
npm run build
netlify deploy --prod --dir=dist
```

### Cloudflare Pages

```bash
npm run build
# Upload dist/ para Cloudflare Pages
```

## 📝 Próximos Passos

### V1 - Implementar

- [ ] Criar componentes adicionais
- [ ] Features section
- [ ] Pain Points section
- [ ] Solution section
- [ ] Pricing section
- [ ] FAQ section
- [ ] Footer

### V3-V6 - Versões Segmentadas

- [ ] Criar páginas `/jovem`, `/profissional`, `/familia`, `/maduro`
- [ ] Adaptar componentes para cada persona
- [ ] Implementar tracking por segmento

### Otimizações

- [ ] Image optimization (Astro Image)
- [ ] Lazy loading de componentes
- [ ] Prefetch de páginas
- [ ] Service Worker para cache
- [ ] Critical CSS inline

## 🐛 Troubleshooting

### Erro: "Module not found"

```bash
rm -rf node_modules package-lock.json
npm install
```

### Tailwind não funciona

```bash
# Verificar se o Astro integration está instalado
npm install @astrojs/tailwind
```

### React component não é interativo

```astro
<!-- Adicionar client directive -->
<EmailCapture client:load />
```

## 📚 Referências

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [React Integration](https://docs.astro.build/en/guides/integrations-guide/react/)

---

**Versão**: 1.0.0  
**Última atualização**: 06/11/2025  
**Status**: ✅ Em desenvolvimento
