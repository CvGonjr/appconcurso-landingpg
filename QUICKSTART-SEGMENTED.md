# Guia Rápido - Versões Segmentadas

## 🚀 Início Rápido

### Acessar as Versões

```bash
# Iniciar servidor
npm run dev

# Acessar as páginas
http://localhost:8081/jovem         # V3 - 18-24 anos
http://localhost:8081/profissional  # V4 - 25-34 anos
http://localhost:8081/familia       # V5 - 35-44 anos
http://localhost:8081/maduro        # V6 - 45-59 anos
```

---

## 📊 Tabela Comparativa Rápida

| Aspecto | V3 - Jovem | V4 - Profissional | V5 - Família | V6 - Maduro |
|---------|------------|-------------------|--------------|-------------|
| **Rota** | `/jovem` | `/profissional` | `/familia` | `/maduro` |
| **Idade** | 18-24 anos | 25-34 anos | 35-44 anos | 45-59 anos |
| **Dor Principal** | Não sei começar | Sem tempo | Imprevistos | Precisa funcionar |
| **Tom** | Amigável | Eficiente | Compreensivo | Técnico |
| **Cores** | Gold/Purple | Purple/Blue | Green/Gold | Gray/Blue |
| **Social Proof** | 327 aprovados | 1.200+ usuários | 450 pais/mães | 180 aprovados |
| **CTA** | "Começar certo ⚡" | "Não me matar 💪" | "Flexível 🎯" | "Método sério 📊" |
| **Mood Visual** | Vibrante | Dinâmico | Realista | Sóbrio |

---

## 🎯 Quando Usar Cada Versão

### Use V3 (/jovem) para:
- ✅ Recém-formados
- ✅ Primeiro concurso
- ✅ Pessoas sobrecarregadas com informação
- ✅ Quem não sabe organizar estudos
- ✅ Tráfego de "como estudar para concurso"

### Use V4 (/profissional) para:
- ✅ Profissionais que trabalham 8h/dia
- ✅ Quem estuda cedo ou tarde da noite
- ✅ Pessoas com energia variável
- ✅ Quem precisa otimizar tempo
- ✅ Tráfego de "estudar trabalhando"

### Use V5 (/familia) para:
- ✅ Pais e mães de família
- ✅ Quem tem responsabilidades familiares
- ✅ Rotinas imprevisíveis
- ✅ Quem precisa de flexibilidade
- ✅ Tráfego de "concurso com família"

### Use V6 (/maduro) para:
- ✅ Profissionais 45+ anos
- ✅ Quem já investiu muito
- ✅ Busca método científico
- ✅ Pessoas sérias e focadas
- ✅ Tráfego de "método comprovado"

---

## 📝 Checklist de Teste

### Teste Funcional

- [ ] Navegação entre páginas funciona
- [ ] Formulários capturam email
- [ ] Leads salvos no localStorage
- [ ] Segment correto em cada versão
- [ ] Responsivo (mobile/tablet/desktop)
- [ ] Sem erros no console
- [ ] CTAs específicos aparecem

### Teste de Copy

- [ ] Headlines fazem sentido para persona
- [ ] Pain points ressoam com público
- [ ] Solution section é relevante
- [ ] FAQ responde objeções
- [ ] Provas sociais são críveis
- [ ] Tom de voz consistente

### Teste de Tracking

```javascript
// Abrir console do navegador
// Capturar email em cada versão
// Verificar dados salvos

const leads = JSON.parse(localStorage.getItem('leads'));
console.table(leads);

// Verificar se segment está correto
// jovem, profissional, familia, ou maduro
```

---

## 🎨 Diferenças Visuais por Versão

### V3 - Jovem
```
Badge: 🎓 Para quem está começando agora
Background: Azul vibrante com gold/purple
Floating: ✓ Tudo Organizado | ✓ Fácil de Usar
Mockup: 📚 Dashboard Organizado
```

### V4 - Profissional
```
Badge: ⚡ Para quem trabalha e estuda
Background: Roxo/azul dinâmico
Floating: ✓ Se Adapta | ✓ Realista
Mockup: 💼 Plano Adaptativo
```

### V5 - Família
```
Badge: 👨‍👩‍👧‍👦 Para quem tem responsabilidades
Background: Verde/gold compreensivo
Floating: ✓ Flexível | ✓ Sem Culpa
Mockup: 👨‍👩‍👧 Flexível & Realista
```

