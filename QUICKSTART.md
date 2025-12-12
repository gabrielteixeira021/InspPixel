# 🎯 InspirePixel - Quick Start Guide

Guia rápido para começar a desenvolver no InspirePixel em menos de 5 minutos.

## ⚡ Instalação Rápida

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/InspirePixel.git
cd InspirePixel

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev

# 4. Abra no navegador
# http://localhost:5173
```

## 📁 Estrutura Básica

```
src/
├── components/          # Componentes Vue
│   ├── HeaderComponent.vue
│   ├── ImageGallery.vue
│   ├── ImageCard.vue
│   └── ImageModal.vue
├── stores/             # Pinia stores
│   └── imageStore.js
├── assets/             # Estilos e recursos
│   └── styles/
└── App.vue            # Componente raiz
```

## 🛠️ Comandos Principais

```bash
npm run dev      # Desenvolvimento
npm run build    # Build de produção
npm run preview  # Preview do build
```

## 🎨 Principais Features

1. **Galeria Masonry**: Layout estilo Pinterest
2. **Scroll Infinito**: Carregamento automático
3. **Busca**: Filtro por autor
4. **Modal**: Visualização detalhada
5. **Responsivo**: Mobile, tablet, desktop

## 🚀 Deploy Rápido (Vercel)

```bash
# 1. Instale a CLI
npm install -g vercel

# 2. Faça login
vercel login

# 3. Deploy
vercel --prod
```

## 📖 Documentação Completa

- **README.md** - Visão geral
- **DEVELOPMENT.md** - Guia técnico
- **CONTRIBUTING.md** - Como contribuir
- **DEPLOY.md** - Guia de deploy
- **CHANGELOG.md** - Histórico

## 💡 Dicas Rápidas

### Adicionar Nova Feature

```bash
git checkout -b feature/minha-feature
# ... código ...
git commit -m "feat: adicionar minha feature"
git push origin feature/minha-feature
```

### Criar Novo Componente

```vue
<script setup>
// Lógica aqui
</script>

<template>
  <!-- HTML aqui -->
</template>

<style lang="scss" scoped>
// Estilos aqui
</style>
```

### Usar a Store

```javascript
import { useImageStore } from '@/stores/imageStore'

const imageStore = useImageStore()
const images = imageStore.images
```

## 🐛 Problemas Comuns

**Porta já em uso:**
```bash
# Mude a porta no package.json ou:
npm run dev -- --port 3000
```

**Build falha:**
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📞 Precisa de Ajuda?

- Veja a documentação completa em **README.md**
- Abra uma issue no GitHub
- Consulte **DEVELOPMENT.md** para detalhes técnicos

---

**Pronto para começar! 🎉**
