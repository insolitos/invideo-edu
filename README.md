# 📹 InVideo Edu - Guia para Professores

[![Deploy Status](https://github.com/usuario/invideo-edu/workflows/🚀%20Deploy%20InVideo%20Edu%20PWA/badge.svg)](https://github.com/usuario/invideo-edu/actions)
[![PWA](https://img.shields.io/badge/PWA-enabled-blue.svg)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Made for Teachers](https://img.shields.io/badge/Made%20for-Teachers-green.svg)](https://github.com/usuario/invideo-edu)

> **Aplicação web gratuita para ajudar professores portugueses a criar vídeos educativos de qualidade usando o InVideo AI**

## 🎯 Visão Geral

O **InVideo Edu** é uma Progressive Web App (PWA) concebida especificamente para educadores portugueses que pretendem usar o InVideo AI na criação de conteúdo pedagógico. A aplicação oferece tutoriais estruturados, templates educativos e um gerador inteligente de guiões.

### ✨ Características Principais

- 📚 **Guias Interactivos**: Tutoriais passo-a-passo adaptados ao contexto educativo português
- 🎨 **Galeria de Templates**: Modelos prontos para diferentes disciplinas
- ⚡ **Gerador de Guiões**: Ferramenta AI para criar scripts estruturados
- 📱 **PWA Nativa**: Instala como app, funciona offline
- 🌐 **Totalmente Responsiva**: Optimizada para mobile, tablet e desktop
- ♿ **Acessível**: Segue diretrizes WCAG 2.1
- 🇵🇹 **Localizada**: Interface e conteúdo em português europeu

## 🚀 Demo Online

👉 **[Experimentar InVideo Edu](https://usuario.github.io/invideo-edu)**

## 📱 Instalação

### Como PWA (Recomendado)
1. Aceder à [demo online](https://usuario.github.io/invideo-edu)
2. Clicar no botão "📱 Instalar App"
3. Confirmar instalação
4. Usar como aplicação nativa!

### Desenvolvimento Local
```bash
# Clonar repositório
git clone https://github.com/usuario/invideo-edu.git
cd invideo-edu

# Servir localmente (Python)
python -m http.server 8000

# Ou com Node.js
npx serve .

# Abrir http://localhost:8000
```

## 🏗️ Arquitetura Técnica

### Stack Tecnológica
- **Frontend**: HTML5, CSS3, JavaScript ES6+
- **PWA**: Service Worker, Web App Manifest
- **Deployment**: GitHub Pages + GitHub Actions
- **Design**: CSS Grid, Flexbox, Responsive Design

### Estrutura do Projeto
```
invideo-edu/
├── 📄 index.html              # Página principal
├── 🎨 styles/
│   └── main.css              # Estilos responsivos
├── ⚡ js/
│   ├── app.js               # Lógica principal
│   ├── data.js              # Base de dados
│   └── sw.js                # Service Worker
├── 📱 assets/
│   └── icons/               # Ícones PWA
├── 🔧 manifest.json          # Manifest PWA
├── 🤖 .github/workflows/
│   └── deploy.yml           # CI/CD automático
└── 📖 README.md             # Este ficheiro
```

### Funcionalidades PWA
- ✅ Instalação nativa (Add to Home Screen)
- ✅ Funcionamento offline (Service Worker)
- ✅ Cache inteligente (Cache-first strategy)
- ✅ Ícones adaptativos
- ✅ Splash screen personalizado
- ✅ Atalhos de aplicação

## 🎓 Conteúdo Educativo

### Guias Disponíveis
| Nível | Título | Duração | Tópicos |
|-------|--------|---------|---------|
| Iniciante | Primeiros Passos | 15 min | Setup, Templates, Texto-para-vídeo |
| Intermédio | Personalização Avançada | 20 min | Voz, Legendas, Branding |
| Intermédio | Vídeos Animados | 25 min | Cartoon, Explicativos |
| Avançado | Quizzes Interactivos | 30 min | Gamificação, Feedback |
| Intermédio | Storytelling | 18 min | Narrativa, Envolvimento |
| Avançado | Realidade Virtual | 35 min | 360º, Imersão |

### Templates por Disciplina
- 📝 **Resumos de Aula** (Todas as disciplinas)
- 🔬 **Explainer Científico** (Física, Química, Biologia)
- 🏛️ **História Interactiva** (História, Geografia)
- 🎮 **Quiz Gamificado** (Matemática, Línguas)
- ⚗️ **Laboratório Virtual** (Ciências experimentais)
- 🌍 **Viagem Virtual** (Geografia, Turismo)

## 🔧 Personalização

### Adicionar Novos Guias
Editar `js/data.js`:
```javascript
export const guides = [
  {
    id: 7,
    title: 'Novo Tutorial',
    desc: 'Descrição do tutorial',
    url: 'https://exemplo.com',
    level: 'Intermédio',
    duration: '20 min',
    tags: ['tag1', 'tag2']
  },
  // ... outros guias
];
```

### Modificar Templates
```javascript
export const templates = [
  {
    id: 7,
    name: 'Novo Template',
    desc: 'Descrição do template',
    preview: '🆕',
    subjects: ['Disciplina'],
    link: 'https://invideo.io/...',
    features: ['Feature 1', 'Feature 2']
  }
];
```

### Customizar Estilos
```css
/* styles/main.css */
:root {
  --primary: #007c89;        /* Cor principal */
  --accent: #ffb703;         /* Cor de destaque */
  --font-family: 'Inter';    /* Fonte principal */
}
```

## 🚀 Deployment

### GitHub Pages (Automático)
1. Fork este repositório
2. Ativar GitHub Pages em Settings > Pages
3. Escolher "GitHub Actions" como source
4. Fazer push para `main` - deploy automático!

### Outros Hosts
- **Netlify**: Arrastar pasta para netlify.com
- **Vercel**: Conectar repositório GitHub
- **Firebase Hosting**: `firebase deploy`
- **Surge.sh**: `surge ./`

### URLs de Exemplo
- GitHub Pages: `https://usuario.github.io/invideo-edu`
- Netlify: `https://invideo-edu.netlify.app`
- Vercel: `https://invideo-edu.vercel.app`

## 🧪 Testes

### Testes de PWA
```bash
# Lighthouse CI
npm install -g lighthouse
lighthouse https://usuario.github.io/invideo-edu --view

# PWA Checklist
- ✅ HTTPS
- ✅ Service Worker
- ✅ Web App Manifest
- ✅ Ícones adequados
- ✅ Funcionamento offline
```

### Testes de Acessibilidade
- ✅ Contraste AA (4.5:1)
- ✅ Navegação por teclado
- ✅ Screen reader compatível
- ✅ Semântica HTML correta
- ✅ ARIA labels apropriados

## 🤝 Contribuir

### Como Contribuir
1. **Fork** o repositório
2. **Clone** o seu fork
3. **Criar** branch: `git checkout -b feature/nova-funcionalidade`
4. **Commit**: `git commit -m "Adicionar nova funcionalidade"`
5. **Push**: `git push origin feature/nova-funcionalidade`
6. **Abrir** Pull Request

### Tipos de Contribuições
- 📚 **Novos tutoriais** sobre InVideo AI
- 🎨 **Templates educativos** adicionais
- 🐛 **Correção de bugs** e melhorias
- 🌍 **Traduções** para outras línguas
- ♿ **Melhorias de acessibilidade**
- 📱 **Otimizações mobile**

### Guidelines
- Usar português europeu
- Seguir convenções de código existentes
- Testar em múltiplos dispositivos
- Incluir documentação relevante

## 📊 Analytics e Métricas

### Lighthouse Score Target
- 🟢 **Performance**: >90
- 🟢 **Accessibility**: >95
- 🟢 **Best Practices**: >90
- 🟢 **SEO**: >90
- 🟢 **PWA**: 100

### Core Web Vitals
- **LCP** (Largest Contentful Paint): <2.5s
- **FID** (First Input Delay): <100ms
- **CLS** (Cumulative Layout Shift): <0.1

## 🛡️ Segurança

### Content Security Policy
```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; 
               script-src 'self' 'unsafe-inline';
               style-src 'self' 'unsafe-inline';
               img-src 'self' data: https:;
               connect-src 'self' https:;">
```

### Privacy
- 🔒 **Sem cookies** de tracking
- 🔒 **Sem dados pessoais** coletados
- 🔒 **Funciona offline** completamente
- 🔒 **Código open-source** auditável

## 📄 Licença

```
MIT License

Copyright (c) 2025 InVideo Edu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 🙏 Agradecimentos

- **InVideo Inc.** pela excelente plataforma de criação de vídeos
- **Comunidade educativa portuguesa** pelo feedback e sugestões
- **Contributors** que tornaram este projeto possível
- **Open source community** pelas ferramentas utilizadas

## 📞 Suporte

### Problemas com a Aplicação
- 🐛 [Reportar Bug](https://github.com/usuario/invideo-edu/issues/new?template=bug_report.md)
- 💡 [Sugerir Funcionalidade](https://github.com/usuario/invideo-edu/issues/new?template=feature_request.md)
- 💬 [Discussões](https://github.com/usuario/invideo-edu/discussions)

### Suporte InVideo Oficial
- 📖 [Documentação](https://help.invideo.io/)
- 💬 [Suporte](https://invideo.io/contact/)
- 🎓 [Academia](https://academy.invideo.io/)

---

<div align="center">

**🇵🇹 Feito com ❤️ para professores portugueses**

[🌟 Dar Star](https://github.com/usuario/invideo-edu/stargazers) • 
[🐛 Reportar Issue](https://github.com/usuario/invideo-edu/issues) • 
[💬 Discussão](https://github.com/usuario/invideo-edu/discussions) • 
[📢 Partilhar](https://twitter.com/intent/tweet?text=InVideo%20Edu%20-%20App%20gratuita%20para%20professores%20criarem%20vídeos%20educativos&url=https://github.com/usuario/invideo-edu)

</div>