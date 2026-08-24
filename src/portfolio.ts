export type Language = 'pt' | 'en'

export type LocalizedText = {
  pt: string
  en: string
}

export type Project = {
  title: string
  eyebrow: LocalizedText
  description: LocalizedText
  challenge?: LocalizedText
  solution?: LocalizedText
  result?: LocalizedText
  stack: string[]
  github: string
  status: LocalizedText
  featured?: boolean
  preview?: string
  previewAlt?: LocalizedText
  previewFit?: 'cover' | 'contain'
  live?: string
}

export const text = (value: LocalizedText, language: Language) => value[language]

export const projects: Project[] = [
  {
    title: 'SGL — Sistema de Gestão de Laboratórios',
    eyebrow: {
      pt: 'Backend · Sistema corporativo',
      en: 'Backend · Corporate system',
    },
    description: {
      pt: 'Plataforma para gestão de insumos, lotes, pedidos e auditoria em laboratórios de pesquisa, com regras FEFO/FIFO e rastreabilidade física.',
      en: 'Platform for managing supplies, batches, requests and auditing in research laboratories, with FEFO/FIFO rules and physical traceability.',
    },
    challenge: {
      pt: 'Controlar materiais com validade, múltiplos lotes, pedidos e histórico confiável sem depender de planilhas.',
      en: 'Control expiring materials, multiple batches, requests and reliable history without depending on spreadsheets.',
    },
    solution: {
      pt: 'API REST em camadas, regras FEFO/FIFO, fluxo de pedidos, auditoria e migrations versionadas.',
      en: 'Layered REST API, FEFO/FIFO rules, request workflow, auditing and versioned migrations.',
    },
    result: {
      pt: 'Backend funcional e documentado com Swagger, PostgreSQL, Flyway e testes automatizados.',
      en: 'Functional and documented backend with Swagger, PostgreSQL, Flyway and automated tests.',
    },
    stack: ['Java', 'Spring Boot', 'PostgreSQL', 'JPA/Hibernate', 'Flyway', 'Swagger'],
    github: 'https://github.com/gbsalermo/Sistema-SGL',
    status: { pt: 'Backend concluído', en: 'Backend completed' },
    featured: true,
    preview: 'https://raw.githubusercontent.com/gbsalermo/Sistema-SGL/main/docs/LOGO.png',
    previewAlt: { pt: 'Logo do SGL', en: 'SGL logo' },
    previewFit: 'contain',
  },
  {
    title: 'BUSIVS',
    eyebrow: {
      pt: 'Cloud · Produto comunitário',
      en: 'Cloud · Community product',
    },
    description: {
      pt: 'Bot no Telegram para reduzir a incerteza de quem usa o circular da UFRB, combinando horários oficiais, regras da rota e confirmações colaborativas.',
      en: 'Telegram bot that reduces uncertainty for UFRB shuttle users by combining official schedules, route rules and collaborative confirmations.',
    },
    challenge: {
      pt: 'Alunos precisam decidir quando e onde esperar o circular sem rastreamento oficial em tempo real.',
      en: 'Students need to decide when and where to wait for the shuttle without official real-time tracking.',
    },
    solution: {
      pt: 'Modelagem da rota, janelas operacionais e validações temporais para interpretar confirmações sem GPS dedicado.',
      en: 'Route modeling, operational windows and temporal validations to interpret confirmations without dedicated GPS.',
    },
    result: {
      pt: 'Bot em produção com Cloudflare Workers, webhook e estado compartilhado com custo próximo de zero.',
      en: 'Production bot using Cloudflare Workers, webhooks and shared state with near-zero operating cost.',
    },
    stack: ['Python', 'Cloudflare Workers', 'Durable Objects', 'SQLite', 'Telegram API'],
    github: 'https://github.com/gbsalermo/Busivs-BOT',
    status: { pt: 'Em produção', en: 'In production' },
    featured: true,
  },
  {
    title: 'Butler',
    eyebrow: {
      pt: 'Assistente pessoal · Telegram',
      en: 'Personal assistant · Telegram',
    },
    description: {
      pt: 'Assistente pessoal determinístico que integra tarefas, agenda, estudos, finanças, musculação, memória contextual e biblioteca de conhecimento.',
      en: 'Deterministic personal assistant integrating tasks, calendar, studies, finances, training, contextual memory and a knowledge library.',
    },
    challenge: {
      pt: 'Unificar organização cotidiana e linguagem natural sem permitir que contexto ou IA sobrescrevam regras funcionais.',
      en: 'Unify daily organization and natural language without letting context or AI override functional rules.',
    },
    solution: {
      pt: 'Core determinístico, roteamento por intenção, memória por usuário, sugestões confirmáveis e biblioteca opcional.',
      en: 'Deterministic core, intent routing, per-user memory, confirmable suggestions and an optional library.',
    },
    result: {
      pt: 'Arquitetura em tiers com D1 e regressão automática no GitHub Actions.',
      en: 'Tiered architecture with D1 and automated regression tests in GitHub Actions.',
    },
    stack: ['Python', 'Cloudflare Workers', 'D1', 'Telegram API', 'Pytest', 'GitHub Actions'],
    github: 'https://github.com/gbsalermo/Butler-bot',
    status: { pt: 'Em evolução', en: 'Evolving' },
    featured: true,
    preview: 'https://raw.githubusercontent.com/gbsalermo/Butler-bot/main/assets/butler.png',
    previewAlt: { pt: 'Mascote do Butler Bot', en: 'Butler Bot mascot' },
    previewFit: 'contain',
  },
  {
    title: 'PIPETA',
    eyebrow: { pt: 'Robótica · IoT', en: 'Robotics · IoT' },
    description: {
      pt: 'Projeto de irrigação autônoma com sensores e microcontroladores, explorando aquisição de dados e integração software-hardware.',
      en: 'Autonomous irrigation project using sensors and microcontrollers, exploring data acquisition and software-hardware integration.',
    },
    stack: ['ESP8266/ESP32', 'Arduino', 'Sensores', 'Automação', 'IoT'],
    github: 'https://github.com/gbsalermo/PIPETA',
    status: { pt: 'Projeto acadêmico', en: 'Academic project' },
    preview: 'https://raw.githubusercontent.com/gbsalermo/PIPETA/main/PIPETA/Imagens%20projeto/SIMULA%C3%87%C3%83O%20IRRIGADOR.png',
    previewAlt: { pt: 'Simulação do sistema PIPETA', en: 'PIPETA system simulation' },
  },
  {
    title: 'Library Manager',
    eyebrow: {
      pt: 'Java Desktop · Estruturas de dados',
      en: 'Java Desktop · Data structures',
    },
    description: {
      pt: 'Sistema desktop para gerenciamento de livros com Swing e implementação própria de lista duplamente encadeada.',
      en: 'Desktop library manager built with Swing and a custom doubly linked list implementation.',
    },
    stack: ['Java', 'Swing', 'Estruturas de Dados'],
    github: 'https://github.com/gbsalermo/SistemaBiblioteca',
    status: { pt: 'Acadêmico', en: 'Academic' },
    preview: 'https://raw.githubusercontent.com/gbsalermo/SistemaBiblioteca/main/docs/demo.gif',
    previewAlt: { pt: 'Demonstração do Library Manager', en: 'Library Manager demo' },
  },
  {
    title: 'Landing Page Audiovisual',
    eyebrow: { pt: 'Frontend · Projeto visual', en: 'Frontend · Visual project' },
    description: {
      pt: 'Landing page responsiva para fotografia e audiovisual, com navegação por seções e elementos inspirados em câmera.',
      en: 'Responsive photography and audiovisual landing page with section navigation and camera-inspired interface elements.',
    },
    stack: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    github: 'https://github.com/gbsalermo/Page_Fotografia',
    status: { pt: 'Frontend', en: 'Frontend' },
    preview: 'https://raw.githubusercontent.com/gbsalermo/Page_Fotografia/main/assets/media/exemplo-intro.webp',
    previewAlt: { pt: 'Visual da landing page audiovisual', en: 'Audiovisual landing page preview' },
  },
]

