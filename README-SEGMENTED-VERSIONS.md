# AppConcurso - Versões Segmentadas por Idade

## 📋 Visão Geral

Este documento descreve as **4 versões segmentadas** da landing page do AppConcurso, cada uma otimizada para uma faixa etária específica de concurseiros, baseada em validação real com usuários.

## 🎯 Estratégia de Segmentação

Baseado em entrevistas com 3 concurseiros de diferentes faixas etárias, identificamos que cada segmento tem **DORES ESPECÍFICAS** e responde melhor a linguagens diferentes.

### Framework de Validação:
- ✅ Entrevistas realizadas (dores mapeadas)
- ✅ Landing pages criadas para teste de interesse
- ⏳ Protótipo pago (próxima fase)

**Objetivo:** Lead generation com taxa de conversão >15% por segmento

---

## 📊 As 4 Personas e Suas Landing Pages

### 1️⃣ V3 - Recém-Formados (18-24 anos)

**Rota:** `/jovem`

**Perfil:** Lucas, 22 anos, recém-formado em Direito

**Dor Principal:** "Não sei por onde começar. É muita informação."

**Contexto Emocional:** Ansiedade, insegurança, sobrecarga

**Comportamento:** Compra todos os cursos em promoção, acumula PDFs, nunca organiza

**Mensagem Central:**
- Headline: "Seu primeiro concurso não precisa ser uma bagunça"
- Promessa: Organização automática e orientação clara
- Tom: Amigável, empático, "tô contigo"

**Gatilhos de Conversão:**
- ✅ Simplicidade ("Comece do jeito certo")
- ✅ Orientação ("Seu primeiro concurso guiado")
- ✅ Comunidade ("Você não está sozinho")

**Social Proof:** "✓ Mais de 327 aprovados no primeiro concurso"

**CTA:** "Quero começar do jeito certo ⚡"

---

### 2️⃣ V4 - Jovens Profissionais (25-34 anos)

**Rota:** `/profissional`

**Perfil:** Marina, 29 anos, trabalha e estuda

**Dor Principal:** "Não tenho tempo. Como encaixar estudo na rotina?"

**Contexto Emocional:** Cansaço físico e mental, culpa por não render

**Comportamento:** Acorda 5h, tenta estudar 2h antes do trabalho, chega em casa exausto

**Mensagem Central:**
- Headline: "Você trabalha 8h. Como estudar 3h e não desistir?"
- Promessa: Plano que se adapta aos níveis de energia
- Tom: Eficiente, prático, "otimize seu tempo"

**Gatilhos de Conversão:**
- ✅ Eficiência ("Estude menos, aprenda mais")
- ✅ Adaptabilidade ("Plano que se ajusta à SUA energia")
- ✅ Realismo ("Para quem não tem 8h/dia")

**Social Proof:** "✓ Usado por 1.200+ concurseiros que trabalham"

**CTA:** "Quero estudar sem me matar 💪"

---

### 3️⃣ V5 - Adultos Estabelecidos (35-44 anos)

**Rota:** `/familia`

**Perfil:** Roberto, 38 anos, mudança de carreira

**Dor Principal:** "Tenho família. Como planejar com imprevistos?"

**Contexto Emocional:** Pressão, imprevisibilidade, responsabilidade

**Comportamento:** Planos rígidos que nunca funcionam, frustração constante

**Mensagem Central:**
- Headline: "Mãe doente. Filho com febre. Projeto atrasado. E o edital?"
- Promessa: Plano que se adapta aos imprevistos da vida
- Tom: Compreensivo, realista, "a gente entende"

**Gatilhos de Conversão:**
- ✅ Flexibilidade ("Plano que se adapta à vida real")
- ✅ Maturidade ("Para quem tem responsabilidades")
- ✅ Praticidade ("Menos teoria, mais resultado")

**Social Proof:** "✓ 450+ pais/mães de família aprovados"

**CTA:** "Quero um plano adaptável 🎯"

---

### 4️⃣ V6 - Maduros (45-59 anos)

**Rota:** `/maduro`

**Perfil:** Antônio, 52 anos, última chance de estabilidade

**Dor Principal:** "Investi tudo. Preciso de método que funcione."

**Contexto Emocional:** Urgência, medo de falhar, seriedade

**Comportamento:** Testou tudo, busca método científico comprovado

