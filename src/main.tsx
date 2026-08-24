import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles.css'
import './performance.css'
import './language-gate.css'

type Language = 'pt' | 'en'

function getSavedLanguage(): Language | null {
  const saved = window.localStorage.getItem('portfolio-language')
  return saved === 'pt' || saved === 'en' ? saved : null
}

function PortfolioBootstrap() {
  const [language, setLanguage] = React.useState<Language | null>(getSavedLanguage)

  const chooseLanguage = (next: Language) => {
    window.localStorage.setItem('portfolio-language', next)
    document.documentElement.lang = next === 'pt' ? 'pt-BR' : 'en'
    setLanguage(next)
  }

  if (!language) {
    return (
      <main className="language-gate" aria-labelledby="language-gate-title">
        <section className="language-gate-panel">
          <div className="language-gate-brand" aria-hidden="true">GS</div>
          <p className="language-gate-kicker">Gabriel Salermo · Portfolio</p>
          <h1 id="language-gate-title">Escolha seu idioma</h1>
          <p className="language-gate-copy">
            Selecione a versão do portfólio que deseja acessar.<br />
            Choose the language you would like to use.
          </p>

          <div className="language-gate-actions">
            <button className="language-option" type="button" onClick={() => chooseLanguage('pt')}>
              <strong>Português</strong>
              <span>Continuar em PT-BR</span>
            </button>
            <button className="language-option" type="button" onClick={() => chooseLanguage('en')}>
              <strong>English</strong>
              <span>Continue in English</span>
            </button>
          </div>

          <p className="language-gate-note">
            Você poderá alterar o idioma novamente dentro do site · You can change it later in the site
          </p>
        </section>
      </main>
    )
  }

  return <App />
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PortfolioBootstrap />
  </React.StrictMode>,
)
