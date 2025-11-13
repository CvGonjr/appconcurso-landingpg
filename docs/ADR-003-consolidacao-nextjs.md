# ADR-003: Consolidação da Landing Page em Next.js

## Status
✅ **ACEITO E IMPLEMENTADO**

## Contexto

Atualmente tínhamos 3 implementações paralelas:
- `react-vite/` (original SPA)
- `next-app/` (migração SSG)
- `astro/` (teste de performance)

Isso gerava:
- **Duplicação de código** (3x manutenção)
- **Confusão** sobre qual versão é oficial
- **Desperdício de recursos** (3 builds, 3 deploys)

## Decisão

Consolidar em **Next.js 16** como única implementação oficial.

## Razões

### Por que Next.js?

1. **SEO Crítico**: Landing page precisa de SSG/SSR para indexação
2. **Hydration Seletiva**: Componentes interativos apenas onde necessário
3. **Image Optimization**: `next/image` automático com lazy loading
4. **Vercel Deploy**: Deploy zero-config com otimizações automáticas
5. **Ecossistema**: shadcn/ui + Tailwind já implementados e funcionando
6. **Futuro Dashboard**: Transição suave para aplicação completa
7. **Performance**: 95/100 no Lighthouse (excelente)

### Por que NÃO Astro?

- Menos flexibilidade para futuro dashboard interativo
- Menor ecossistema React (menos bibliotecas compatíveis)
- Curva de aprendizado adicional para equipe
- Projeto backend já em Next.js (consistência de stack)

### Por que NÃO React Vite?

- SEO ruim (CSR puro, sem pré-renderização)
- Performance inferior (bundle maior, sem otimizações)
- Sem otimização de imagens nativa
- Não adequado para landing page (SEO é crítico)

## Consequências

### Positivas ✅

- ✅ **Fonte única da verdade** - Um único código para manter
- ✅ **SEO excelente** - SSG garante indexação perfeita
- ✅ **Manutenção simplificada** - 1 projeto ao invés de 3
- ✅ **Deploy direto na Vercel** - Zero configuração
- ✅ **Transição suave** - Pronto para evoluir para dashboard
- ✅ **Performance otimizada** - next/image, code splitting automático
- ✅ **Developer Experience** - Hot reload, TypeScript, ESLint

### Negativas ❌

- ❌ Bundle ligeiramente maior que Astro (mas ainda excelente: 95/100)
- ❌ Precisa remover código React Vite e Astro (já feito)

## Implementação

### Ações Realizadas

1. ✅ **Movido** conteúdo de `next-app/` para raiz do projeto
2. ✅ **Otimizado** imagens com `next/image` (priority + quality)
3. ✅ **Removido** diretórios `react-vite/` e `astro/`
4. ✅ **Atualizado** documentação (README.md)
5. ✅ **Configurado** `.gitignore` adequado para Next.js

### Estrutura Final

```
appconcurso-landingpg/
├── src/
│   ├── app/              # Next.js App Router
│   ├── components/       # Componentes React
│   ├── hooks/            # Custom hooks
│   └── lib/              # Utilitários
├── public/               # Assets estáticos
├── package.json
├── next.config.ts
└── README.md
```

## Métricas de Performance

### Lighthouse Scores

| Métrica | Score |
|---------|-------|
| Performance | 95/100 |
| Accessibility | 91/100 |
| Best Practices | 100/100 |
| SEO | 100/100 |

### Core Web Vitals

| Métrica | Valor | Status |
|---------|-------|--------|
| FCP | 0.91s | ✅ Excelente |
| LCP | 2.96s | ⚠️ Pode melhorar |
| TBT | 27ms | ✅ Excelente |
| CLS | 0 | ✅ Perfeito |
| TTI | 3.00s | ✅ Bom |

## Próximos Passos

1. **Otimizar LCP** - Reduzir de 2.96s para < 2.5s
   - Verificar imagens grandes
   - Lazy loading seletivo
   - Otimizar fontes

2. **Configurar CI/CD** - Deploy automático na Vercel
   - Conectar repositório GitHub
   - Configurar variáveis de ambiente

3. **Adicionar Testes** - Testes de componentes
   - Jest + React Testing Library
   - Testes E2E com Playwright

4. **Monitoramento** - Analytics e performance
   - Vercel Analytics
   - Web Vitals tracking

## Referências

- [Next.js Documentation](https://nextjs.org/docs)
- [Lighthouse Performance](https://web.dev/performance-scoring/)
- [Core Web Vitals](https://web.dev/vitals/)

## Data

**Data de Decisão**: 11 de Novembro de 2025  
**Data de Implementação**: 11 de Novembro de 2025  
**Autor**: Equipe AppConcurso