### V6 - Maduro
```
Badge: 🎯 Método científico comprovado
Background: Cinza/azul escuro profissional
Floating: ✓ Comprovado | ✓ Eficiente
Mockup: 📊 Método Científico
```

---

## 🔍 Como Verificar o Segment

### No Frontend (Console)

```javascript
// Ver todos os leads
localStorage.getItem('leads')

// Parsear JSON
JSON.parse(localStorage.getItem('leads'))

// Filtrar por segment
JSON.parse(localStorage.getItem('leads'))
  .filter(l => l.segment === 'profissional')

// Contar leads por segment
JSON.parse(localStorage.getItem('leads'))
  .reduce((acc, l) => {
    acc[l.segment] = (acc[l.segment] || 0) + 1;
    return acc;
  }, {})

// Exemplo de output:
// { jovem: 5, profissional: 12, familia: 3, maduro: 2 }
```

### No GTM (Google Tag Manager)

```javascript
// Event que será enviado
{
  event: 'lead_captured',
  email: 'user@email.com',
  variant: 'hero',
  segment: 'profissional'  // ← Esse valor!
}

// Criar trigger baseado em segment
// Variável: {{dlv - segment}}
// Condicional: segment equals profissional
```

---

## 📊 Análise de Conversão

### Métricas por Versão

```javascript
// Calcular taxa de conversão por segment
const leads = JSON.parse(localStorage.getItem('leads'));
const analytics = {
  total: leads.length,
  bySegment: leads.reduce((acc, l) => {
    acc[l.segment] = (acc[l.segment] || 0) + 1;
    return acc;
  }, {}),
  byVariant: leads.reduce((acc, l) => {
    acc[l.variant] = (acc[l.variant] || 0) + 1;
    return acc;
  }, {})
};

console.table(analytics.bySegment);
// jovem: 10
// profissional: 25  ← Melhor conversão!
// familia: 8
// maduro: 5
```

---

## 🚨 Troubleshooting

### Email não captura
```bash
# Verificar console do navegador
# Ver se há erros
# Verificar se segment está sendo passado
```

### Segment aparece como "geral"
```typescript
// Verificar se props está sendo passado
<EmailCapture segment="profissional" />  // ✅ Correto
<EmailCapture />  // ❌ Vai usar "geral"
```

### Leads não salvam
```javascript
// Verificar se localStorage está habilitado
localStorage.setItem('test', 'ok');
localStorage.getItem('test');  // deve retornar 'ok'
```

---

## 📱 Teste Mobile

### Viewport Sizes

- **Mobile:** 375px (iPhone)
- **Tablet:** 768px (iPad)
- **Desktop:** 1024px+

### Como Testar

1. Abrir DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Selecionar dispositivo
4. Testar cada versão

### Checklist Mobile

- [ ] Hero readable
- [ ] Forms usable
- [ ] CTAs tappable (min 44px)
- [ ] Navigation works
- [ ] No horizontal scroll

---

## ⚡ Performance

### Lighthouse Scores (Alvo)

- **Performance:** >90
- **Accessibility:** >95
- **Best Practices:** >90
- **SEO:** >85

### Como Medir

```bash
# Chrome DevTools > Lighthouse
# Ou
npx lighthouse http://localhost:8081/profissional --view
```

---

## 🎬 Próximos Passos

1. **Testar localmente** todas as 4 versões
2. **Validar tracking** de segments
3. **Deploy para staging**
4. **Configurar tráfego pago** (25% cada)
5. **Monitorar conversão** por 2 semanas
6. **Otimizar** versão vencedora

---

## 📞 Suporte Rápido

**Problema com:**
- Routing → Verificar `App.tsx`
- Tracking → Verificar `EmailCapture.tsx`
- Visual → Verificar componentes `v3/`, `v4/`, `v5/`, `v6/`
- Copy → Ver `README-SEGMENTED-VERSIONS.md`

**Documentação Completa:**
- `README-SEGMENTED-VERSIONS.md` - Guia detalhado
- `CHANGELOG-SEGMENTED.md` - Histórico de mudanças
- `versoes_idade4.md` - Especificação original

---

**Última Atualização:** 2024-11-05  
**Status:** ✅ Pronto para testes
