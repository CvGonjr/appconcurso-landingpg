# 🚀 Script de Teste de Performance

## Descrição

O script `test-performance.sh` compara a velocidade de carregamento entre as três versões da landing page:
- **React Vite** (porta 5173)
- **Next.js** (porta 3000)
- **Astro** (porta 4321)

## Como usar

### Execução básica

```bash
./test-performance.sh
```

### O que o script faz

1. **Instala dependências** de todos os projetos
2. **Constrói builds de produção** (otimizados)
3. **Inicia servidores preview** em portas dedicadas
4. **Mede tempo de carregamento** usando curl (5 execuções por projeto)
5. **Gera relatórios Lighthouse** (se instalado)
6. **Mantém servidores rodando** para inspeção manual

### Métricas coletadas

- ⏱️ **Tempo de carregamento** (média de 5 execuções)
- 📊 **Lighthouse scores** (Performance, Accessibility, Best Practices, SEO)
- 📁 **Relatórios HTML/JSON** salvos em `performance-reports/`

## Requisitos

### Obrigatório
- Node.js e npm
- curl
- bc (calculadora bash)
- lsof (para verificar portas)

### Opcional (para análise completa)
```bash
npm install -g lighthouse
```

## Interpretando os resultados

### Tempo de carregamento (curl)
- Mede o **Time to First Byte (TTFB)** e carregamento total
- Quanto **menor**, melhor
- Média de 5 execuções para estabilidade

### Lighthouse Reports
Abra os arquivos HTML em `performance-reports/`:
- **Performance**: Core Web Vitals (FCP, LCP, TBT, CLS)
- **Accessibility**: Conformidade WCAG
- **Best Practices**: Segurança e boas práticas
- **SEO**: Otimização para motores de busca

## Resultados esperados

### 🏆 Astro (geralmente o mais rápido)
- HTML estático pré-renderizado
- JavaScript mínimo no cliente
- Ideal para SEO e performance

### 🥈 Next.js
- SSG (Static Site Generation)
- Hydration de React no cliente
- Bom equilíbrio performance/interatividade

### 🥉 React Vite (SPA)
- Client-side rendering
- Bundle JavaScript maior
- Mais lento no carregamento inicial

## Troubleshooting

### "Porta já está em uso"
O script tenta fechar processos automaticamente. Se falhar:
```bash
# Fechar manualmente
kill -9 $(lsof -t -i:5173)
kill -9 $(lsof -t -i:3000)
kill -9 $(lsof -t -i:4321)
```

### "Lighthouse não instalado"
```bash
npm install -g lighthouse
```

### Timeout aguardando servidor
- Verifique se o build foi bem-sucedido
- Revise logs de erros no terminal

## Parando o script

Pressione **Ctrl+C** para encerrar todos os servidores automaticamente.

## Exemplos de uso avançado

### Apenas medir tempos (sem Lighthouse)
Comente a linha `run_lighthouse` no script ou desinstale o Lighthouse temporariamente.

### Mudar número de execuções
Edite a variável `runs=5` no script para mais/menos execuções.

### Testar em diferentes condições de rede
Use Chrome DevTools Network Throttling depois que os servidores estiverem rodando.

## Dicas

- 🔥 Execute em modo de navegação anônima para evitar cache
- 📊 Use a aba Network do Chrome DevTools para análise detalhada
- 🌐 Teste em diferentes dispositivos (mobile/desktop)
- ⚡ Compare os tamanhos de bundle nos relatórios Lighthouse
