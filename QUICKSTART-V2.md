# 🚀 Quick Start - Landing Page V2

## Acessar a nova versão

1. **Iniciar o servidor** (se ainda não estiver rodando):
```bash
npm run dev
```

2. **Acessar no navegador**:
- **Versão Original**: http://localhost:8081/
- **Versão 2 (Nova)**: http://localhost:8081/v2 ⭐

## ✨ Principais Recursos

### 📧 Captura de Emails
- **4 pontos de conversão** na página
- Validação automática
- Feedback visual de sucesso
- Armazenamento em localStorage (demo)

### 🎯 Seções Implementadas

1. ✅ **Header Fixo** - Navegação smooth scroll
2. ✅ **Hero** - Formulário principal + mockup animado
3. ✅ **Dores** - 3 problemas dos concurseiros
4. ✅ **Solução** - 3 pilares (Organização + Método + IA)
5. ✅ **Comparação** - Você hoje vs AppConcurso
6. ✅ **Planos** - Freemium (R$0) + Premium (R$49)
7. ✅ **FAQ** - 6 perguntas frequentes
8. ✅ **CTA Final** - Última chance + Footer

## 🎨 Design

- **Fontes**: Montserrat (headings) + Poppins (body)
- **Cores**: Azul primário, verde secundário, acentos roxo/ouro
- **Animações**: Float, fade-in, glow-pulse
- **100% Responsivo**: Mobile, tablet, desktop

## 📱 Testar Responsividade

### Desktop (> 1024px)
- Grid 3 colunas
- Tabela de comparação
- Hero 60/40

### Tablet (640px - 1024px)
- Grid 2 colunas
- Cards adaptados

### Mobile (< 640px)
- 1 coluna
- Menu hamburger
- Cards empilhados

## 🧪 Testar Funcionalidades

### 1. Formulário de Email
```
1. Preencher com email inválido → Ver erro
2. Preencher com email válido → Submit
3. Aguardar loading → Ver mensagem de sucesso
4. Abrir DevTools → Application → LocalStorage → Verificar "leads"
```

### 2. Navegação
```
1. Clicar "Recursos" no header → Scroll suave para #recursos
2. Clicar "Planos" → Scroll para #planos
3. Clicar "FAQ" → Scroll para #faq
4. Scroll pela página → Ver link ativo mudar
```

### 3. Mobile Menu
```
1. Redimensionar janela < 768px
2. Clicar no ícone hamburger
3. Ver menu expandir
4. Clicar em um link → Menu fecha + scroll
```

## 📂 Estrutura de Arquivos

```
src/
├── components/v2/          ← Todos os componentes V2
│   ├── EmailCapture.tsx    ← Formulário reutilizável
│   ├── NavigationV2.tsx
│   ├── HeroV2.tsx
│   ├── PainPointsV2.tsx
│   ├── SolutionV2.tsx
│   ├── ComparisonV2.tsx
│   ├── PricingV2.tsx
│   ├── FAQV2.tsx
│   ├── FinalCTAV2.tsx
│   └── FooterV2.tsx
└── pages/
    ├── Index.tsx           ← Versão original
    └── IndexV2.tsx         ← Versão nova ⭐
```

## 🔧 Customizar

### Mudar cores
Edite: `tailwind.config.ts`
```typescript
colors: {
  primary: {
    DEFAULT: '#007bff',  // ← Mudar aqui
    dark: '#0056b3',
  }
}
```

### Mudar texto do formulário
Edite qualquer componente:
```tsx
<EmailCapture
  placeholder="Seu melhor email"      // ← Customizar
  buttonText="Garantir meu lugar!"    // ← Customizar
  variant="hero"
  size="large"
/>
```

### Adicionar nova FAQ
Edite: `src/components/v2/FAQV2.tsx`
```typescript
const faqs = [
  {
    question: "Sua pergunta?",
    answer: "Sua resposta...",
  },
  // ← Adicionar aqui
];
```

## 🎯 Métricas de Conversão

### Onde os leads são capturados?
1. **Hero Section** (principal) - Variant: "hero"
2. **Plano Freemium** - Variant: "pricing"
3. **Plano Premium** - Variant: "pricing"
4. **CTA Final** - Variant: "final"

### Como ver os leads?
```javascript
// No console do navegador:
JSON.parse(localStorage.getItem('leads'))
```

### Limpar leads (teste)
```javascript
// No console do navegador:
localStorage.removeItem('leads')
```

## 🐛 Solução de Problemas

### Página em branco?
```bash
# Verificar erros no terminal
# Verificar console do navegador (F12)
```

### Formulário não funciona?
```bash
# Verificar localStorage está habilitado
# Verificar console para erros JavaScript
```

### Estilos quebrados?
```bash
# Parar o servidor (Ctrl+C)
# Limpar cache e reinstalar
npm install
npm run dev
```

### Porta 8081 em uso?
```bash
# Vite vai automaticamente usar outra porta
# Ou matar o processo:
lsof -ti:8081 | xargs kill -9
```

## 📖 Documentação Completa

Ver `README-V2.md` para documentação detalhada.

## ✅ Checklist de Implementação

- [x] Design system configurado
- [x] Todos os componentes criados
- [x] Responsividade implementada
- [x] Formulários funcionais
- [x] Animações e transições
- [x] Navegação smooth scroll
- [x] Mobile menu
- [x] FAQ accordion
- [x] Prova social
- [x] Badges e highlights
- [x] Google Fonts integradas
- [x] LocalStorage para leads (demo)

## 🚀 Próximos Passos

1. [ ] Criar endpoint backend `/api/leads`
2. [ ] Integrar com serviço de email (Mailchimp/SendGrid)
3. [ ] Adicionar assets reais (logos, mockups)
4. [ ] Configurar Google Analytics / GTM
5. [ ] A/B testing de headlines
6. [ ] Otimizar imagens (WebP)
7. [ ] Deploy para produção

---

**Desenvolvido com ❤️ para máxima conversão**
