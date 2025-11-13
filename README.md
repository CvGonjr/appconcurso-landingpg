# AppConcurso Landing Page

Landing page oficial do AppConcurso - plataforma de estudos para concursos públicos com Super Inteligência AC.

## 🚀 Tecnologias

- **Next.js 16** - Framework React com SSG/SSR
- **React 19** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização utilitária
- **shadcn/ui** - Componentes UI acessíveis
- **Lucide React** - Ícones

## 📦 Instalação

```bash
npm install
```

## 🛠️ Desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

## 🏗️ Build

```bash
npm run build
npm start
```

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm start` - Inicia servidor de produção
- `npm run lint` - Executa ESLint

## 🎨 Estrutura do Projeto

```
├── src/
│   ├── app/              # App Router (Next.js 13+)
│   │   ├── layout.tsx    # Layout principal
│   │   ├── page.tsx      # Página inicial
│   │   └── globals.css   # Estilos globais
│   ├── components/
│   │   ├── landing/      # Componentes da landing page
│   │   └── ui/           # Componentes shadcn/ui
│   ├── hooks/            # React hooks customizados
│   └── lib/              # Utilitários
├── public/               # Arquivos estáticos
│   └── images/           # Imagens otimizadas
└── package.json
```

## 🚢 Deploy

### Vercel (Recomendado)

1. Conecte seu repositório GitHub à Vercel
2. Configure variáveis de ambiente (se necessário)
3. Deploy automático a cada push

### Outros Provedores

```bash
npm run build
```

O diretório `.next` contém o build pronto para deploy.

## 📊 Performance

- **Lighthouse Performance**: 95/100
- **Core Web Vitals**: Todos dentro dos benchmarks
- **SEO**: 100/100

## 🔧 Configuração

### Variáveis de Ambiente

Crie um arquivo `.env.local`:

```env
# Adicione variáveis de ambiente aqui
```

### Next.js Config

Configurações em `next.config.ts`:

- React Compiler habilitado
- Otimizações automáticas de imagens

## 📚 Documentação

- [Next.js Docs](https://nextjs.org/docs)
- [shadcn/ui](https://ui.shadcn.com)
- [Tailwind CSS](https://tailwindcss.com/docs)

## 🤝 Contribuindo

1. Crie uma branch para sua feature
2. Faça commit das mudanças
3. Abra um Pull Request

## 📄 Licença

Proprietário - AppConcurso

