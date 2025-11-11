#!/bin/bash

# Script para comparar a velocidade de carregamento das 3 versões da landing page
# Usa Lighthouse CI para análise de performance

set -e

echo "🚀 Comparação de Performance: React Vite vs Next.js vs Astro"
echo "============================================================"
echo ""

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Função para verificar se uma porta está em uso
check_port() {
    local port=$1
    if lsof -Pi :$port -sTCP:LISTEN -t >/dev/null 2>&1 ; then
        echo -e "${RED}Porta $port já está em uso. Fechando processo...${NC}"
        kill -9 $(lsof -t -i:$port) 2>/dev/null || true
        sleep 2
    fi
}

# Função para aguardar servidor iniciar
wait_for_server() {
    local url=$1
    local max_wait=60
    local count=0
    
    echo -e "${YELLOW}Aguardando servidor em $url ...${NC}"
    until curl -s -o /dev/null -w "%{http_code}" "$url" | grep -q "200\|301\|302" || [ $count -eq $max_wait ]; do
        sleep 1
        count=$((count + 1))
    done
    
    if [ $count -eq $max_wait ]; then
        echo -e "${RED}Timeout aguardando servidor${NC}"
        return 1
    fi
    
    echo -e "${GREEN}Servidor pronto!${NC}"
    sleep 2
    return 0
}

# Função para medir tempo de carregamento usando curl
measure_load_time() {
    local url=$1
    local name=$2
    
    echo -e "\n${BLUE}📊 Testando $name...${NC}"
    
    # Warm up
    curl -s -o /dev/null "$url" 2>/dev/null || true
    
    # Múltiplas medições
    local total_time=0
    local runs=5
    
    for i in $(seq 1 $runs); do
        time=$(curl -o /dev/null -s -w '%{time_total}\n' "$url")
        total_time=$(echo "$total_time + $time" | bc)
        echo "  Run $i: ${time}s"
    done
    
    avg_time=$(echo "scale=3; $total_time / $runs" | bc)
    echo -e "${GREEN}  ⏱️  Tempo médio: ${avg_time}s${NC}"
}

# Função para análise detalhada com Lighthouse
run_lighthouse() {
    local url=$1
    local name=$2
    local output_dir="performance-reports"
    
    mkdir -p "$output_dir"
    
    echo -e "\n${BLUE}🔍 Executando Lighthouse para $name...${NC}"
    
    if command -v lighthouse &> /dev/null; then
        lighthouse "$url" \
            --output=html \
            --output=json \
            --output-path="$output_dir/$name" \
            --chrome-flags="--headless --no-sandbox" \
            --quiet \
            2>/dev/null || echo -e "${YELLOW}Lighthouse falhou, continuando...${NC}"
    else
        echo -e "${YELLOW}Lighthouse não instalado. Execute: npm install -g lighthouse${NC}"
    fi
}

# Limpar portas
check_port 5173
check_port 3000
check_port 4321

echo -e "\n${YELLOW}📦 Instalando dependências...${NC}"

# React Vite
if [ -d "react-vite" ]; then
    echo -e "${BLUE}Preparando React Vite...${NC}"
    cd react-vite
    npm install --silent 2>/dev/null || true
    cd ..
fi

# Next.js
if [ -d "next-app" ]; then
    echo -e "${BLUE}Preparando Next.js...${NC}"
    cd next-app
    npm install --silent 2>/dev/null || true
    cd ..
fi

# Astro
if [ -d "astro" ]; then
    echo -e "${BLUE}Preparando Astro...${NC}"
    cd astro
    npm install --silent 2>/dev/null || true
    cd ..
fi

echo -e "\n${GREEN}✅ Dependências instaladas${NC}"
echo -e "\n${YELLOW}🏗️  Construindo projetos para produção...${NC}"

# Build React Vite
if [ -d "react-vite" ]; then
    echo -e "${BLUE}Building React Vite...${NC}"
    cd react-vite
    npm run build 2>/dev/null || true
    cd ..