**Mensagem Central:**
- Headline: "Você já testou tudo. Agora precisa do que REALMENTE funciona"
- Promessa: Método científico sem firulas
- Tom: Direto, técnico, "sem enrolação"

**Gatilhos de Conversão:**
- ✅ Comprovação científica ("Método validado")
- ✅ Seriedade ("Sem firulas, só resultado")
- ✅ ROI ("Cada hora conta")

**Social Proof:** "✓ Aprovados de 45-59 anos: 180 concurseiros"

**CTA:** "Quero método sério 📊"

---

## 🏗️ Estrutura Técnica

### Arquitetura de Componentes

Cada versão (V3, V4, V5, V6) possui:

```
src/
├── components/
│   ├── v3/  (Jovem - 18-24)
│   │   ├── HeroV3.tsx
│   │   ├── PainPointsV3.tsx
│   │   ├── SolutionV3.tsx
│   │   ├── FAQV3.tsx
│   │   └── FinalCTAV3.tsx
│   ├── v4/  (Profissional - 25-34)
│   │   ├── HeroV4.tsx
│   │   ├── PainPointsV4.tsx
│   │   ├── SolutionV4.tsx
│   │   ├── FAQV4.tsx
│   │   └── FinalCTAV4.tsx
│   ├── v5/  (Família - 35-44)
│   │   ├── HeroV5.tsx
│   │   ├── PainPointsV5.tsx
│   │   ├── SolutionV5.tsx
│   │   ├── FAQV5.tsx
│   │   └── FinalCTAV5.tsx
│   └── v6/  (Maduro - 45-59)
│       ├── HeroV6.tsx
│       ├── PainPointsV6.tsx
│       ├── SolutionV6.tsx
│       ├── FAQV6.tsx
│       └── FinalCTAV6.tsx
└── pages/
    ├── IndexV3.tsx  (/jovem)
    ├── IndexV4.tsx  (/profissional)
    ├── IndexV5.tsx  (/familia)
    └── IndexV6.tsx  (/maduro)
```

### Componentes Compartilhados

Alguns componentes são reutilizados em todas as versões:
- ✅ `NavigationV2` - Header fixo
- ✅ `ComparisonV2` - Tabela comparativa
- ✅ `PricingV2` - Seção de preços (com prop `segment`)
- ✅ `FooterV2` - Rodapé
- ✅ `EmailCapture` - Formulário de captura (com prop `segment`)

---

## 🔍 Tracking e Analytics

### Segmentação de Leads

O componente `EmailCapture` foi atualizado para aceitar um prop `segment`:

```typescript
export type EmailCaptureSegment = "jovem" | "profissional" | "familia" | "maduro" | "geral";
```

### Dados Capturados

Cada lead é salvo com:

```typescript
{
  email: string,
  variant: 'hero' | 'pricing' | 'final',
  segment: 'jovem' | 'profissional' | 'familia' | 'maduro',
  timestamp: string
}
```

### Google Tag Manager

Event tracking configurado:

```javascript
dataLayer.push({
  event: 'lead_captured',
  email: 'user@email.com',
  variant: 'hero',
  segment: 'profissional'  // 🆕 Novo campo
});
```

---

## 🚀 Como Usar

### Acessar as Versões

1. **Jovem (18-24):** http://localhost:8081/jovem
2. **Profissional (25-34):** http://localhost:8081/profissional
3. **Família (35-44):** http://localhost:8081/familia
4. **Maduro (45-59):** http://localhost:8081/maduro

### Testar Localmente

```bash
# Instalar dependências (se necessário)
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Servidor inicia em http://localhost:8081
```

### Verificar Leads Capturados

Abra o console do navegador:

```javascript
// Ver todos os leads salvos
JSON.parse(localStorage.getItem('leads'))

// Filtrar por segmento
JSON.parse(localStorage.getItem('leads')).filter(l => l.segment === 'profissional')
```

---

## 📊 Estratégia de Teste A/B

### Fase 1: Descoberta (Semanas 1-2)

**Budget:** R$2.500

**Distribuição:**
- 25% para `/jovem`
- 25% para `/profissional`
- 25% para `/familia`
- 25% para `/maduro`

**Objetivo:** Identificar qual segmento tem melhor conversão

### Fase 2: Otimização (Semanas 3-4)

**Budget:** R$2.500

**Distribuição:**
- 60% para o segmento com melhor ROI
- 40% distribuído nos outros 3