export const skills = [
  { name: 'Java', level: 88 },
  { name: 'Python', level: 72 },
  { name: 'JavaScript', level: 68 },
  { name: 'TypeScript', level: 63 },
  { name: 'SQL', level: 76 },
  { name: 'HTML / CSS', level: 72 },
]

export const stackGroups = [
  {
    title: { pt: 'Backend & Arquitetura', en: 'Backend & Architecture' },
    primary: true,
    items: ['Java', 'Spring Boot', 'JPA / Hibernate', 'REST APIs', 'Maven', 'Swagger / OpenAPI', 'JUnit / Mockito'],
  },
  {
    title: { pt: 'Dados & Infra', en: 'Data & Infrastructure' },
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Git / GitHub', 'Linux', 'Cloudflare Workers', 'GitHub Actions'],
  },
  {
    title: { pt: 'Frontend', en: 'Frontend' },
    items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Vue.js'],
  },
  {
    title: { pt: 'Automação & Embarcados', en: 'Automation & Embedded' },
    items: ['Arduino', 'ESP32 / ESP8266', 'Sensores', 'IoT', 'Robótica', 'Integração software-hardware'],
  },
]

export const experiences = [
  {
    period: '2026 — atual',
    periodEn: '2026 — present',
    title: { pt: 'Desenvolvimento Java + Spring Boot', en: 'Java + Spring Boot Development' },
    place: { pt: 'Embrapa · Estágio', en: 'Embrapa · Internship' },
    description: {
      pt: 'Manutenção e evolução de backend Java/Spring Boot, APIs REST e integração com PostgreSQL, com contato também com frontend Vue.js e demandas de sistemas reais.',
      en: 'Maintenance and evolution of Java/Spring Boot backend services, REST APIs and PostgreSQL integration, with exposure to Vue.js frontend and real production-system demands.',
    },
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'Vue.js'],
  },
  {
    period: '2024 — 2025',
    periodEn: '2024 — 2025',
    title: { pt: 'Diretoria RAS-IEEE', en: 'RAS-IEEE Board' },
    place: { pt: 'UFRB · Vice-presidência', en: 'UFRB · Vice Presidency' },
    description: {
      pt: 'Organização de atividades, projetos e eventos técnicos de robótica e automação voltados à comunidade acadêmica.',
      en: 'Organization of robotics and automation activities, projects and technical events for the academic community.',
    },
    tags: ['Robótica', 'Arduino', 'ESP32', 'Liderança'],
  },
  {
    period: '2024 — 2025',
    periodEn: '2024 — 2025',
    title: { pt: 'Pesquisador — Projeto PIPETA', en: 'Researcher — PIPETA Project' },
    place: { pt: 'UFRB · Iniciação científica CNPq', en: 'UFRB · CNPq Undergraduate Research' },
    description: {
      pt: 'Desenvolvimento de robô autônomo para irrigação e monitoramento de umidade do solo, incluindo documentação e apresentação no Reconcitec UFRB.',
      en: 'Development of an autonomous robot for irrigation and soil-moisture monitoring, including documentation and presentation at Reconcitec UFRB.',
    },
    tags: ['Automação', 'Sensores', 'IoT', 'Pesquisa'],
  },
  {
    period: '2019 — 2022',
    periodEn: '2019 — 2022',
    title: { pt: 'Suporte técnico em redes', en: 'Network Technical Support' },
    place: { pt: 'Conect Telecom', en: 'Conect Telecom' },
    description: {
      pt: 'Monitoramento e diagnóstico de falhas, configuração de equipamentos de rede, suporte a usuários e manutenção da estabilidade dos serviços.',
      en: 'Failure monitoring and diagnosis, network equipment configuration, user support and maintenance of service stability.',
    },
    tags: ['Redes', 'Switches', 'Roteadores', 'Suporte'],
  },
]