fi

# Build Next.js
if [ -d "next-app" ]; then
    echo -e "${BLUE}Building Next.js...${NC}"
    cd next-app
    npm run build 2>/dev/null || true
    cd ..
fi

# Build Astro
if [ -d "astro" ]; then
    echo -e "${BLUE}Building Astro...${NC}"
    cd astro
    npm run build 2>/dev/null || true
    cd ..
fi

echo -e "\n${GREEN}✅ Builds concluídos${NC}"
echo -e "\n${YELLOW}🚀 Iniciando servidores de preview...${NC}\n"

# Array para armazenar PIDs dos servidores
PIDS=()

cleanup() {
    echo -e "\n${YELLOW}🧹 Encerrando servidores...${NC}"
    for pid in "${PIDS[@]}"; do
        kill $pid 2>/dev/null || true
    done
    echo -e "${GREEN}✅ Cleanup concluído${NC}"
    exit 0
}

trap cleanup EXIT INT TERM

# Iniciar React Vite Preview (porta 5173)
if [ -d "react-vite" ]; then
    echo -e "${BLUE}Iniciando React Vite preview (porta 5173)...${NC}"
    cd react-vite
    npm run preview > /dev/null 2>&1 &
    VITE_PID=$!
    PIDS+=($VITE_PID)
    cd ..
    
    if wait_for_server "http://localhost:5173"; then
        measure_load_time "http://localhost:5173" "React Vite"
        run_lighthouse "http://localhost:5173" "react-vite"
    fi
fi

# Iniciar Next.js (porta 3000)
if [ -d "next-app" ]; then
    echo -e "${BLUE}Iniciando Next.js (porta 3000)...${NC}"
    cd next-app
    npm run start > /dev/null 2>&1 &
    NEXT_PID=$!
    PIDS+=($NEXT_PID)
    cd ..
    
    if wait_for_server "http://localhost:3000"; then
        measure_load_time "http://localhost:3000" "Next.js"
        run_lighthouse "http://localhost:3000" "next-js"
    fi
fi

# Iniciar Astro (porta 4321)
if [ -d "astro" ]; then
    echo -e "${BLUE}Iniciando Astro preview (porta 4321)...${NC}"
    cd astro
    npm run preview > /dev/null 2>&1 &
    ASTRO_PID=$!
    PIDS+=($ASTRO_PID)
    cd ..
    
    if wait_for_server "http://localhost:4321"; then
        measure_load_time "http://localhost:4321" "Astro"
        run_lighthouse "http://localhost:4321" "astro"
    fi
fi

echo -e "\n${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}📊 RESUMO DA ANÁLISE DE PERFORMANCE${NC}"
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

if [ -d "performance-reports" ]; then
    echo -e "\n${BLUE}📁 Relatórios Lighthouse salvos em: performance-reports/${NC}"
    ls -lh performance-reports/ | grep -v "^total" | awk '{print "   - " $9}'
fi

echo -e "\n${YELLOW}💡 Dicas:${NC}"
echo -e "   • Relatórios HTML podem ser abertos no navegador"
echo -e "   • Para análise mais detalhada, instale: ${GREEN}npm install -g lighthouse${NC}"
echo -e "   • Para medir Core Web Vitals reais, use Chrome DevTools"

echo -e "\n${GREEN}✨ Teste concluído!${NC}\n"

# Manter servidores rodando para inspeção manual
echo -e "${BLUE}🌐 Servidores rodando:${NC}"
[ -d "react-vite" ] && echo -e "   ${GREEN}• React Vite:${NC} http://localhost:5173"
[ -d "next-app" ] && echo -e "   ${GREEN}• Next.js:${NC}    http://localhost:3000"
[ -d "astro" ] && echo -e "   ${GREEN}• Astro:${NC}      http://localhost:4321"

echo -e "\n${YELLOW}Pressione Ctrl+C para encerrar os servidores${NC}\n"

# Aguardar indefinidamente
wait