**Objetivo:** Maximizar leads totais

### KPIs por Segmento

**Meta Geral:** 500 leads em 4 semanas

**Por Landing (se todas performarem igual):**
- 125 leads cada
- CPA: R$10/lead
- Taxa de conversão: >15%

**Expectativa Realista:**
- 1 landing: 40% dos leads (melhor performer)
- 2 landings: 25% cada (medianas)
- 1 landing: 10% (mais fraca)

---

## 🎨 Diferenças Visuais

### V3 - Jovem
- **Cores:** Vibrantes (gold, purple)
- **Ícones:** 📚 (organização), emojis amigáveis
- **Tom Visual:** Moderno, acessível

### V4 - Profissional
- **Cores:** Roxo/azul (energia, eficiência)
- **Ícones:** 💼⚡📊 (trabalho, velocidade)
- **Tom Visual:** Dinâmico, produtivo

### V5 - Família
- **Cores:** Verde/gold (flexibilidade, esperança)
- **Ícones:** 👨‍👩‍👧🔄🗂️ (família, adaptação)
- **Tom Visual:** Compreensivo, realista

### V6 - Maduro
- **Cores:** Azul escuro/cinza (seriedade, profissionalismo)
- **Ícones:** 📊🧪🎓 (ciência, método)
- **Tom Visual:** Sóbrio, profissional

---

## 📝 Copy Diferenciado

### Seção de Dor (Pain Points)

**V3 - Jovem:**
- "Comprei 5 cursos e não sei por onde começar"
- "Baixei 200 PDFs e agora não acho nada"

**V4 - Profissional:**
- "Acordo 5h, trabalho até 18h, volto morto"
- "Plano de estudos não respeita minha energia"

**V5 - Família:**
- "Planejei a semana. Filha ficou doente. Perdido."
- "Não tenho 8h/dia. Tenho 1h aqui, 30min ali."

**V6 - Maduro:**
- "Investi anos e R$30k. Preciso acertar AGORA."
- "Apps 'modernos' com firulas que não servem"

### FAQ Personalizado

Cada versão tem 6 perguntas únicas respondendo às objeções específicas do segmento.

---

## 🔄 Próximas Etapas

### Backend Integration
- [ ] Criar endpoint `/api/leads` (POST)
- [ ] Integrar com banco de dados (Supabase/Firebase)
- [ ] Rate limiting (5 submissions/IP/hora)
- [ ] Email marketing integration

### Campanha de Tráfego
- [ ] Configurar Google Ads por segmento
- [ ] Criar Meta Ads com audiences personalizadas
- [ ] Setup de pixels de conversão
- [ ] Heatmaps (Hotjar/Clarity)

### A/B Testing
- [ ] Implementar framework de testes
- [ ] Criar variações de headline
- [ ] Testar CTAs diferentes
- [ ] Otimizar formulários

### Assets Reais
- [ ] Criar logo profissional
- [ ] Screenshots de dashboard
- [ ] Mockups realistas
- [ ] Otimizar imagens (WebP)

---

## 📈 Métricas Esperadas

### Conversão por Segmento

**Previsão Otimista:**
- `/profissional`: 18-22% (maior volume)
- `/familia`: 16-18% (alta qualificação)
- `/jovem`: 12-15% (muitos curiosos)
- `/maduro`: 14-17% (mais cautelosos)

### CPA (Custo por Aquisição)

**Meta:** R$10/lead ou menos

**Aceitável:** Até R$15/lead

**Crítico:** Acima de R$20/lead (reavaliar)

---

## 🛠️ Desenvolvimento

### Tecnologias Usadas

- **React 18.3.1** + TypeScript
- **Vite 5.4.19** (build tool)
- **Tailwind CSS** (styling)
- **shadcn/ui** (components)
- **React Router** (routing)

### Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview

# Linting
npm run lint
```

---

## 📞 Suporte

Dúvidas sobre as versões segmentadas?

- **Email:** dev@appconcurso.com
- **Documentação Técnica:** README-V2.md
- **Guia Rápido:** QUICKSTART-V2.md

---

## 📄 Licença

Propriedade privada - AppConcurso © 2024

---

**Criado em:** Novembro 2024  
**Última Atualização:** Versão inicial das 4 landing pages segmentadas  
**Status:** ✅ Pronto para teste de tráfego
