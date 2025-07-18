// InVideo Edu - Aplicação Principal
import { guides, templates, subjects, videoTypes, tips, features } from './data.js';

class InVideoEduApp {
    constructor() {
        this.currentRoute = '';
        this.deferredPrompt = null;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.registerServiceWorker();
        this.setupPWAInstall();
        this.handleRouting();
    }

    setupEventListeners() {
        // Menu toggle
        const menuBtn = document.getElementById('menuBtn');
        const menu = document.getElementById('menu');

        menuBtn.addEventListener('click', () => {
            menu.classList.toggle('active');
        });

        // Navigation
        window.addEventListener('hashchange', () => this.handleRouting());
        window.addEventListener('load', () => this.handleRouting());

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('nav')) {
                menu.classList.remove('active');
            }
        });

        // Form submissions
        document.addEventListener('submit', (e) => this.handleFormSubmit(e));
    }

    handleRouting() {
        const route = window.location.hash.replace('#', '') || 'guias';
        this.currentRoute = route;
        this.render(route);

        // Update active nav item
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${route}`);
        });
    }

    render(route) {
        const content = document.getElementById('content');
        content.innerHTML = this.getRouteContent(route);
        content.classList.add('fade-in');

        setTimeout(() => content.classList.remove('fade-in'), 600);
    }

    getRouteContent(route) {
        switch (route) {
            case 'guias':
                return this.renderGuides();
            case 'modelos':
                return this.renderTemplates();
            case 'gerador':
                return this.renderGenerator();
            case 'sobre':
                return this.renderAbout();
            default:
                return this.renderGuides();
        }
    }

    renderGuides() {
        const guidesByLevel = this.groupBy(guides, 'level');

        return `
            <section id="guias">
                <h2>📚 Guias de Aprendizagem</h2>
                <p style="text-align: center; color: var(--text-light); margin-bottom: 2rem;">
                    Tutoriais práticos para dominar o InVideo AI na educação
                </p>

                ${Object.entries(guidesByLevel).map(([level, levelGuides]) => `
                    <div class="level-section">
                        <h3>Nível ${level}</h3>
                        <div class="grid">
                            ${levelGuides.map(guide => `
                                <article class="card">
                                    <div class="guide-header">
                                        <h3>${guide.title}</h3>
                                        <div class="guide-meta">
                                            <span class="duration">⏱️ ${guide.duration}</span>
                                            <span class="level">${guide.level}</span>
                                        </div>
                                    </div>
                                    <p>${guide.desc}</p>
                                    <div class="tags">
                                        ${guide.tags.map(tag => `<span class="tag">#${tag}</span>`).join('')}
                                    </div>
                                    <a href="${guide.url}" target="_blank" class="btn btn-primary">
                                        📖 Abrir Tutorial
                                    </a>
                                </article>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}

                <div class="tips-section">
                    <h3>💡 Dicas Rápidas</h3>
                    <div class="tips-grid">
                        ${tips.slice(0, 6).map(tip => `
                            <div class="tip-card">
                                <span class="tip-icon">💡</span>
                                <p>${tip}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>
        `;
    }

    renderTemplates() {
        const templatesBySubject = this.groupBy(templates, 'subjects');

        return `
            <section id="modelos">
                <h2>🎨 Galeria de Modelos</h2>
                <p style="text-align: center; color: var(--text-light); margin-bottom: 2rem;">
                    Templates prontos a usar para diferentes disciplinas
                </p>

                <div class="filter-section">
                    <h3>Filtrar por Disciplina:</h3>
                    <div class="filter-buttons">
                        <button class="filter-btn active" data-filter="all">Todos</button>
                        ${subjects.slice(0, 8).map(subject => `
                            <button class="filter-btn" data-filter="${subject}">${subject}</button>
                        `).join('')}
                    </div>
                </div>

                <div class="template-grid">
                    ${templates.map(template => `
                        <article class="template-card" data-subjects="${template.subjects.join(',')}">
                            <div class="template-preview">
                                ${template.preview}
                            </div>
                            <div class="template-info">
                                <h3>${template.name}</h3>
                                <p>${template.desc}</p>
                                <div class="template-subjects">
                                    ${template.subjects.map(subject => `
                                        <span class="subject-tag">${subject}</span>
                                    `).join('')}
                                </div>
                                <div class="template-features">
                                    ${template.features.map(feature => `
                                        <span class="feature">✓ ${feature}</span>
                                    `).join('')}
                                </div>
                                <a href="${template.link}" target="_blank" class="btn">
                                    🚀 Usar Template
                                </a>
                            </div>
                        </article>
                    `).join('')}
                </div>

                <div class="template-help">
                    <h3>Como usar os templates?</h3>
                    <ol>
                        <li>Clique em "Usar Template" para abrir no InVideo</li>
                        <li>Faça login na sua conta InVideo (registe-se se necessário)</li>
                        <li>Personalize o texto, imagens e cores</li>
                        <li>Adicione a sua narração ou use voz AI</li>
                        <li>Exporte e partilhe com os seus alunos!</li>
                    </ol>
                </div>
            </section>
        `;
    }

    renderGenerator() {
        return `
            <section id="gerador">
                <h2>⚡ Gerador de Guiões</h2>
                <p style="text-align: center; color: var(--text-light); margin-bottom: 2rem;">
                    Crie guiões estruturados para os seus vídeos educativos
                </p>

                <form id="scriptForm" class="script-form">
                    <div class="form-row">
                        <div class="form-group">
                            <label for="tema">📝 Tema da Aula *</label>
                            <input type="text" id="tema" name="tema" required 
                                   placeholder="Ex: Sistema Digestivo, Revolução Francesa...">
                        </div>

                        <div class="form-group">
                            <label for="disciplina">📚 Disciplina</label>
                            <select id="disciplina" name="disciplina">
                                ${subjects.map(subject => `
                                    <option value="${subject}">${subject}</option>
                                `).join('')}
                            </select>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-group">
                            <label for="duracao">⏱️ Duração (minutos)</label>
                            <input type="number" id="duracao" name="duracao" min="1" max="30" value="5">
                        </div>

                        <div class="form-group">
                            <label for="anoEscolar">🎓 Ano Escolar</label>
                            <select id="anoEscolar" name="anoEscolar">
                                <option value="1-4">1º - 4º ano</option>
                                <option value="5-6">5º - 6º ano</option>
                                <option value="7-9">7º - 9º ano</option>
                                <option value="10-12">10º - 12º ano</option>
                                <option value="superior">Ensino Superior</option>
                            </select>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="tipoVideo">🎬 Tipo de Vídeo</label>
                        <select id="tipoVideo" name="tipoVideo">
                            ${videoTypes.map(type => `
                                <option value="${type.id}">${type.name} - ${type.desc}</option>
                            `).join('')}
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="objetivos">🎯 Objetivos de Aprendizagem (opcional)</label>
                        <textarea id="objetivos" name="objetivos" rows="3" 
                                  placeholder="O que pretende que os alunos aprendam..."></textarea>
                    </div>

                    <div class="form-actions">
                        <button type="submit" class="btn btn-primary">
                            ⚡ Gerar Guião
                        </button>
                        <button type="button" id="clearForm" class="btn">
                            🗑️ Limpar
                        </button>
                    </div>
                </form>

                <div id="output" class="output-section"></div>

                <div class="script-tips">
                    <h3>💡 Dicas para Guiões Eficazes</h3>
                    <div class="tips-grid">
                        <div class="tip">
                            <strong>Início Cativante:</strong> Comece com uma pergunta ou facto interessante
                        </div>
                        <div class="tip">
                            <strong>Linguagem Clara:</strong> Use vocabulário adequado ao ano escolar
                        </div>
                        <div class="tip">
                            <strong>Elementos Visuais:</strong> Inclua descrições do que mostrar no ecrã
                        </div>
                        <div class="tip">
                            <strong>Pausas Estratégicas:</strong> Marque momentos para reflexão
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    renderAbout() {
        return `
            <section id="sobre">
                <h2>ℹ️ Sobre o InVideo Edu</h2>

                <div class="about-content">
                    <div class="about-intro">
                        <h3>🎯 Missão</h3>
                        <p>Democratizar a criação de vídeos educativos de qualidade, capacitando professores portugueses a usar o InVideo AI de forma eficaz e pedagogicamente fundamentada.</p>
                    </div>

                    <div class="features-comparison">
                        <h3>✨ Funcionalidades do InVideo AI</h3>
                        <div class="comparison-grid">
                            <div class="feature-column">
                                <h4>🆓 Plano Gratuito</h4>
                                <ul>
                                    ${features.basic.map(feature => `<li>✓ ${feature}</li>`).join('')}
                                </ul>
                            </div>
                            <div class="feature-column">
                                <h4>💎 Plano Premium</h4>
                                <ul>
                                    ${features.premium.map(feature => `<li>✓ ${feature}</li>`).join('')}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="app-info">
                        <h3>📱 Sobre esta Aplicação</h3>
                        <div class="info-grid">
                            <div class="info-card">
                                <h4>🛠️ Tecnologia</h4>
                                <p>Progressive Web App (PWA) construída com HTML5, CSS3 e JavaScript moderno. Funciona offline e pode ser instalada como aplicação nativa.</p>
                            </div>
                            <div class="info-card">
                                <h4>🎨 Design</h4>
                                <p>Interface responsiva e acessível, seguindo as melhores práticas de UX/UI e diretrizes de acessibilidade WCAG 2.1.</p>
                            </div>
                            <div class="info-card">
                                <h4>📚 Conteúdo</h4>
                                <p>Baseado em práticas pedagógicas comprovadas e funcionalidades oficiais do InVideo AI, especialmente adaptado para o contexto educativo português.</p>
                            </div>
                            <div class="info-card">
                                <h4>🔄 Atualizações</h4>
                                <p>Conteúdo regularmente atualizado com novos tutoriais, templates e funcionalidades do InVideo AI.</p>
                            </div>
                        </div>
                    </div>

                    <div class="contact-section">
                        <h3>📞 Suporte e Contacto</h3>
                        <p>Esta aplicação é um projeto open-source. Para sugestões, melhorias ou reportar problemas:</p>
                        <div class="contact-buttons">
                            <a href="https://github.com/usuario/invideo-edu" class="btn" target="_blank">
                                📁 GitHub Repository
                            </a>
                            <a href="https://invideo.io/help/" class="btn btn-primary" target="_blank">
                                💬 Suporte Oficial InVideo
                            </a>
                        </div>
                    </div>

                    <div class="disclaimer">
                        <h3>⚖️ Aviso Legal</h3>
                        <p><small>Esta aplicação é independente e não está oficialmente afiliada com a InVideo. É um projeto educativo desenvolvido para ajudar professores portugueses. O InVideo AI é uma marca registada da InVideo Inc.</small></p>
                    </div>
                </div>
            </section>
        `;
    }

    handleFormSubmit(e) {
        if (e.target.id === 'scriptForm') {
            e.preventDefault();
            this.generateScript(e.target);
        }
    }

    generateScript(form) {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        const script = this.createDetailedScript(data);
        const output = document.getElementById('output');

        output.innerHTML = `
            <div class="script-result">
                <h3>📋 Guião Gerado</h3>
                <div class="script-actions">
                    <button onclick="navigator.clipboard.writeText(this.nextElementSibling.textContent)" class="btn">
                        📋 Copiar
                    </button>
                    <button onclick="this.closest('.script-result').querySelector('.script-content').style.display = this.closest('.script-result').querySelector('.script-content').style.display === 'none' ? 'block' : 'none'" class="btn">
                        👁️ Mostrar/Ocultar
                    </button>
                </div>
                <pre class="script-content">${script}</pre>

                <div class="next-steps">
                    <h4>🚀 Próximos Passos</h4>
                    <ol>
                        <li>Copie o guião acima</li>
                        <li>Aceda ao <a href="https://invideo.io" target="_blank">InVideo AI</a></li>
                        <li>Cole o guião na ferramenta "Text to Video"</li>
                        <li>Personalize visuais e narração</li>
                        <li>Exporte e partilhe!</li>
                    </ol>
                </div>
            </div>
        `;

        output.scrollIntoView({ behavior: 'smooth' });
    }

    createDetailedScript(data) {
        const videoType = videoTypes.find(type => type.id === data.tipoVideo);
        const duration = parseInt(data.duracao);

        return `🎬 GUIÃO PARA VÍDEO EDUCATIVO
═══════════════════════════════════════

📋 INFORMAÇÕES GERAIS
━━━━━━━━━━━━━━━━━━━━━
Tema: ${data.tema}
Disciplina: ${data.disciplina}
Ano Escolar: ${data.anoEscolar}
Duração Total: ${duration} minutos
Tipo: ${videoType.name}

🎯 OBJETIVOS
━━━━━━━━━━━━
${data.objetivos || 'Os alunos irão compreender os conceitos principais de ' + data.tema}

📝 ESTRUTURA DO VÍDEO
━━━━━━━━━━━━━━━━━━━━━
${this.generateVideoStructure(videoType, data, duration)}

🎨 ELEMENTOS VISUAIS SUGERIDOS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Título animado com o tema
- Diagramas explicativos simples
- Cores contrastantes para melhor legibilidade
- Transições suaves entre secções
- Ícones representativos do tema

🎵 ÁUDIO E NARRAÇÃO
━━━━━━━━━━━━━━━━━━━
- Tom: Amigável e educativo
- Velocidade: Moderada (adequada ao ano escolar)
- Pausas: Estratégicas para absorção
- Música de fundo: Suave e não distratora

💡 DICAS DE PRODUÇÃO
━━━━━━━━━━━━━━━━━━━━
- Use o template "${this.suggestTemplate(data.disciplina)}" no InVideo
- Inclua legendas em português
- Teste a compreensão com um colega antes de publicar
- Mantenha elementos visuais consistentes
- Adicione call-to-action no final

🔗 PROMPT PARA INVIDEO AI
━━━━━━━━━━━━━━━━━━━━━━━━━
"Criar vídeo educativo sobre ${data.tema} para alunos do ${data.anoEscolar}. 
Duração ${duration} minutos. Estilo ${videoType.name.toLowerCase()}. 
Tom educativo e amigável. Incluir elementos visuais explicativos e 
transições suaves. Narração em português europeu."

📅 Gerado em: ${new Date().toLocaleDateString('pt-PT')}
🤖 InVideo Edu - Assistente para Professores`;
    }

    generateVideoStructure(videoType, data, duration) {
        const timePerSection = duration / videoType.structure.length;

        return videoType.structure.map((section, index) => {
            const startTime = Math.round(index * timePerSection);
            const endTime = Math.round((index + 1) * timePerSection);

            return `${index + 1}. ${section} (${startTime}-${endTime} min)
   └─ [Descreva aqui o conteúdo específico para "${data.tema}"]`;
        }).join('

');
    }

    suggestTemplate(subject) {
        const suggestions = {
            'História': 'Aula de História Interactiva',
            'Ciências': 'Explainer de Ciências',
            'Física': 'Laboratório Virtual',
            'Química': 'Laboratório Virtual',
            'Biologia': 'Explainer de Ciências',
            'Geografia': 'Viagem Virtual',
            'Matemática': 'Quiz Gamificado'
        };

        return suggestions[subject] || 'Resumo de Aula (60s)';
    }

    groupBy(array, key) {
        return array.reduce((groups, item) => {
            const value = Array.isArray(item[key]) ? item[key][0] : item[key];
            (groups[value] = groups[value] || []).push(item);
            return groups;
        }, {});
    }

    // PWA Installation
    setupPWAInstall() {
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            this.deferredPrompt = e;
            this.showInstallButton();
        });

        const installBtn = document.getElementById('installBtn');
        installBtn.addEventListener('click', () => {
            if (this.deferredPrompt) {
                this.deferredPrompt.prompt();
                this.deferredPrompt.userChoice.then(() => {
                    this.deferredPrompt = null;
                    installBtn.style.display = 'none';
                });
            }
        });
    }

    showInstallButton() {
        const installBtn = document.getElementById('installBtn');
        installBtn.style.display = 'block';
    }

    // Service Worker Registration
    async registerServiceWorker() {
        if ('serviceWorker' in navigator) {
            try {
                await navigator.serviceWorker.register('./js/sw.js');
                console.log('Service Worker registado com sucesso');
            } catch (error) {
                console.log('Erro ao registar Service Worker:', error);
            }
        }
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new InVideoEduApp();
});

// Clear form functionality
document.addEventListener('click', (e) => {
    if (e.target.id === 'clearForm') {
        document.getElementById('scriptForm').reset();
        document.getElementById('output').innerHTML = '';
    }
});