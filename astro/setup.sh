#!/bin/bash

echo "🚀 Setup AppConcurso Astro Version"
echo "=================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js não encontrado. Instale Node.js 18+ primeiro."
    exit 1
fi

echo "✅ Node.js $(node -v) detectado"
echo ""

# Install dependencies
echo "📦 Instalando dependências..."
npm install

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Dependências instaladas com sucesso!"
    echo ""
    echo "🎉 Setup completo!"
    echo ""
    echo "Próximos passos:"
    echo "  1. npm run dev     # Iniciar servidor de desenvolvimento"
    echo "  2. npm run build   # Build para produção"
    echo "  3. npm run preview # Preview da build"
    echo ""
    echo "📖 Leia README.md e QUICKSTART.md para mais informações"
    echo ""
else
    echo ""
    echo "❌ Erro ao instalar dependências"
    exit 1
fi
