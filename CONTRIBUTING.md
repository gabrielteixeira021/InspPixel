# 🤝 Contribuindo para InspirePixel

Obrigado por considerar contribuir com o InspirePixel! Este documento fornece diretrizes para contribuir com o projeto.

## 📋 Código de Conduta

Ao participar deste projeto, você concorda em manter um ambiente respeitoso e acolhedor para todos.

### Nossas Promessas

- Usar linguagem acolhedora e inclusiva
- Respeitar pontos de vista e experiências diferentes
- Aceitar críticas construtivas graciosamente
- Focar no que é melhor para a comunidade

## 🚀 Como Começar

### 1. Fork o Repositório

```bash
# Clone seu fork
git clone https://github.com/seu-usuario/InspirePixel.git
cd InspirePixel

# Adicione o repositório original como upstream
git remote add upstream https://github.com/original-usuario/InspirePixel.git
```

### 2. Configure o Ambiente

```bash
# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

### 3. Crie uma Branch

```bash
# Atualize sua main
git checkout main
git pull upstream main

# Crie uma branch para sua feature/fix
git checkout -b feature/nome-da-feature
# ou
git checkout -b fix/nome-do-bug
```

## 📝 Convenções de Código

### Estilo de Código

Seguimos os padrões do Vue.js e ES6+:

#### Vue Components

```vue
<script setup>
// 1. Imports
import { ref, computed, onMounted } from 'vue'

// 2. Props e Emits
const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['update'])

// 3. Reactive State
const count = ref(0)

// 4. Computed
const doubleCount = computed(() => count.value * 2)

// 5. Methods
const increment = () => {
  count.value++
}

// 6. Lifecycle Hooks
onMounted(() => {
  console.log('Component mounted')
})
</script>

<template>
  <!-- Use kebab-case para componentes -->
  <div class="component-wrapper">
    <child-component :data="data" @update="handleUpdate" />
  </div>
</template>

<style lang="scss" scoped>
// Use BEM-like naming
.component-wrapper {
  padding: 16px;
  
  &__title {
    font-weight: 600;
  }
  
  &--active {
    background: blue;
  }
}
</style>
```

#### JavaScript

```javascript
// Use const/let, nunca var
const myConst = 'value'
let myLet = 0

// Arrow functions quando apropriado
const myFunction = (param) => {
  return param * 2
}

// Destructuring
const { name, age } = person
const [first, second] = array

// Template literals
const message = `Hello, ${name}!`

// Async/await
const fetchData = async () => {
  try {
    const response = await axios.get('/api')
    return response.data
  } catch (error) {
    console.error(error)
  }
}
```

#### SCSS

```scss
// Use variáveis
@import '../assets/styles/variables.scss';

.component {
  color: $text-primary;
  padding: $spacing-md;
  border-radius: $border-radius;
  
  // Nested rules (max 3 níveis)
  &__element {
    font-size: 14px;
    
    &--modifier {
      font-weight: bold;
    }
  }
  
  // Media queries
  @media (max-width: $breakpoint-mobile) {
    padding: $spacing-sm;
  }
}
```

### Nomenclatura

#### Arquivos
- Componentes: `PascalCase.vue` (ex: `ImageCard.vue`)
- Stores: `camelCase.js` (ex: `imageStore.js`)
- Utilitários: `camelCase.js` (ex: `helpers.js`)
- Estilos: `kebab-case.scss` (ex: `global-styles.scss`)

#### Variáveis e Funções
- JavaScript: `camelCase`
- SCSS: `kebab-case` ou `$kebab-case`
- CSS classes: `kebab-case`
- Constantes: `UPPER_SNAKE_CASE`

## 🧪 Testes

Antes de submeter seu PR, certifique-se de:

```bash
# Verificar build
npm run build

