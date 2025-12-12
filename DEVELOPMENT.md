# 🎨 InspirePixel - Guia de Desenvolvimento

## Decisões Arquiteturais

### Estrutura de Componentes

O projeto foi organizado seguindo os princípios de **Separation of Concerns** e **Single Responsibility**:

1. **HeaderComponent**: Responsável por navegação e busca
2. **ImageGallery**: Gerencia o layout masonry e distribuição de colunas
3. **ImageCard**: Componente reutilizável para cada imagem
4. **ImageModal**: Modal para visualização detalhada

### Gerenciamento de Estado (Pinia)

Utilizamos Pinia para:
- Centralizar o estado das imagens
- Implementar cache de requisições
- Gerenciar paginação e scroll infinito
- Facilitar a busca e filtragem

### Performance

**Otimizações Implementadas:**

1. **Lazy Loading**: Imagens carregam apenas quando visíveis
2. **Cache**: Armazena páginas já carregadas
3. **Debouncing**: Na busca para evitar requisições excessivas
4. **Skeleton Loading**: Feedback visual durante carregamento
5. **Layout Shift Prevention**: Reserva espaço antes da imagem carregar

## Padrões de Código

### Vue 3 Composition API

Utilizamos a Composition API com `<script setup>` para:
- Melhor organização do código
- TypeScript-friendly (preparado para migração futura)
- Melhor reusabilidade de lógica
- Performance otimizada

### SCSS/SASS

**Estrutura de Estilos:**

```scss
assets/styles/
├── variables.scss  # Variáveis globais (cores, espaçamentos, etc.)
└── global.scss     # Reset CSS e utilitários
```

**Convenções:**
- BEM-like para nomenclatura de classes
- Variáveis para todos os valores reutilizáveis
- Mobile-first approach com media queries
- Scoped styles em componentes

## Responsividade

### Breakpoints

```scss
$breakpoint-mobile: 640px;   // 2 colunas
$breakpoint-tablet: 1024px;  // 3 colunas
$breakpoint-desktop: 1280px; // 4 colunas
```

### Estratégia Mobile-First

Todos os estilos são escritos primeiro para mobile, com media queries adicionando funcionalidades para telas maiores.

## API Integration

### Lorem Picsum API

**Endpoints Utilizados:**

```javascript
GET https://picsum.photos/v2/list
Params: 
  - page: número da página
  - limit: quantidade de imagens
```

**Estrutura de Resposta:**

```json
[
  {
    "id": "0",
    "author": "Alejandro Escamilla",
    "width": 5000,
    "height": 3333,
    "url": "https://unsplash.com/...",
    "download_url": "https://picsum.photos/..."
  }
]
```

## Funcionalidades Detalhadas

### 1. Galeria Masonry

**Algoritmo de Distribuição:**

```javascript
// Distribui imagens em colunas de forma equilibrada
const distributeImages = () => {
  const newColumns = Array.from({ length: columnCount.value }, () => [])
  
  props.images.forEach((image, index) => {
    const columnIndex = index % columnCount.value
    newColumns[columnIndex].push(image)
  })
  
  columns.value = newColumns
}
```

### 2. Scroll Infinito

**Detecção de Scroll:**

```javascript
const handleScroll = () => {
  const scrollPosition = window.innerHeight + window.scrollY
  const threshold = document.documentElement.scrollHeight - 500

  if (scrollPosition >= threshold && !imageStore.loading) {
    imageStore.loadMoreImages()
  }
}
```

### 3. Sistema de Busca

- Filtra por nome do autor
- Cache local para performance
- Feedback visual durante busca

### 4. Modal de Visualização

**Características:**
- Backdrop blur effect
- Animações de entrada/saída
- Teclado (ESC para fechar)
- Click fora para fechar
- Informações detalhadas da imagem

## Acessibilidade

### ARIA Labels

Todos os botões interativos possuem `aria-label`:

```vue
<button aria-label="Fechar" @click="close">
  <CloseIcon />
</button>
```

### Navegação por Teclado

- **ESC**: Fecha modal
- **Enter**: Confirma busca
- **Tab**: Navega entre elementos focáveis

### Contraste de Cores

Todos os textos atendem ao padrão WCAG AA (mínimo 4.5:1).

## Melhorias Futuras

### Possíveis Implementações

1. **Categorias/Tags**: Filtros por categoria
2. **Favoritos**: Sistema de salvamento local
3. **Compartilhamento**: Share em redes sociais
4. **Download em Lote**: Baixar múltiplas imagens
5. **PWA**: Transformar em Progressive Web App
6. **Dark Mode**: Tema escuro
7. **Filtros**: Filtrar por dimensões, autor, etc.
8. **Lazy Load Routes**: Code splitting por rotas
9. **i18n**: Internacionalização
10. **Analytics**: Tracking de uso

## Scripts Úteis

### Desenvolvimento

```bash
npm run dev          # Inicia servidor de desenvolvimento
npm run build        # Build para produção
npm run preview      # Preview do build
```

### Análise de Bundle

Para analisar o tamanho do bundle:

```bash
npm install -D rollup-plugin-visualizer
```

Adicione ao `vite.config.js`:

```javascript
import { visualizer } from 'rollup-plugin-visualizer';

export default {
  plugins: [
    vue(),
    visualizer({ open: true })
  ]
}
```

## Deploy

### Vercel (Recomendado)

1. **Via GitHub:**
   - Push para GitHub
   - Conecte repositório na Vercel
   - Deploy automático

2. **Via CLI:**
   ```bash
   npm i -g vercel
   vercel --prod
   ```

### Outras Plataformas

**Netlify:**
```bash
npm run build
# Deploy pasta dist/
```

**GitHub Pages:**
```bash
# Adicione ao vite.config.js:
base: '/InspirePixel/'

npm run build
# Deploy pasta dist/ para gh-pages branch
```

## Troubleshooting

### Imagens não carregam

1. Verifique conexão com internet
2. Confirme que a API está acessível
3. Limpe o cache do navegador

### Build falha

```bash
# Limpe node_modules e reinstale
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Estilos não aplicam

1. Verifique importação do SCSS no componente
2. Confirme que o SASS está instalado
3. Reinicie o servidor de desenvolvimento

## Contato e Suporte

Para dúvidas ou sugestões, abra uma issue no GitHub.

---

**Desenvolvido com 💜 para InspirePixel**
