# 🚀 Guia de Deploy - InspirePixel

Este guia fornece instruções detalhadas para fazer o deploy do InspirePixel em diferentes plataformas.

## 📋 Pré-requisitos

Antes de fazer o deploy, certifique-se de que:

- ✅ O código está no GitHub
- ✅ Todos os testes passaram localmente
- ✅ O build está funcionando: `npm run build`
- ✅ Não há erros no console
- ✅ A aplicação foi testada em diferentes dispositivos

## 🎯 Vercel (Recomendado)

Vercel é a plataforma recomendada para deploy de projetos Vue.js com Vite.

### Método 1: Deploy via Dashboard (Mais Fácil)

#### Passo 1: Prepare o Repositório

```bash
# Certifique-se de que está tudo commitado
git add .
git commit -m "chore: preparar para deploy"
git push origin main
```

#### Passo 2: Importe no Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Faça login com sua conta GitHub
3. Clique em **"Add New Project"**
4. Selecione o repositório **InspirePixel**
5. Configure o projeto:

```
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

6. Clique em **"Deploy"**

#### Passo 3: Aguarde o Deploy

- O Vercel irá automaticamente:
  - Instalar dependências
  - Executar o build
  - Fazer deploy
  - Gerar uma URL de produção

#### Resultado

```
✅ Deployment URL: https://inspirepixel.vercel.app
✅ Branch Deploys: Habilitado
✅ Auto-redeploy: Habilitado em push
```

### Método 2: Deploy via CLI

#### Instalação da CLI

```bash
npm install -g vercel
```

#### Login

```bash
vercel login
```

#### Deploy de Produção

```bash
# Na pasta raiz do projeto
vercel --prod
```

#### Deploy de Preview

```bash
# Para testar antes de produção
vercel
```

### Configurações Avançadas (vercel.json)

O projeto já inclui `vercel.json` com configurações otimizadas:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Variáveis de Ambiente (Opcional)

Se você tiver variáveis de ambiente:

1. No Dashboard Vercel, vá em **Settings** → **Environment Variables**
2. Adicione suas variáveis:

```
VITE_API_BASE_URL=https://picsum.photos/v2
VITE_IMAGES_PER_PAGE=30
```

3. Redeploy o projeto

## 🌐 Netlify

### Deploy via Dashboard

#### Passo 1: Build Local

```bash
npm run build
```

#### Passo 2: Conectar ao Netlify

1. Acesse [netlify.com](https://netlify.com)
2. Clique em **"Add new site"** → **"Import an existing project"**
3. Conecte com GitHub
4. Selecione o repositório

#### Passo 3: Configurações de Build

```
Base directory: (deixe vazio)
Build command: npm run build
Publish directory: dist
```

#### Passo 4: Deploy

Clique em **"Deploy site"**

### Deploy via CLI

```bash
# Instalar CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod --dir=dist
```

### netlify.toml (Opcional)

Crie um arquivo `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## 📦 GitHub Pages

### Configuração

#### Passo 1: Instalar gh-pages

```bash
npm install -D gh-pages
```

#### Passo 2: Atualizar vite.config.js

```javascript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/InspirePixel/' // Nome do repositório
})
```

#### Passo 3: Adicionar Scripts

No `package.json`:

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

#### Passo 4: Deploy

```bash
npm run deploy
```

#### Passo 5: Configurar GitHub Pages

1. No repositório GitHub, vá em **Settings** → **Pages**
2. Source: **gh-pages branch**
3. Aguarde alguns minutos

**URL:** `https://seu-usuario.github.io/InspirePixel/`

## ☁️ Outros Provedores

### Render

```yaml
# render.yaml
services:
  - type: web
    name: inspirepixel
    env: static
    buildCommand: npm install && npm run build
    staticPublishPath: dist
```

### Railway

