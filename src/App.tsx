import { useEffect, useMemo, useState } from 'react'
import {
  FiArrowDownRight,
  FiArrowUpRight,
  FiCode,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMenu,
  FiX,
} from 'react-icons/fi'
import { projects, stackGroups } from './portfolio'

const navItems = [
  ['Sobre', '#sobre'],
  ['Projetos', '#projetos'],
  ['Experiência', '#experiencia'],
  ['Stack', '#stack'],
  ['Contato', '#contato'],
] as const

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('top')
  const year = new Date().getFullYear()

  const featuredProjects = useMemo(
    () => projects.filter((project) => project.featured),
    [],
  )

  const supportingProjects = useMemo(
    () => projects.filter((project) => !project.featured),
    [],
  )

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

        if (visible?.target.id) {
          setActiveSection(visible.target.id)
        }
      },
      { rootMargin: '-22% 0px -58% 0px', threshold: [0.08, 0.2, 0.45] },
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
      { threshold: 0.12 },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Ir para o início">
          <span className="brand-mark">GS</span>
          <span>Gabriel Salermo</span>
        </a>

        <nav className="desktop-nav" aria-label="Navegação principal">
          {navItems.map(([label, href]) => {
            const section = href.replace('#', '')
            return (
              <a
                key={href}
                className={activeSection === section ? 'active' : ''}
                href={href}
              >
                {label}
              </a>
            )
          })}
        </nav>

        <a className="header-cta desktop-only" href="mailto:salermojgabriel@gmail.com">
          Vamos conversar <FiArrowUpRight />
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </header>

      {menuOpen && (
        <nav className="mobile-nav" aria-label="Navegação mobile">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
      )}

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-copy reveal">
            <p className="kicker">
              <span className="status-dot" />
              Java Backend · Engenharia de Software
            </p>

            <h1>
              Engenharia para transformar
              <span> problema real em sistema funcional.</span>
            </h1>

            <p className="hero-text">
              Sou Gabriel Salermo, desenvolvedor com foco em <strong>Java Backend</strong>,
              APIs REST e regras de negócio. Minha formação em Engenharia da Computação
              também me permite construir soluções que atravessam software, automação e hardware.
            </p>

            <div className="hero-actions">
              <a className="button primary" href="#projetos">
                Ver projetos <FiArrowDownRight />
              </a>
              <a
                className="button ghost"
                href="https://www.linkedin.com/in/gbsalermo"
                target="_blank"
                rel="noreferrer"
              >
                <FiLinkedin /> LinkedIn
              </a>
              <a
                className="icon-button"
                href="https://github.com/gbsalermo"
                target="_blank"
                rel="noreferrer"
                aria-label="Abrir GitHub"
              >
                <FiGithub />
              </a>
            </div>

            <div className="hero-meta">
              <span>Java · Spring Boot · PostgreSQL</span>
              <span>APIs · Arquitetura · Testes</span>
              <span>Robótica · Automação · Embarcados</span>
            </div>
          </div>

          <div className="hero-visual reveal delay-1" aria-label="Foto de Gabriel Salermo">
            <div className="visual-frame">
              <img src="./eu.png" alt="Gabriel Salermo" />
              <div className="visual-overlay" />

              <div className="photo-tag">
                <span className="photo-tag-dot" />
                Java / Spring
              </div>

              <div className="code-card">
                <div className="code-card-head">
                  <span />
                  <span />
                  <span />
                  <small>Gabriel.java</small>
                </div>
                <pre>
                  <code>{`public class Gabriel {\n  String foco = "Backend";\n  boolean resolveProblemaReal = true;\n}`}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        <section className="signal-strip" aria-label="Áreas de atuação">
          <span>JAVA BACKEND</span><i />
          <span>APIs REST</span><i />
          <span>ARQUITETURA</span><i />
          <span>AUTOMAÇÃO</span><i />
          <span>SISTEMAS EMBARCADOS</span>
        </section>

        <section id="sobre" className="section-pad two-column-section scroll-reveal">
          <div className="section-label">01 / Sobre</div>
          <div className="section-content about-copy">
            <h2>Software com contexto de engenharia.</h2>
            <p>
              Estudo Engenharia da Computação na UFRB e concentro meu desenvolvimento
              profissional em backend Java. Gosto de sistemas em que a regra de negócio
              realmente importa: estoque, auditoria, fluxos operacionais, automações e
              integrações que precisam continuar funcionando depois da apresentação.
            </p>
            <p>
              Minha base também passa por robótica, redes e sistemas embarcados. Isso me
              ajuda a enxergar software como parte de um processo maior — com pessoas,
              restrições, operação real e manutenção.
            </p>

            <div className="about-facts">
              <div><strong>Java</strong><span>backend principal</span></div>
              <div><strong>UFRB</strong><span>Engenharia da Computação</span></div>
              <div><strong>IEEE RAS</strong><span>robótica e automação</span></div>
            </div>
          </div>
        </section>

        <section className="proof-section section-pad scroll-reveal" aria-label="Resultados e sinais de experiência">
          <div className="proof-grid">
            <div>
              <span>01</span>
              <strong>APIs REST</strong>
              <p>Swagger, validação, testes e regras de negócio.</p>
            </div>
            <div>
              <span>02</span>
              <strong>Produção</strong>
              <p>Bots publicados com webhook, estado e persistência.</p>
            </div>
            <div>
              <span>03</span>
              <strong>Engenharia</strong>
              <p>Software conectado a automação, sensores e hardware.</p>
            </div>
            <div>
              <span>04</span>
              <strong>Problema real</strong>
              <p>Projetos pensados para operação, não só demonstração.</p>
            </div>
          </div>
        </section>

        <section id="projetos" className="section-pad projects-section">
          <div className="section-heading scroll-reveal">
            <div>
              <div className="section-label">02 / Projetos</div>
              <h2>Projetos que provam o trabalho.</h2>
            </div>
            <p>
              Os projetos principais aparecem como pequenos estudos de caso: contexto,
              decisão técnica e resultado. Os demais mostram amplitude sem tirar o foco do backend.
            </p>
          </div>

          <div className="case-studies">
            {featuredProjects.map((project, index) => (
              <article className="case-study scroll-reveal" key={project.title}>
                <div className="case-visual">
                  {project.preview ? (
                    <img
                      src={project.preview}
                      alt={project.previewAlt ?? `Visual do projeto ${project.title}`}
                      loading="lazy"
                      className={project.previewFit === 'contain' ? 'contain' : ''}
                    />
                  ) : (
                    <div className="busivs-demo" aria-label="Representação da interface do BUSIVS no Telegram">
                      <div className="mock-topbar">
                        <span>BUSIVS</span>
                        <small>bot · online</small>
                      </div>
                      <div className="mock-bubble bot">
                        🚌 Última confirmação: Biblioteca
                        <small>sentido RU · há 2 min</small>
                      </div>
                      <div className="mock-bubble user">Onde está o ônibus?</div>
                      <div className="mock-actions">
                        <span>📍 Informar ponto</span>
                        <span>⏰ Próximos horários</span>
                      </div>
                    </div>
                  )}

                  <div className="case-number">{String(index + 1).padStart(2, '0')}</div>
                </div>

                <div className="case-copy">
                  <div className="project-topline">
                    <span>{project.eyebrow}</span>
                    <span>{project.status}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p className="case-lead">{project.description}</p>

                  <div className="case-points">
                    <div>
                      <span>Problema</span>
                      <p>{project.challenge}</p>
                    </div>
                    <div>
                      <span>Solução</span>
                      <p>{project.solution}</p>
                    </div>
                    <div>
                      <span>Resultado</span>
                      <p>{project.result}</p>
                    </div>
                  </div>

                  <div className="tags">
                    {project.stack.map((item) => <span key={item}>{item}</span>)}
                  </div>

                  <div className="project-actions">
                    <a className="project-link" href={project.github} target="_blank" rel="noreferrer">
                      Ver repositório <FiArrowUpRight />
                    </a>
                    {project.live && (
                      <a className="project-link secondary" href={project.live} target="_blank" rel="noreferrer">
                        Ver projeto <FiArrowUpRight />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="supporting-heading scroll-reveal">
            <span>Mais projetos</span>
            <p>Frontend, estruturas de dados, IoT e integração software-hardware.</p>
          </div>

          <div className="projects-grid">
            {supportingProjects.map((project) => (
              <article className="project-card scroll-reveal" key={project.title}>
                <div className="project-preview">
                  {project.preview ? (
                    <img
                      src={project.preview}
                      alt={project.previewAlt ?? `Visual do projeto ${project.title}`}
                      loading="lazy"
                      className={project.previewFit === 'contain' ? 'contain' : ''}
                    />
                  ) : null}
                </div>
                <div className="project-card-body">
                  <div className="project-topline">
                    <span>{project.eyebrow}</span>
                    <span>{project.status}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <p className="project-impact">{project.impact}</p>
                  <div className="tags">
                    {project.stack.map((item) => <span key={item}>{item}</span>)}
                  </div>
                  <a className="project-link" href={project.github} target="_blank" rel="noreferrer">
                    Ver repositório <FiArrowUpRight />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experiencia" className="section-pad two-column-section experience-section scroll-reveal">
          <div className="section-label">03 / Experiência</div>
          <div className="section-content">
            <h2>Experiência aplicada em software e engenharia.</h2>

            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-marker" />
                <div>
                  <div className="timeline-head">
                    <div>
                      <h3>Desenvolvimento Java + Spring Boot</h3>
                      <strong>Embrapa · Estágio</strong>
                    </div>
                    <span>2026 — atual</span>
                  </div>
                  <p>
                    Manutenção e evolução de backend Java/Spring Boot, APIs REST e integração
                    com PostgreSQL, além de contato com frontend Vue.js e correção de demandas
                    de sistemas reais.
                  </p>
                  <div className="timeline-tags">
                    <span>Java</span><span>Spring Boot</span><span>PostgreSQL</span><span>Vue.js</span>
                  </div>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-marker" />
                <div>
                  <div className="timeline-head">
                    <div>
                      <h3>IEEE Robotics & Automation Society</h3>
                      <strong>RAS UFRB · Liderança e projetos</strong>
                    </div>
                    <span>2022 — 2025</span>
                  </div>
                  <p>
                    Participação e vice-presidência em projetos de robótica e automação,
                    com microcontroladores, eletrônica, prototipagem, organização de equipe
                    e apresentação de trabalhos.
                  </p>
                  <div className="timeline-tags">
                    <span>Arduino</span><span>ESP32</span><span>Robótica</span><span>Automação</span>
                  </div>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-marker" />
                <div>
                  <div className="timeline-head">
                    <div>
                      <h3>Engenharia da Computação</h3>
                      <strong>Universidade Federal do Recôncavo da Bahia</strong>
                    </div>
                    <span>Formação</span>
                  </div>
                  <p>
                    Base em programação, estruturas de dados, eletrônica, sistemas digitais,
                    redes e integração entre software e hardware.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="stack" className="section-pad stack-section">
          <div className="section-heading scroll-reveal">
            <div>
              <div className="section-label">04 / Stack</div>
              <h2>Backend primeiro. O restante amplia a entrega.</h2>
            </div>
            <p>
              Minha stack principal está no ecossistema Java. Frontend e embarcados entram
              como competências complementares para construir soluções mais completas.
            </p>
          </div>

          <div className="stack-grid">
            {stackGroups.map((group) => (
              <div
                className={`stack-card scroll-reveal ${group.primary ? 'primary-stack' : ''}`}
                key={group.title}
              >
                <FiCode />
                <div>
                  <span className="stack-kicker">{group.primary ? 'Stack principal' : 'Complementar'}</span>
                  <h3>{group.title}</h3>
                </div>
                <div className="stack-list">
                  {group.items.map((item) => <span key={item}>{item}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contato" className="section-pad contact-section scroll-reveal">
          <div className="contact-copy">
            <div className="section-label">05 / Contato</div>
            <h2>Tem um sistema para construir ou um problema para resolver?</h2>
            <p>
              Estou aberto a oportunidades e projetos em backend Java, engenharia de software,
              automação e integração de sistemas.
            </p>
          </div>

          <div className="contact-actions">
            <a href="mailto:salermojgabriel@gmail.com"><FiMail /> Email <FiArrowUpRight /></a>
            <a href="https://www.linkedin.com/in/gbsalermo" target="_blank" rel="noreferrer">
              <FiLinkedin /> LinkedIn <FiArrowUpRight />
            </a>
            <a href="https://github.com/gbsalermo" target="_blank" rel="noreferrer">
              <FiGithub /> GitHub <FiArrowUpRight />
            </a>
          </div>
        </section>
      </main>

      <footer>
        <span>Gabriel Salermo © {year}</span>
        <span>Java Backend · Engenharia · Automação</span>
      </footer>
    </div>
  )
}

export default App
