import { useEffect, useState } from 'react'
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
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const year = new Date().getFullYear()

  useEffect(() => {
    const close = () => setMenuOpen(false)
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [])

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Ir para o início">
          <span className="brand-mark">GS</span>
          <span>Gabriel Salermo</span>
        </a>

        <nav className="desktop-nav" aria-label="Navegação principal">
          {navItems.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
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
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
        </nav>
      )}

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-copy reveal">
            <p className="kicker"><span className="status-dot" /> Disponível para projetos e oportunidades</p>
            <h1>
              Engenharia de software para transformar
              <span> problema real em sistema funcional.</span>
            </h1>
            <p className="hero-text">
              Sou Gabriel Salermo, desenvolvedor com foco em <strong>Java Backend</strong>, APIs REST e arquitetura de sistemas. Também construo soluções que conectam software, automação e hardware.
            </p>

            <div className="hero-actions">
              <a className="button primary" href="#projetos">Ver projetos <FiArrowDownRight /></a>
              <a className="button ghost" href="https://github.com/gbsalermo" target="_blank" rel="noreferrer">
                <FiGithub /> GitHub
              </a>
            </div>

            <div className="hero-meta">
              <span>Java · Spring Boot · PostgreSQL</span>
              <span>Robótica · Automação · Embarcados</span>
            </div>
          </div>

          <div className="hero-visual reveal delay-1" aria-label="Ilustração de ambiente de desenvolvimento">
            <div className="visual-frame">
              <img src="./workspace.webp" alt="Ilustração pixel art de desenvolvedor em ambiente de trabalho" />
              <div className="visual-overlay" />
              <div className="code-card">
                <div className="code-card-head">
                  <span /><span /><span />
                  <small>Gabriel.java</small>
                </div>
                <pre><code>{`public class Gabriel {\n  String foco = "Backend";\n  String stack = "Java + Spring";\n  boolean build = true;\n}`}</code></pre>
              </div>
            </div>
          </div>
        </section>

        <section className="signal-strip" aria-label="Áreas de atuação">
          <span>BACKEND</span><i />
          <span>APIs REST</span><i />
          <span>ARQUITETURA</span><i />
          <span>AUTOMAÇÃO</span><i />
          <span>SISTEMAS EMBARCADOS</span>
        </section>

        <section id="sobre" className="section-pad two-column-section">
          <div className="section-label">01 / Sobre</div>
          <div className="section-content about-copy">
            <h2>Software com contexto de engenharia.</h2>
            <p>
              Estudo Engenharia da Computação na UFRB e concentro meu desenvolvimento profissional em backend Java. Gosto de sistemas em que a regra de negócio importa: estoque, auditoria, fluxos operacionais, automações e integrações que precisam continuar funcionando fora da apresentação.
            </p>
            <p>
              Minha base também passa por robótica, redes e sistemas embarcados. Isso me ajuda a enxergar software não como uma camada isolada, mas como parte de um processo maior — com pessoas, restrições e operação real.
            </p>

            <div className="about-facts">
              <div><strong>Java</strong><span>backend principal</span></div>
              <div><strong>UFRB</strong><span>Engenharia da Computação</span></div>
              <div><strong>IEEE RAS</strong><span>robótica e automação</span></div>
            </div>
          </div>
        </section>

        <section id="projetos" className="section-pad projects-section">
          <div className="section-heading">
            <div>
              <div className="section-label">02 / Projetos</div>
              <h2>Projetos selecionados</h2>
            </div>
            <p>Casos que mostram backend, produto, automação e capacidade de levar uma ideia até uma implementação utilizável.</p>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className={`project-card ${project.featured ? 'featured' : ''}`} key={project.title}>
                <div className="project-topline">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <span>{project.eyebrow}</span>
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
              </article>
            ))}
          </div>
        </section>

        <section id="experiencia" className="section-pad two-column-section experience-section">
          <div className="section-label">03 / Experiência</div>
          <div className="section-content">
            <h2>Construção prática, dentro e fora da universidade.</h2>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-marker" />
                <div>
                  <div className="timeline-head"><h3>Desenvolvimento de software</h3><span>Atual</span></div>
                  <p>Atuação com Java, Spring Boot, APIs REST, banco relacional e manutenção de sistemas, levando requisitos até implementação, testes e documentação.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker" />
                <div>
                  <div className="timeline-head"><h3>IEEE Robotics & Automation Society</h3><span>Projetos</span></div>
                  <p>Experiência com robótica educacional, microcontroladores, eletrônica, automação, organização de equipe e desenvolvimento de protótipos.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker" />
                <div>
                  <div className="timeline-head"><h3>Engenharia da Computação — UFRB</h3><span>Formação</span></div>
                  <p>Base em programação, estruturas de dados, eletrônica, sistemas digitais e integração software-hardware.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="stack" className="section-pad stack-section">
          <div className="section-heading">
            <div>
              <div className="section-label">04 / Stack</div>
              <h2>Ferramentas que uso para construir.</h2>
            </div>
          </div>

          <div className="stack-grid">
            {stackGroups.map((group) => (
              <div className="stack-card" key={group.title}>
                <FiCode />
                <h3>{group.title}</h3>
                <div className="stack-list">
                  {group.items.map((item) => <span key={item}>{item}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contato" className="section-pad contact-section">
          <div className="contact-copy">
            <div className="section-label">05 / Contato</div>
            <h2>Tem um sistema para construir ou um problema para resolver?</h2>
            <p>Estou aberto a conversar sobre desenvolvimento backend, projetos de software, automação e oportunidades em engenharia de software.</p>
          </div>
          <div className="contact-actions">
            <a href="mailto:salermojgabriel@gmail.com"><FiMail /> Email <FiArrowUpRight /></a>
            <a href="https://www.linkedin.com/in/gbsalermo" target="_blank" rel="noreferrer"><FiLinkedin /> LinkedIn <FiArrowUpRight /></a>
            <a href="https://github.com/gbsalermo" target="_blank" rel="noreferrer"><FiGithub /> GitHub <FiArrowUpRight /></a>
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