```bash
# railway.json
{
  "build": {
    "builder": "NIXPACKS"
  },
  "deploy": {
    "numReplicas": 1,
    "startCommand": "npm run build && npm run preview"
  }
}
```

### Firebase Hosting

```bash
# Instalar CLI
npm install -g firebase-tools

# Login
firebase login

# Inicializar
firebase init hosting

# Configurações:
# Public directory: dist
# Single-page app: Yes
# GitHub integration: Yes (opcional)

# Deploy
firebase deploy
```

## 🔧 Otimizações para Produção

### 1. Build Otimizado

Já configurado no `vite.config.js`, mas você pode adicionar:

```javascript
export default defineConfig({
  plugins: [vue()],
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'vue-vendor': ['vue', 'pinia'],
          'axios-vendor': ['axios']
        }
      }
    }
  }
})
```

### 2. Compressão Gzip

Adicione ao `vercel.json`:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

### 3. CDN para Assets

Use CDN para Google Fonts e ícones (já implementado).

### 4. Lazy Loading de Componentes

Para componentes pesados:

```javascript
const ImageModal = defineAsyncComponent(() =>
  import('./components/ImageModal.vue')
)
```

## 📊 Monitoramento Pós-Deploy

### Vercel Analytics

```bash
npm install @vercel/analytics
```

No `main.js`:

```javascript
import { inject } from '@vercel/analytics'
inject()
```

### Google Analytics

No `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

## 🐛 Troubleshooting

### Erro: "Cannot find module"

```bash
# Limpar cache e reinstalar
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Erro: "404 ao recarregar página"

Certifique-se de ter configurado rewrites/redirects para SPA.

**Vercel:** Já configurado em `vercel.json`
**Netlify:** Adicionar `_redirects` em `public/`:

```
/*    /index.html   200
```

### Erro: "Build Timeout"

Aumente o timeout na plataforma ou otimize o build:

```json
{
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "maxDuration": 60
      }
    }
  ]
}
```

### Erro: "Module not found" em produção

Verifique imports case-sensitive:

```javascript
// ❌ Errado
import Header from './Components/Header.vue'

// ✅ Correto
import Header from './components/Header.vue'
```

## 🔒 Segurança

### Headers de Segurança

Adicione ao `vercel.json`:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

### HTTPS

Todas as plataformas mencionadas fornecem HTTPS gratuito.

## 📈 Performance

### Lighthouse CI

Para rodar Lighthouse em CI/CD:

```bash
npm install -g @lhci/cli

# Executar
lhci autorun
```

### Configuração (lighthouserc.js)

```javascript
module.exports = {
  ci: {
    collect: {
      staticDistDir: './dist',
    },
    assert: {
      preset: 'lighthouse:recommended',
    },
  },
};
```

## ✅ Checklist Pré-Deploy

- [ ] Código commitado e pushed
- [ ] `npm run build` funciona sem erros
- [ ] Testado localmente com `npm run preview`
- [ ] Sem console.log/debugger no código
- [ ] README.md atualizado com URL de produção
- [ ] Variáveis de ambiente configuradas
- [ ] Meta tags e SEO configurados
- [ ] Favicon customizado
- [ ] Analytics configurado (opcional)
- [ ] Domínio customizado configurado (opcional)

## 🎉 Pós-Deploy

1. **Teste a URL de produção** em diferentes dispositivos
2. **Execute Lighthouse** para verificar performance
3. **Configure monitoramento** (opcional)
4. **Adicione badge** ao README:

```markdown
![Vercel](https://vercelbadge.vercel.app/api/seu-usuario/InspirePixel)
```

5. **Compartilhe o projeto!** 🚀

## 📞 Suporte

- **Vercel Docs**: https://vercel.com/docs
- **Netlify Docs**: https://docs.netlify.com
- **Vite Docs**: https://vitejs.dev/guide/static-deploy

---

**🎊 Parabéns pelo deploy! Seu InspirePixel está no ar!**