# Testar preview
npm run preview
```

### Checklist de Testes Manuais

- [ ] Testado no Chrome
- [ ] Testado no Firefox
- [ ] Testado no Safari (se possível)
- [ ] Responsivo em mobile (375px)
- [ ] Responsivo em tablet (768px)
- [ ] Responsivo em desktop (1920px)
- [ ] Sem erros no console
- [ ] Sem warnings do Vue DevTools

## 📦 Commits

### Formato de Commits

Usamos [Conventional Commits](https://www.conventionalcommits.org/):

```
tipo(escopo): descrição curta

Descrição detalhada (opcional)

Footer (opcional)
```

#### Tipos

- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `docs`: Mudanças na documentação
- `style`: Formatação, espaços em branco
- `refactor`: Refatoração de código
- `perf`: Melhorias de performance
- `test`: Adicionar/modificar testes
- `chore`: Tarefas de manutenção

#### Exemplos

```bash
feat(gallery): adicionar zoom em imagens

fix(search): corrigir busca case-sensitive

docs(readme): atualizar instruções de instalação

style(header): ajustar espaçamento do logo

refactor(store): simplificar lógica de cache

perf(images): implementar lazy loading

chore(deps): atualizar dependências
```

## 🔄 Pull Requests

### Processo

1. **Atualize sua branch**
   ```bash
   git checkout main
   git pull upstream main
   git checkout feature/sua-feature
   git rebase main
   ```

2. **Faça push**
   ```bash
   git push origin feature/sua-feature
   ```

3. **Abra um PR**
   - Use um título descritivo
   - Preencha o template de PR
   - Referencie issues relacionadas

### Template de PR

```markdown
## Descrição

Breve descrição das mudanças.

## Tipo de Mudança

- [ ] Bug fix
- [ ] Nova feature
- [ ] Breaking change
- [ ] Documentação

## Checklist

- [ ] Código segue o style guide
- [ ] Testado localmente
- [ ] Documentação atualizada
- [ ] Sem warnings/erros
- [ ] Build passa com sucesso

## Screenshots (se aplicável)

Adicione screenshots das mudanças visuais.

## Issues Relacionadas

Fixes #123
```

## 🐛 Reportar Bugs

### Template de Issue

```markdown
## Descrição do Bug

Descrição clara e concisa do bug.

## Passos para Reproduzir

1. Vá para '...'
2. Clique em '...'
3. Role até '...'
4. Veja o erro

## Comportamento Esperado

O que deveria acontecer.

## Comportamento Atual

O que está acontecendo.

## Screenshots

Se aplicável, adicione screenshots.

## Ambiente

- OS: [ex: Windows 11]
- Browser: [ex: Chrome 120]
- Versão: [ex: 1.0.0]

## Contexto Adicional

Qualquer outra informação relevante.
```

## 💡 Sugerir Features

### Template de Feature Request

```markdown
## Problema a Resolver

Descrição clara do problema que a feature resolve.

## Solução Proposta

Como você imagina que isso funcionaria?

## Alternativas Consideradas

Outras abordagens que você considerou.

## Contexto Adicional

Screenshots, mockups, exemplos, etc.
```

## 🎨 Contribuições de Design

Contribuições de design são muito bem-vindas!

### O que você pode contribuir:

- Melhorias no UI/UX
- Novos temas
- Ícones customizados
- Animações
- Mockups de novas features

### Formato:

- Figma (preferido)
- Adobe XD
- Sketch
- Protótipos em código

## 📚 Documentação

Contribuições para documentação são muito valiosas:

- Corrigir erros
- Melhorar explicações
- Adicionar exemplos
- Traduzir para outros idiomas
- Criar tutoriais

## 🌟 Reconhecimento

Todos os contribuidores serão adicionados ao README.md na seção de contribuidores.

## 📞 Dúvidas?

- Abra uma issue com a tag `question`
- Envie um email para [seu-email]
- Entre em contato via [rede social]

## 📜 Licença

Ao contribuir, você concorda que suas contribuições serão licenciadas sob a mesma licença do projeto.

---

**Obrigado por contribuir! 🎉**
