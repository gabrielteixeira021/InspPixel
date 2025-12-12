# 🌟 InspirePixel

Uma plataforma moderna de galeria de imagens para encontrar inspiração visual de forma rápida e organizada, desenvolvida com Vue.js.

![InspirePixel](https://img.shields.io/badge/Vue.js-3.x-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)

## 📋 Sobre o Projeto

InspirePixel é uma solução intuitiva para quem busca referências visuais sem precisar navegar por vários sites diferentes. Com um layout inspirado no Pinterest e integração com a API Lorem Picsum, oferecemos uma experiência moderna e fluida para descoberta de imagens.

### ✨ Funcionalidades

- 🖼️ **Galeria Masonry**: Layout estilo Pinterest totalmente responsivo
- 🔍 **Busca Inteligente**: Pesquise por autores e categorias
- ♾️ **Scroll Infinito**: Carregamento automático de mais imagens
- 🎨 **Modal de Visualização**: Veja detalhes completos das imagens
- 📱 **Design Responsivo**: Perfeito em qualquer dispositivo
- ⚡ **Performance Otimizada**: Cache de imagens e lazy loading
- 🎭 **Animações Suaves**: Transições elegantes e naturais

## 🛠️ Tecnologias Utilizadas

- **Vue.js 3** - Framework JavaScript progressivo
- **Pinia** - Gerenciamento de estado
- **Axios** - Cliente HTTP para API
- **SASS (SCSS)** - Pré-processador CSS
- **Vite** - Build tool e dev server
- **Lorem Picsum API** - Fonte de imagens

## 🚀 Como Executar

### Pré-requisitos

- Node.js 16+ instalado
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/InspirePixel.git
cd InspirePixel
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
```

4. Acesse no navegador:
```
http://localhost:5173
```

### Build para Produção

```bash
npm run build
```

### Preview do Build

```bash
npm run preview
```

## 📁 Estrutura do Projeto

```
InspirePixel/
├── src/
│   ├── assets/
│   │   └── styles/
│   │       ├── variables.scss    # Variáveis SCSS
│   │       └── global.scss       # Estilos globais
│   ├── components/
│   │   ├── HeaderComponent.vue   # Cabeçalho e busca
│   │   ├── ImageGallery.vue      # Grid de imagens
│   │   ├── ImageCard.vue         # Card individual
│   │   └── ImageModal.vue        # Modal de visualização
│   ├── stores/
│   │   └── imageStore.js         # Store Pinia
│   ├── App.vue                   # Componente raiz
│   └── main.js                   # Entry point
├── index.html
├── package.json
└── vite.config.js
```

## 🎨 Recursos de Design

### Paleta de Cores

- **Primary**: #667eea (Azul suave)
- **Secondary**: #764ba2 (Roxo)
- **Background**: #f7fafc (Cinza claro)
- **Text**: #1a202c (Cinza escuro)

### Tipografia

- **Font Family**: Poppins, sans-serif
- **Weights**: 300, 400, 500, 600, 700

### Responsividade

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🔌 API Utilizada

**Lorem Picsum**: https://picsum.photos

Endpoints principais:
- `GET /v2/list?page={page}&limit={limit}` - Lista de imagens

## 📱 Screenshots

### Desktop
Layout em grid de 4 colunas com imagens organizadas em masonry

### Tablet
Grid adaptativo de 3 colunas

### Mobile
Grid compacto de 2 colunas com busca expansível

## 🚢 Deploy

Este projeto está configurado para deploy na Vercel.

### Deploy Automático

1. Faça push para o repositório GitHub
2. Importe o projeto na Vercel
3. Configure o build command: `npm run build`
4. Configure o output directory: `dist`
5. Deploy automático!

### Deploy Manual

```bash
npm install -g vercel
vercel --prod
```

## 📝 Requisitos Atendidos

✅ Vue.js como framework principal  
✅ Axios para consumo de API  
✅ SASS (SCSS) para estilização  
✅ Layout responsivo  
✅ Consumo da API Lorem Picsum  
✅ Repositório no GitHub  
✅ Pronto para deploy na Vercel  

## 🎯 Funcionalidades Extras Implementadas

- Cache de imagens para melhor performance
- Skeleton loading durante carregamento
- Busca com filtro local
- Modal com informações detalhadas
- Animações e transições suaves
- Tratamento de erros
- Acessibilidade (ARIA labels, keyboard navigation)

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## 📄 Licença

Este projeto foi desenvolvido como parte de um desafio técnico da InspirePixel.

## 👤 Autor

Desenvolvido com 💜 para o desafio InspirePixel

---

⭐ Se este projeto foi útil para você, considere dar uma estrela no repositório!
