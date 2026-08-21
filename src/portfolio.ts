export type Project = {
  title: string
  eyebrow: string
  description: string
  impact: string
  stack: string[]
  github: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    title: 'SGL — Sistema de Gestão de Laboratórios',
    eyebrow: 'Backend · Sistema corporativo',
    description:
      'Plataforma para gestão de insumos, lotes, pedidos e auditoria em laboratórios de pesquisa, com regras de estoque FEFO/FIFO e rastreabilidade física.',
    impact: 'API REST documentada com Swagger, PostgreSQL, migrations e testes automatizados.',
    stack: ['Java', 'Spring Boot', 'PostgreSQL', 'JPA/Hibernate', 'Flyway', 'Swagger'],
    github: 'https://github.com/gbsalermo/Sistema-SGL',
    featured: true,
  },
  {
    title: 'BUSIVS',
    eyebrow: 'Cloud · Automação comunitária',
    description:
      'Bot no Telegram para reduzir a incerteza de quem usa o circular da UFRB, combinando horários oficiais, regras da rota e confirmações colaborativas.',
    impact: 'Versão funcional em produção com webhook, estado compartilhado e validações de plausibilidade.',
    stack: ['Python', 'Cloudflare Workers', 'Durable Objects', 'SQLite', 'Telegram API'],
    github: 'https://github.com/gbsalermo/Busivs-BOT',
    featured: true,
  },
  {
    title: 'Butler',
    eyebrow: 'Assistente pessoal · Telegram',
    description:
      'Assistente pessoal determinístico que integra tarefas, agenda, estudos, finanças, musculação, memória contextual e uma biblioteca opcional de conhecimento.',
    impact: 'Arquitetura em tiers, contexto por usuário, D1 e suíte de regressão no GitHub Actions.',
    stack: ['Python', 'Cloudflare Workers', 'D1', 'Telegram API', 'Pytest', 'GitHub Actions'],
    github: 'https://github.com/gbsalermo/Butler-bot',
    featured: true,
  },
  {
    title: 'PIPETA',
    eyebrow: 'Robótica · IoT',
    description:
      'Projeto de irrigação autônoma com sensores e microcontroladores, explorando aquisição de dados, acionamento e integração entre software e hardware.',
    impact: 'Projeto acadêmico aplicado a automação e sistemas embarcados, com documentação e prototipagem física.',
    stack: ['ESP8266/ESP32', 'Arduino', 'Sensores', 'Automação', 'IoT'],
    github: 'https://github.com/gbsalermo/PIPETA',
  },
  {
    title: 'Library Manager',
    eyebrow: 'Java Desktop · Estruturas de dados',
    description:
      'Sistema desktop para gerenciamento de livros com interface Swing e implementação própria de lista duplamente encadeada.',
    impact: 'Busca, navegação bidirecional, ordenação e manipulação dinâmica de registros em memória.',
    stack: ['Java', 'Swing', 'Estruturas de Dados'],
    github: 'https://github.com/gbsalermo/SistemaBiblioteca',
  },
  {
    title: 'Landing Page Audiovisual',
    eyebrow: 'Frontend · Projeto visual',
    description:
      'Landing page responsiva para fotografia e audiovisual, com identidade visual forte, navegação por seções e elementos de interface inspirados em câmera.',
    impact: 'Experimento de UI focado em apresentação de serviço, composição visual e responsividade.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    github: 'https://github.com/gbsalermo/Page_Fotografia',
  },
]

export const stackGroups = [
  {
    title: 'Backend & Arquitetura',
    items: ['Java', 'Spring Boot', 'JPA / Hibernate', 'REST APIs', 'Maven', 'Swagger / OpenAPI'],
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
