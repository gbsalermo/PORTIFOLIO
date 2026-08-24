import { type CSSProperties, useEffect, useMemo, useState } from 'react'
import {
  FiArrowDown,
  FiArrowUpRight,
  FiCode,
  FiDownload,
  FiGithub,
  FiGlobe,
  FiLinkedin,
  FiMail,
  FiMenu,
  FiX,
} from 'react-icons/fi'
import {
  experiences,
  projects,
  skills,
  stackGroups,
  text,
  type Language,
} from './portfolio'

const copy = {
  pt: {
    nav: ['Sobre', 'Projetos', 'Experiência', 'Habilidades', 'Contato'],
    heroKicker: 'Java Backend · Engenharia de Software',
    heroTitleA: 'Construo software para',
    heroTitleB: ' resolver problemas reais.',
    heroText:
      'Sou Gabriel Salermo, desenvolvedor com foco em Java Backend, APIs REST e regras de negócio. Minha formação em Engenharia da Computação amplia esse trabalho para automação, sistemas embarcados e integração software-hardware.',
    projectsCta: 'Ver projetos',
    resumeCta: 'Currículo',
    contactCta: 'Vamos conversar',
    heroMeta: ['Java · Spring Boot · PostgreSQL', 'APIs · Arquitetura · Testes', 'Robótica · Automação · Embarcados'],
    scroll: 'Role para explorar',
    aboutLabel: '01 / Sobre',
    aboutTitle: 'Software com contexto de engenharia.',
    aboutP1:
      'Estudo Engenharia da Computação na UFRB e concentro meu desenvolvimento profissional em backend Java. Gosto de sistemas em que regra de negócio, confiabilidade e manutenção importam tanto quanto a interface.',
    aboutP2:
      'Minha base também passa por redes, robótica e sistemas embarcados. Isso me ajuda a enxergar software como parte de um processo maior, com pessoas, restrições e operação real.',
    aboutFacts: [
      ['Java', 'backend principal'],
      ['UFRB', 'Engenharia da Computação'],
      ['RAS-IEEE', 'robótica e automação'],
    ],
    projectsLabel: '02 / Projetos',
    projectsTitle: 'Projetos que mostram o trabalho.',
    projectsText:
      'Os principais aparecem como pequenos estudos de caso. Os demais mostram amplitude sem tirar o foco do backend.',
    challenge: 'Problema',
    solution: 'Solução',
    result: 'Resultado',
    repository: 'Ver repositório',
    live: 'Ver projeto',
    moreProjects: 'Mais projetos',
    moreProjectsText: 'Frontend, estruturas de dados, IoT e integração software-hardware.',
    experienceLabel: '03 / Experiência',
    experienceTitle: 'Experiência aplicada em software e engenharia.',
    skillsLabel: '04 / Habilidades',
    skillsTitle: 'Tecnologias com uso prático.',
    skillsText:
      'Os percentuais representam minha percepção atual de confiança prática, considerando estudo, projetos e uso real — não uma certificação absoluta de domínio.',
    stackTitle: 'Ecossistema de trabalho',
    contactLabel: '05 / Contato',
    contactTitle: 'Tem um sistema para construir ou um problema para resolver?',
    contactText:
      'Estou aberto a conversar sobre backend Java, projetos de software, automação e oportunidades em engenharia de software.',
    email: 'Email',
    resume: 'Currículo PDF',
    footer: 'Java Backend · Engenharia · Automação',
    languageLabel: 'Alterar idioma',
    busivsOnline: 'bot · online',
    busivsMessage: '🚌 Última confirmação: Biblioteca',
    busivsSub: 'sentido RU · há 2 min',
    busivsUser: 'Onde está o ônibus?',
    busivsAction1: '📍 Informar ponto',
    busivsAction2: '⏰ Próximos horários',
  },
  en: {
    nav: ['About', 'Projects', 'Experience', 'Skills', 'Contact'],
    heroKicker: 'Java Backend · Software Engineering',
    heroTitleA: 'I build software to',
    heroTitleB: ' solve real problems.',
    heroText:
      'I am Gabriel Salermo, a developer focused on Java Backend, REST APIs and business rules. My Computer Engineering background also expands this work into automation, embedded systems and software-hardware integration.',
    projectsCta: 'View projects',
    resumeCta: 'Resume',
    contactCta: 'Let’s talk',
    heroMeta: ['Java · Spring Boot · PostgreSQL', 'APIs · Architecture · Testing', 'Robotics · Automation · Embedded'],
    scroll: 'Scroll to explore',
    aboutLabel: '01 / About',
    aboutTitle: 'Software with an engineering mindset.',
    aboutP1:
      'I study Computer Engineering at UFRB and focus my professional development on Java backend. I enjoy systems where business rules, reliability and maintainability matter as much as the interface.',
    aboutP2:
      'My background also includes networking, robotics and embedded systems. This helps me see software as part of a larger process involving people, constraints and real operation.',
    aboutFacts: [
      ['Java', 'main backend stack'],
      ['UFRB', 'Computer Engineering'],
      ['RAS-IEEE', 'robotics and automation'],
    ],
    projectsLabel: '02 / Projects',
    projectsTitle: 'Projects that show the work.',
    projectsText:
      'The main projects are presented as short case studies. The others show range without taking the focus away from backend.',
    challenge: 'Problem',
    solution: 'Solution',
    result: 'Result',
    repository: 'View repository',
    live: 'View project',
    moreProjects: 'More projects',
    moreProjectsText: 'Frontend, data structures, IoT and software-hardware integration.',
    experienceLabel: '03 / Experience',
    experienceTitle: 'Hands-on experience in software and engineering.',
    skillsLabel: '04 / Skills',
    skillsTitle: 'Technologies used in practice.',
    skillsText:
      'Percentages represent my current self-assessed practical confidence based on study, projects and real use — not an absolute certification of mastery.',
    stackTitle: 'Working ecosystem',
    contactLabel: '05 / Contact',
    contactTitle: 'Have a system to build or a problem to solve?',
    contactText:
      'I am open to conversations about Java backend, software projects, automation and software-engineering opportunities.',
    email: 'Email',
    resume: 'Resume PDF',
    footer: 'Java Backend · Engineering · Automation',
    languageLabel: 'Change language',
    busivsOnline: 'bot · online',
    busivsMessage: '🚌 Last confirmation: Library',
    busivsSub: 'towards RU · 2 min ago',
    busivsUser: 'Where is the bus?',
    busivsAction1: '📍 Confirm location',
    busivsAction2: '⏰ Next schedules',
  },
} as const

