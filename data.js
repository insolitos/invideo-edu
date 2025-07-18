// Dados da aplicação InVideo Edu

export const guides = [
    {
        id: 1,
        title: 'Primeiros Passos no InVideo AI',
        desc: 'Aprenda a criar conta, escolher modelos e gerar o seu primeiro vídeo educativo a partir de texto simples.',
        url: 'https://www.youtube.com/watch?v=yOu0PYVmYbw',
        level: 'Iniciante',
        duration: '15 min',
        tags: ['básico', 'introdução', 'setup']
    },
    {
        id: 2,
        title: 'Personalizar Voz e Legendas',
        desc: 'Como clonar a sua voz, adicionar narração em português europeu e criar legendas automáticas.',
        url: 'https://www.youtube.com/watch?v=iln0fOakWpM',
        level: 'Intermédio',
        duration: '20 min',
        tags: ['voz', 'legendas', 'personalização']
    },
    {
        id: 3,
        title: 'Criar Vídeos Animados Educativos',
        desc: 'Guia completo para criar vídeos animados estilo cartoon para explicar conceitos complexos.',
        url: 'https://www.youtube.com/watch?v=X1dBjqdaiTo',
        level: 'Intermédio',
        duration: '25 min',
        tags: ['animação', 'cartoon', 'explicativo']
    },
    {
        id: 4,
        title: 'Integrar Quizzes Interactivos',
        desc: 'Construir vídeos com questionários embutidos para feedback imediato dos alunos.',
        url: 'https://www.notesforshs.com/2025/01/10-ways-invideo-ai-can-make-teaching.html',
        level: 'Avançado',
        duration: '30 min',
        tags: ['quizzes', 'interatividade', 'avaliação']
    },
    {
        id: 5,
        title: 'Storytelling para Educação',
        desc: 'Técnicas de narrativa visual para tornar as suas aulas mais envolventes e memoráveis.',
        url: 'https://invideo.io/make/educational-video-maker/',
        level: 'Intermédio',
        duration: '18 min',
        tags: ['storytelling', 'narrativa', 'envolvimento']
    },
    {
        id: 6,
        title: 'Vídeos com Realidade Virtual',
        desc: 'Criar experiências imersivas 360º para visitas virtuais e demonstrações científicas.',
        url: 'https://invideo.io/make/educational-video-maker/',
        level: 'Avançado',
        duration: '35 min',
        tags: ['VR', '360', 'imersivo']
    }
];

export const templates = [
    {
        id: 1,
        name: 'Resumo de Aula (60s)',
        desc: 'Template perfeito para criar resumos rápidos de lições, ideal para revisões.',
        preview: '📝',
        subjects: ['Geral', 'História', 'Ciências'],
        link: 'https://invideo.io/templates/education-videos/',
        features: ['Texto animado', 'Transições suaves', 'Música de fundo']
    },
    {
        id: 2,
        name: 'Explainer de Ciências',
        desc: 'Ideal para explicar conceitos científicos com diagramas e animações.',
        preview: '🔬',
        subjects: ['Física', 'Química', 'Biologia'],
        link: 'https://invideo.io/make/tutorial-videos/',
        features: ['Diagramas animados', 'Narração clara', 'Exemplos visuais']
    },
    {
        id: 3,
        name: 'Aula de História Interactiva',
        desc: 'Timeline animada para eventos históricos com imagens de época.',
        preview: '🏛️',
        subjects: ['História', 'Geografia'],
        link: 'https://invideo.io/templates/education-videos/',
        features: ['Timeline interactiva', 'Mapas animados', 'Imagens históricas']
    },
    {
        id: 4,
        name: 'Quiz Gamificado',
        desc: 'Template com elementos de jogo para tornar avaliações mais divertidas.',
        preview: '🎮',
        subjects: ['Geral', 'Matemática', 'Línguas'],
        link: 'https://invideo.io/make/educational-video-maker/',
        features: ['Sistema de pontos', 'Feedback imediato', 'Animações de vitória']
    },
    {
        id: 5,
        name: 'Laboratório Virtual',
        desc: 'Simule experiências laboratoriais com segurança e precisão.',
        preview: '⚗️',
        subjects: ['Química', 'Física', 'Biologia'],
        link: 'https://invideo.io/make/tutorial-videos/',
        features: ['Simulações 3D', 'Medições precisas', 'Resultados interactivos']
    },
    {
        id: 6,
        name: 'Viagem Virtual',
        desc: 'Explore locais históricos e geográficos com vídeos 360º.',
        preview: '🌍',
        subjects: ['Geografia', 'História', 'Turismo'],
        link: 'https://invideo.io/make/educational-video-maker/',
        features: ['Vídeo 360º', 'Pontos de interesse', 'Narração guiada']
    }
];

