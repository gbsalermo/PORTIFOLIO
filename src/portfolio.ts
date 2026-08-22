export type Project = {
  title: string
  eyebrow: string
  description: string
  impact: string
  stack: string[]
  github: string
  status: string
  featured?: boolean
  challenge?: string
  solution?: string
  result?: string
  preview?: string
  previewAlt?: string
  previewFit?: 'cover' | 'contain'
  live?: string
}

export const projects: Project[] = [
  {
    title: 'SGL — Sistema de Gestão de Laboratórios',
    eyebrow: 'Backend · Sistema corporativo',
    description:
      'Plataforma para gestão de insumos, lotes, pedidos e auditoria em laboratórios de pesquisa, com regras de estoque FEFO/FIFO e rastreabilidade física.',
    impact:
      'Backend concluído com documentação OpenAPI/Swagger, PostgreSQL, Flyway e testes automatizados.',
    challenge:
      'Controlar materiais e reagentes com validade, múltiplos lotes, pedidos, rastreabilidade e histórico confiável.',
    solution:
      'API REST em camadas, regras FEFO/FIFO, fluxo de pedidos, auditoria de movimentações e migrations versionadas.',
    result:
      'Backend funcional e documentado, preparado para integração com frontend e evolução do ambiente de uso.',
    stack: ['Java', 'Spring Boot', 'PostgreSQL', 'JPA/Hibernate', 'Flyway', 'Swagger'],
    github: 'https://github.com/gbsalermo/Sistema-SGL',
    status: 'Backend concluído',
    featured: true,
    preview: 'https://raw.githubusercontent.com/gbsalermo/Sistema-SGL/main/docs/LOGO.png',
    previewAlt: 'Logo do SGL — Sistema de Gestão de Laboratórios',
    previewFit: 'contain',
  },
  {
    title: 'BUSIVS',
    eyebrow: 'Cloud · Produto comunitário',
    description:
      'Bot no Telegram para reduzir a incerteza de quem usa o circular da UFRB, combinando horários oficiais, regras da rota e confirmações colaborativas.',
    impact:
      'Versão funcional em produção com webhook, estado compartilhado e validações de plausibilidade.',
    challenge:
      'Alunos precisam decidir quando e onde esperar o circular sem rastreamento oficial em tempo real.',
    solution:
      'Modelagem da rota, janelas operacionais, confirmações colaborativas e regras temporais para inferir contexto sem GPS dedicado.',
    result:
      'Bot em produção no Telegram, com arquitetura enxuta em Cloudflare e foco em custo próximo de zero.',
    stack: ['Python', 'Cloudflare Workers', 'Durable Objects', 'SQLite', 'Telegram API'],
    github: 'https://github.com/gbsalermo/Busivs-BOT',
    status: 'Em produção',
    featured: true,
  },
  {
    title: 'Butler',
    eyebrow: 'Assistente pessoal · Telegram',
    description:
      'Assistente pessoal determinístico que integra tarefas, agenda, estudos, finanças, musculação, memória contextual e uma biblioteca opcional de conhecimento.',
    impact:
      'Arquitetura em tiers, contexto por usuário, D1 e suíte de regressão no GitHub Actions.',
    challenge:
      'Unificar organização cotidiana e linguagem natural sem permitir que contexto ou IA sobrescrevam regras funcionais.',
    solution:
      'Core determinístico, roteamento por intenção, memória isolada por usuário, sugestões confirmáveis e biblioteca opcional.',
    result:
      'Assistente em evolução contínua com regressão automática e arquitetura preparada para crescer sem virar um conjunto de ifs.',
    stack: ['Python', 'Cloudflare Workers', 'D1', 'Telegram API', 'Pytest', 'GitHub Actions'],
    github: 'https://github.com/gbsalermo/Butler-bot',
    status: 'Em evolução',
    featured: true,
    preview: 'https://raw.githubusercontent.com/gbsalermo/Butler-bot/main/assets/butler.png',
    previewAlt: 'Mascote do Butler Bot',
    previewFit: 'contain',
  },
  {
    title: 'PIPETA',
    eyebrow: 'Robótica · IoT',
    description:
      'Projeto de irrigação autônoma com sensores e microcontroladores, explorando aquisição de dados, acionamento e integração entre software e hardware.',
    impact:
      'Projeto acadêmico aplicado a automação e sistemas embarcados, com documentação e prototipagem física.',
    stack: ['ESP8266/ESP32', 'Arduino', 'Sensores', 'Automação', 'IoT'],
    github: 'https://github.com/gbsalermo/PIPETA',
    status: 'Projeto acadêmico',
    preview:
      'https://raw.githubusercontent.com/gbsalermo/PIPETA/main/PIPETA/Imagens%20projeto/SIMULA%C3%87%C3%83O%20IRRIGADOR.png',
    previewAlt: 'Simulação do sistema de irrigação PIPETA',
  },
  {
    title: 'Library Manager',
    eyebrow: 'Java Desktop · Estruturas de dados',
    description:
      'Sistema desktop para gerenciamento de livros com interface Swing e implementação própria de lista duplamente encadeada.',
    impact:
      'Busca, navegação bidirecional, ordenação e manipulação dinâmica de registros em memória.',
    stack: ['Java', 'Swing', 'Estruturas de Dados'],
    github: 'https://github.com/gbsalermo/SistemaBiblioteca',
    status: 'Acadêmico',
    preview: 'https://raw.githubusercontent.com/gbsalermo/SistemaBiblioteca/main/docs/demo.gif',
    previewAlt: 'Demonstração da interface do Library Manager',
  },
  {
    title: 'Landing Page Audiovisual',
    eyebrow: 'Frontend · Projeto visual',
    description:
      'Landing page responsiva para fotografia e audiovisual, com identidade visual forte, navegação por seções e elementos de interface inspirados em câmera.',
    impact:
      'Projeto de UI focado em apresentação de serviço, composição visual e responsividade.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    github: 'https://github.com/gbsalermo/Page_Fotografia',
    status: 'Frontend',
    preview: 'https://raw.githubusercontent.com/gbsalermo/Page_Fotografia/main/assets/media/exemplo-intro.webp',
    previewAlt: 'Visual da landing page audiovisual',
  },
]

export const stackGroups = [
  {
    title: 'Backend & Arquitetura',
    primary: true,
    items: [
      'Java',
      'Spring Boot',
      'Spring Data JPA',
      'Hibernate',
      'REST APIs',
      'Bean Validation',
      'Maven',
      'Swagger / OpenAPI',
      'JUnit / Mockito',
    ],
  },
  {
    title: 'Dados & Infra',
    items: ['PostgreSQL', 'MySQL', 'Git / GitHub', 'Linux', 'Cloudflare Workers', 'GitHub Actions'],
  },
  {
    title: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Vue.js'],
  },
  {
    title: 'Automação & Embarcados',
    items: ['Arduino', 'ESP32 / ESP8266', 'Sensores', 'IoT', 'Robótica', 'Integração software-hardware'],
  },
]