const sectionIds = ['sobre', 'projetos', 'experiencia', 'habilidades', 'contato'] as const

function App() {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = window.localStorage.getItem('portfolio-language')
    return saved === 'en' ? 'en' : 'pt'
  })
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('top')
  const year = new Date().getFullYear()
  const c = copy[language]

  const featuredProjects = useMemo(() => projects.filter((project) => project.featured), [])
  const supportingProjects = useMemo(() => projects.filter((project) => !project.featured), [])
  const resumeHref = language === 'pt' ? './CurriculoSalermo.pdf' : './GabrielSalermo_Resume.pdf'

  const navItems = sectionIds.map((id, index) => ({ id, label: c.nav[index] }))

  useEffect(() => {
    window.localStorage.setItem('portfolio-language', language)
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en'
    document.title = language === 'pt'
      ? 'Gabriel Salermo | Desenvolvedor Backend Java'
      : 'Gabriel Salermo | Java Backend Developer'
  }, [language])

  useEffect(() => {
    const close = () => setMenuOpen(false)
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [])

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('main section[id]'))
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id) setActiveSection(visible.target.id)
      },
      { rootMargin: '-22% 0px -56% 0px', threshold: [0.08, 0.2, 0.45] },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('.scroll-reveal'))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )
    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [language])

  const setLang = (next: Language) => {
    setLanguage(next)
    setMenuOpen(false)
  }

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Gabriel Salermo">
          <span className="brand-mark">GS</span>
          <span>Gabriel Salermo</span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? 'active' : ''}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions desktop-only">
          <div className="language-switch" aria-label={c.languageLabel}>
            <FiGlobe />
            <button className={language === 'pt' ? 'active' : ''} onClick={() => setLang('pt')}>PT</button>
            <span>/</span>
            <button className={language === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button>
          </div>
          <a className="header-cta" href="mailto:salermojgabriel@gmail.com">
            {c.contactCta} <FiArrowUpRight />
          </a>
        </div>

        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </header>

      {menuOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} onClick={() => setMenuOpen(false)}>{item.label}</a>
          ))}
          <div className="mobile-language">
            <button className={language === 'pt' ? 'active' : ''} onClick={() => setLang('pt')}>Português</button>
            <button className={language === 'en' ? 'active' : ''} onClick={() => setLang('en')}>English</button>
          </div>
        </nav>
      )}

      <aside className="section-rail" aria-label="Section navigation">
        {sectionIds.map((id, index) => (
          <a key={id} href={`#${id}`} className={activeSection === id ? 'active' : ''} aria-label={c.nav[index]}>
            <span>{String(index + 1).padStart(2, '0')}</span>
          </a>
        ))}
      </aside>

      <main id="top">
        <section className="hero section-pad slide-section">
          <div className="hero-copy reveal">
            <p className="kicker"><span className="status-dot" /> {c.heroKicker}</p>
            <h1>{c.heroTitleA}<span>{c.heroTitleB}</span></h1>
            <p className="hero-text">{c.heroText}</p>

            <div className="hero-actions">
              <a className="button primary" href="#projetos">{c.projectsCta} <FiArrowDown /></a>
              <a className="button ghost" href={resumeHref} target="_blank" rel="noreferrer">
                <FiDownload /> {c.resumeCta}
              </a>
              <a className="icon-button" href="https://github.com/gbsalermo" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
              <a className="icon-button" href="https://www.linkedin.com/in/gbsalermo" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
            </div>

            <div className="hero-meta">{c.heroMeta.map((item) => <span key={item}>{item}</span>)}</div>
            <a className="scroll-hint" href="#sobre"><span>{c.scroll}</span><FiArrowDown /></a>
          </div>

          <div className="hero-visual reveal delay-1" aria-label="Gabriel Salermo">
            <div className="visual-frame">
              <img src="./eu.png" alt="Gabriel Salermo" />
              <div className="visual-overlay" />
              <div className="photo-tag"><span className="photo-tag-dot" /> Java / Spring</div>
              <div className="code-card">
                <div className="code-card-head"><span /><span /><span /><small>Gabriel.java</small></div>
                <pre><code>{`class Gabriel {\n  focus = "backend";\n  build = "real solutions";\n}`}</code></pre>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre" className="section-pad two-column-section slide-section scroll-reveal">
          <div className="section-label">{c.aboutLabel}</div>
          <div className="section-content about-copy">
            <h2>{c.aboutTitle}</h2>
            <p>{c.aboutP1}</p>
            <p>{c.aboutP2}</p>
            <div className="about-facts">
              {c.aboutFacts.map(([title, subtitle]) => (
                <div key={title}><strong>{title}</strong><span>{subtitle}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section id="projetos" className="section-pad projects-section slide-section">
          <div className="section-heading scroll-reveal">
            <div><div className="section-label">{c.projectsLabel}</div><h2>{c.projectsTitle}</h2></div>
            <p>{c.projectsText}</p>
          </div>

          <div className="case-studies">
            {featuredProjects.map((project, index) => (
              <article className="case-study scroll-reveal" key={project.title}>
                <div className="case-visual">
                  {project.preview ? (
                    <img
                      src={project.preview}
                      alt={project.previewAlt ? text(project.previewAlt, language) : project.title}
                      loading="lazy"
                      className={project.previewFit === 'contain' ? 'contain' : ''}
                    />
                  ) : (
                    <div className="busivs-demo">
                      <div className="mock-topbar"><span>BUSIVS</span><small>{c.busivsOnline}</small></div>
                      <div className="mock-bubble bot">{c.busivsMessage}<small>{c.busivsSub}</small></div>
                      <div className="mock-bubble user">{c.busivsUser}</div>
                      <div className="mock-actions"><span>{c.busivsAction1}</span><span>{c.busivsAction2}</span></div>
                    </div>
                  )}
                  <div className="case-number">{String(index + 1).padStart(2, '0')}</div>
                </div>

                <div className="case-copy">
                  <div className="project-topline"><span>{text(project.eyebrow, language)}</span><span>{text(project.status, language)}</span></div>
                  <h3>{project.title}</h3>
                  <p className="case-lead">{text(project.description, language)}</p>
                  <div className="case-points">
                    <div><span>{c.challenge}</span><p>{project.challenge ? text(project.challenge, language) : ''}</p></div>
                    <div><span>{c.solution}</span><p>{project.solution ? text(project.solution, language) : ''}</p></div>
                    <div><span>{c.result}</span><p>{project.result ? text(project.result, language) : ''}</p></div>
                  </div>
                  <div className="tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                  <div className="project-actions">
                    <a className="project-link" href={project.github} target="_blank" rel="noreferrer">{c.repository} <FiArrowUpRight /></a>
                    {project.live && <a className="project-link secondary" href={project.live} target="_blank" rel="noreferrer">{c.live} <FiArrowUpRight /></a>}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="supporting-heading scroll-reveal"><span>{c.moreProjects}</span><p>{c.moreProjectsText}</p></div>
          <div className="projects-grid">
            {supportingProjects.map((project) => (
              <article className="project-card scroll-reveal" key={project.title}>
                <div className="project-preview">
                  {project.preview && <img src={project.preview} alt={project.previewAlt ? text(project.previewAlt, language) : project.title} loading="lazy" />}
                </div>
                <div className="project-card-body">
                  <div className="project-topline"><span>{text(project.eyebrow, language)}</span><span>{text(project.status, language)}</span></div>
                  <h3>{project.title}</h3>
                  <p>{text(project.description, language)}</p>
                  <div className="tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                  <a className="project-link" href={project.github} target="_blank" rel="noreferrer">{c.repository} <FiArrowUpRight /></a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experiencia" className="section-pad two-column-section experience-section slide-section scroll-reveal">
          <div className="section-label">{c.experienceLabel}</div>
          <div className="section-content">
            <h2>{c.experienceTitle}</h2>
            <div className="timeline">
              {experiences.map((experience) => (
                <div className="timeline-item" key={`${experience.period}-${text(experience.title, language)}`}>
                  <div className="timeline-marker" />
                  <div>
                    <div className="timeline-head">
                      <div><h3>{text(experience.title, language)}</h3><strong>{text(experience.place, language)}</strong></div>
                      <span>{language === 'pt' ? experience.period : experience.periodEn}</span>
                    </div>
                    <p>{text(experience.description, language)}</p>
                    <div className="timeline-tags">{experience.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="habilidades" className="section-pad skills-section slide-section">
          <div className="section-heading scroll-reveal">
            <div><div className="section-label">{c.skillsLabel}</div><h2>{c.skillsTitle}</h2></div>
            <p>{c.skillsText}</p>
          </div>

          <div className="skills-layout">
            <div className="skill-bars scroll-reveal">
              {skills.map((skill) => (
                <div className="skill-row" key={skill.name}>
                  <div className="skill-head"><strong>{skill.name}</strong><span>{skill.level}%</span></div>
                  <div className="skill-track"><span style={{ '--skill-level': `${skill.level}%` } as CSSProperties} /></div>
                </div>
              ))}
            </div>

            <div className="stack-panel scroll-reveal">
              <div className="stack-panel-title"><FiCode /><h3>{c.stackTitle}</h3></div>
              <div className="stack-grid">
                {stackGroups.map((group) => (
                  <div className={`stack-card ${group.primary ? 'primary' : ''}`} key={text(group.title, language)}>
                    <h4>{text(group.title, language)}</h4>
                    <div className="stack-list">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contato" className="section-pad contact-section slide-section scroll-reveal">
          <div className="contact-copy">
            <div className="section-label">{c.contactLabel}</div>
            <h2>{c.contactTitle}</h2>
            <p>{c.contactText}</p>
          </div>
          <div className="contact-actions">
            <a href="mailto:salermojgabriel@gmail.com"><FiMail /> {c.email} <FiArrowUpRight /></a>
            <a href={resumeHref} target="_blank" rel="noreferrer"><FiDownload /> {c.resume} <FiArrowUpRight /></a>
            <a href="https://www.linkedin.com/in/gbsalermo" target="_blank" rel="noreferrer"><FiLinkedin /> LinkedIn <FiArrowUpRight /></a>
            <a href="https://github.com/gbsalermo" target="_blank" rel="noreferrer"><FiGithub /> GitHub <FiArrowUpRight /></a>
          </div>
        </section>
      </main>

      <footer><span>Gabriel Salermo © {year}</span><span>{c.footer}</span></footer>
    </div>
  )
}

export default App