export const subjects = [
    'Matemática', 'Português', 'História', 'Geografia', 'Ciências',
    'Física', 'Química', 'Biologia', 'Inglês', 'Educação Física',
    'Artes', 'Música', 'Informática', 'Filosofia', 'Geral'
];

export const videoTypes = [
    {
        id: 'explainer',
        name: 'Vídeo Explicativo',
        desc: 'Para ensinar conceitos e procedimentos',
        duration: '5-10 min',
        structure: [
            'Introdução cativante (30s)',
            'Apresentação do problema/conceito (1-2 min)',
            'Explicação passo-a-passo (3-5 min)',
            'Exemplos práticos (1-2 min)',
            'Resumo e call-to-action (30s)'
        ]
    },
    {
        id: 'quiz',
        name: 'Vídeo com Quiz',
        desc: 'Para avaliar conhecimentos de forma interactiva',
        duration: '3-8 min',
        structure: [
            'Introdução e regras (30s)',
            'Pergunta 1 + feedback (1-2 min)',
            'Pergunta 2 + feedback (1-2 min)',
            'Pergunta 3 + feedback (1-2 min)',
            'Resultado final e encorajamento (1 min)'
        ]
    },
    {
        id: 'storytelling',
        name: 'Storytelling Educativo',
        desc: 'Para ensinar através de narrativas envolventes',
        duration: '8-15 min',
        structure: [
            'Apresentação dos personagens (1-2 min)',
            'Situação/problema inicial (2-3 min)',
            'Desenvolvimento da história (4-8 min)',
            'Resolução e lição aprendida (1-2 min)',
            'Aplicação prática (1 min)'
        ]
    },
    {
        id: 'tutorial',
        name: 'Tutorial Passo-a-Passo',
        desc: 'Para ensinar procedimentos e técnicas',
        duration: '10-20 min',
        structure: [
            'Apresentação da ferramenta/técnica (1 min)',
            'Preparação e materiais (1-2 min)',
            'Demonstração passo-a-passo (6-15 min)',
            'Dicas e truques (1-2 min)',
            'Exercício prático (1 min)'
        ]
    }
];

export const tips = [
    'Use cores contrastantes para melhor legibilidade',
    'Mantenha vídeos educativos entre 3-10 minutos',
    'Inclua legendas para acessibilidade',
    'Use música de fundo suave e não distratora',
    'Teste sempre o vídeo com um pequeno grupo antes da publicação',
    'Inclua pausas estratégicas para reflexão',
    'Use elementos visuais para reforçar conceitos falados',
    'Mantenha um ritmo constante de narração',
    'Inclua exemplos do quotidiano dos alunos',
    'Termine sempre com uma pergunta ou desafio'
];

export const features = {
    basic: [
        'Templates educativos gratuitos',
        'Texto para vídeo automático',
        'Biblioteca de imagens educativas',
        'Música de fundo apropriada',
        'Exportação em HD'
    ],
    premium: [
        'Clonagem de voz personalizada',
        'Vídeos sem marca d'água',
        'Templates premium exclusivos',
        'Colaboração em equipa',
        'Análise de engagement',
        'Integração com LMS',
        'Suporte prioritário'
    ]
};