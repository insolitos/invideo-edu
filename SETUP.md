# 🚀 Instruções de Setup e Deploy

## 📋 Pré-requisitos

- Conta no GitHub
- Git instalado localmente
- Editor de código (recomendado: VS Code)
- Navegador moderno (Chrome, Firefox, Safari, Edge)

## 🔧 Setup Local

### 1. Clonar o Repositório
```bash
git clone https://github.com/SEU_USERNAME/invideo-edu.git
cd invideo-edu
```

### 2. Configurar Git
```bash
git config user.name "Seu Nome"
git config user.email "seu.email@exemplo.com"
```

### 3. Servir Localmente

#### Opção A: Python (mais simples)
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

#### Opção B: Node.js
```bash
npx serve .
# ou
npm install -g live-server
live-server
```

#### Opção C: VS Code Live Server
1. Instalar extensão "Live Server"
2. Botão direito em `index.html` → "Open with Live Server"

### 4. Testar
- Abrir http://localhost:8000
- Verificar se todas as secções funcionam
- Testar PWA (botão instalar)
- Testar offline (desligar wifi)

## 🌐 Deploy no GitHub Pages

### 1. Criar Repositório GitHub
1. Ir para https://github.com/new
2. Nome: `invideo-edu`
3. Descrição: "PWA para professores usarem InVideo AI"
4. Público ✅
5. Não adicionar README (já temos)
6. Create repository

### 2. Conectar Local ao GitHub
```bash
git remote add origin https://github.com/SEU_USERNAME/invideo-edu.git
git branch -M main
git add .
git commit -m "🎉 Primeira versão do InVideo Edu"
git push -u origin main
```

### 3. Ativar GitHub Pages
1. Ir para Settings do repositório
2. Scroll até "Pages"
3. Source: "GitHub Actions"
4. Salvar

### 4. Aguardar Deploy
- GitHub Actions fará deploy automaticamente
- Verificar em Actions tab
- URL será: `https://SEU_USERNAME.github.io/invideo-edu`

## 🔄 Workflow de Desenvolvimento

### Para cada nova funcionalidade:
```bash
# 1. Criar branch
git checkout -b feature/nova-funcionalidade

# 2. Fazer alterações
# ... editar ficheiros ...

# 3. Testar localmente
python -m http.server 8000

# 4. Commit e push
git add .
git commit -m "✨ Adicionar nova funcionalidade"
git push origin feature/nova-funcionalidade

# 5. Criar Pull Request no GitHub
# 6. Merge para main (deploy automático)
```

## 🎨 Personalização

### Alterar Cores
Em `styles/main.css`:
```css
:root {
  --primary: #007c89;     /* Azul-petróleo */
  --accent: #ffb703;      /* Laranja */
  --secondary: #f8f9fa;   /* Cinza claro */
}
```

### Adicionar Novo Guia
Em `js/data.js`:
```javascript
export const guides = [
  // ... guias existentes
  {
    id: 99,
    title: 'Meu Novo Tutorial',
    desc: 'Descrição do tutorial',
    url: 'https://youtube.com/watch?v=...',
    level: 'Intermédio',
    duration: '15 min',
    tags: ['tag1', 'tag2']
  }
];
```

### Modificar Gerador de Guiões
Em `js/app.js`, função `createDetailedScript()`:
```javascript
createDetailedScript(data) {
  // Personalizar lógica de geração
  return `SEU TEMPLATE PERSONALIZADO`;
}
```

## 📱 Testes PWA

### Lighthouse
```bash
# Instalar Lighthouse
npm install -g lighthouse

# Testar
lighthouse https://SEU_USERNAME.github.io/invideo-edu --view
```

### Checklist PWA
- [ ] Service Worker registado
- [ ] Manifest válido
- [ ] Ícones em todos os tamanhos
- [ ] Funciona offline
- [ ] Instalável
- [ ] HTTPS (GitHub Pages tem automaticamente)

### Testar em Dispositivos
- Desktop: Chrome, Firefox, Safari, Edge
- Mobile: Chrome Android, Safari iOS
- Tablet: Ambos os orientações

## 🐛 Resolução de Problemas

### Service Worker não funciona
```javascript
// Em js/app.js, adicionar debug:
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./js/sw.js')
    .then(reg => console.log('SW registrado:', reg))
    .catch(err => console.log('SW erro:', err));
}
```

### Manifest não carrega
- Verificar se `manifest.json` está na raiz
- Verificar JSON válido
- Ver Network tab no DevTools

### Ícones não aparecem
- Gerar ícones reais (recomendado: realfavicongenerator.net)
- Verificar tamanhos corretos
- Testar em diferentes dispositivos

### GitHub Pages não deploy
- Verificar Actions tab para erros
- Confirmar que workflow está ativo
- Verificar permissões do repositório

## 🔧 Ferramentas Úteis

### Desenvolvimento
- **VS Code**: Editor principal
- **Live Server**: Preview instantâneo
- **DevTools**: Debug e lighthouse
- **Git Graph**: Visualizar branches

### PWA
- **Workbox**: Service Worker avançado
- **PWA Builder**: Microsoft PWA tools
- **Lighthouse**: Audit e scores

### Design
- **Canva**: Criar ícones/banners
- **Figma**: Design UI/UX
- **RealFaviconGenerator**: Ícones PWA

## 📊 Monitorização

### Analytics (opcional)
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

### Error Tracking
```javascript
// Em js/app.js
window.addEventListener('error', (e) => {
  console.error('App Error:', e.error);
  // Enviar para serviço de tracking se necessário
});
```

## 🎯 Próximos Passos

1. **Melhorar Ícones**: Criar ícones profissionais
2. **Adicionar Mais Guias**: Baseado em feedback
3. **Sistema de Favoritos**: LocalStorage
4. **Dark Mode**: Tema escuro
5. **Offline First**: Mais conteúdo offline
6. **Notificações**: Push notifications
7. **Partilha**: Social sharing

## 💡 Dicas Avançadas

### Performance
- Otimizar imagens (WebP)
- Minificar CSS/JS
- Lazy loading
- Service Worker cache strategy

### SEO
- Meta tags completas
- Structured data
- Sitemap.xml
- Open Graph tags

### Acessibilidade
- ARIA labels
- Keyboard navigation
- Color contrast
- Screen reader testing

---

🎉 **Parabéns! O seu InVideo Edu está pronto para o mundo!**
