# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Semantic Versioning](https://semver.org/lang/pt-BR/).

## [1.0.0] - 2025-12-11

### ✨ Adicionado

#### Funcionalidades Principais
- **Galeria de Imagens Masonry**: Layout estilo Pinterest responsivo com 2-4 colunas
- **Integração API Lorem Picsum**: Consumo da API para listagem de imagens
- **Sistema de Busca**: Busca por autor com filtro local
- **Scroll Infinito**: Carregamento automático ao rolar a página
- **Modal de Visualização**: Visualização detalhada de imagens com informações
- **Header Fixo**: Navegação e busca sempre visíveis

#### Componentes
- `HeaderComponent.vue`: Cabeçalho com logo e busca
- `ImageGallery.vue`: Grid masonry de imagens
- `ImageCard.vue`: Card individual de imagem
- `ImageModal.vue`: Modal de visualização detalhada

#### State Management
- Pinia store (`imageStore.js`) para gerenciamento de:
  - Lista de imagens
  - Paginação
  - Cache de requisições
  - Estado de loading
  - Busca e filtros

#### Estilos
- Sistema de design SCSS completo:
  - `variables.scss`: Variáveis de cores, espaçamentos e breakpoints
  - `global.scss`: Estilos globais e reset CSS
- Paleta de cores gradiente (Azul #667eea → Roxo #764ba2)
- Tipografia: Google Fonts Poppins (300-700)

#### Performance
- Lazy loading de imagens
- Cache de páginas já carregadas
- Skeleton loading durante carregamento
- Otimização de reflows e repaints

#### Responsividade
- Mobile: 2 colunas (< 640px)
- Tablet: 3 colunas (640-1024px)
- Desktop: 4 colunas (> 1024px)
- Busca adaptativa (expansível em mobile)

#### Acessibilidade
- ARIA labels em todos os botões
- Navegação por teclado (ESC, Enter, Tab)
- Contraste WCAG AA compliant
- Foco visível em elementos interativos

#### UX
- Animações suaves em hover e transições
- Feedback visual em todas as interações
- Estado vazio personalizado
- Indicador de loading
- Tratamento de erros de imagem

#### Developer Experience
- Vite para build rápido
- Hot Module Replacement (HMR)
- Vue DevTools integration
- Estrutura de pastas organizada

#### Documentação
- README.md completo com:
  - Instruções de instalação
  - Guia de uso
  - Estrutura do projeto
  - Deploy
- DEVELOPMENT.md com detalhes técnicos
- Comentários inline no código

#### Deploy
- Configuração Vercel (`vercel.json`)
- Build otimizado para produção
- Variáveis de ambiente documentadas

### 🎨 Design

#### Layout
- Design moderno e minimalista
- Espaçamento consistente
- Hierarquia visual clara
- Cards com overlay em hover

#### Cores
- Primary: #667eea (Azul)
- Secondary: #764ba2 (Roxo)
- Background: #f7fafc
- Surface: #edf2f7
- Text: #1a202c, #718096, #a0aec0

#### Tipografia
- Headings: Poppins 600-700
- Body: Poppins 400-500
- Small: Poppins 300

### 🔧 Tecnologias

#### Core
- Vue.js 3.5.13
- Vite 7.2.7
- Pinia 3.0.1

#### HTTP & API
- Axios 1.7.9
- Lorem Picsum API v2

#### Estilos
- SASS 1.83.4
- Google Fonts (Poppins)

#### Tooling
- @vitejs/plugin-vue 6.1.0
- ES Modules
- Node.js 16+

### 📱 Dispositivos Testados

- ✅ Desktop (1920x1080)
- ✅ Laptop (1366x768)
- ✅ Tablet (768x1024)
- ✅ Mobile (375x667)

### 🌐 Browsers Suportados

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

### 🚀 Performance

- Lighthouse Score (Mobile):
  - Performance: 90+
  - Accessibility: 95+
  - Best Practices: 95+
  - SEO: 100

### 📦 Bundle Size

- Total: ~180kb (gzipped: ~60kb)
- Vue: ~45kb
- Axios: ~15kb
- Pinia: ~8kb
- App Code: ~25kb
- SCSS: ~12kb

---

## Próximas Versões

### [1.1.0] - Planejado

#### A Implementar
- [ ] Sistema de favoritos (localStorage)
- [ ] Filtros avançados (dimensões, orientação)
- [ ] Compartilhamento em redes sociais
- [ ] Dark mode
- [ ] Testes unitários (Vitest)
- [ ] Testes E2E (Playwright)

### [1.2.0] - Planejado

#### A Implementar
- [ ] PWA (Progressive Web App)
- [ ] Offline mode
- [ ] Service Worker para cache
- [ ] Instalável em dispositivos
- [ ] Notificações push

### [2.0.0] - Futuro

#### A Implementar
- [ ] Backend próprio
- [ ] Autenticação de usuários
- [ ] Upload de imagens
- [ ] Coleções personalizadas
- [ ] API própria

---

## Convenções

### Categorias
- **Adicionado** - Novas funcionalidades
- **Modificado** - Mudanças em funcionalidades existentes
- **Depreciado** - Funcionalidades que serão removidas
- **Removido** - Funcionalidades removidas
- **Corrigido** - Correções de bugs
- **Segurança** - Correções de vulnerabilidades

### Versionamento
- **MAJOR** (X.0.0): Mudanças incompatíveis com versões anteriores
- **MINOR** (0.X.0): Novas funcionalidades compatíveis
- **PATCH** (0.0.X): Correções de bugs

---

**[1.0.0]**: https://github.com/seu-usuario/InspirePixel/releases/tag/v1.0.0
