# Gabriel Salermo — Portfólio

Portfólio pessoal desenvolvido em **React + TypeScript + Vite**, com foco em apresentar projetos, experiência e stack de forma clara para recrutadores, clientes e parceiros.

**Site público:** https://salermodev.netlify.app/

## Status

A **V1 está concluída e publicada**. O projeto está atualmente em fase de **manutenção e evolução incremental**, sem planejamento de um novo redesign amplo.

Para continuidade técnica, decisões já tomadas, etapas concluídas e planejamento atual, consulte:

- [`docs/CONTINUIDADE_PORTIFOLIO.md`](docs/CONTINUIDADE_PORTIFOLIO.md) — documento canônico para continuidade do projeto e handoff para outra IA.

## Posicionamento

O portfólio prioriza **Java Backend e Engenharia de Software**, usando a formação em Engenharia da Computação como diferencial para também apresentar automação, robótica, sistemas embarcados e integração software-hardware.

## Direção visual

- interface dark com destaque em vermelho;
- transições leves e navegação fluida por seções;
- layout responsivo;
- versão **Português / English** com escolha de idioma no primeiro acesso;
- projetos principais apresentados como pequenos estudos de caso;
- habilidades com barras de confiança prática;
- currículo em português e inglês;
- efeitos e previews otimizados para manter a página leve.

## Projetos principais

1. **SGL — Sistema de Gestão de Laboratórios**
2. **BUSIVS**
3. **RASCOMP — Plataforma de Gestão de Competições de Robótica**

## Outros projetos

- **Butler**
- **PIPETA**
- **Landing Page Audiovisual**

A seleção é intencional: o portfólio prioriza qualidade e representatividade dos projetos, não quantidade.

## Stack do portfólio

- React 19
- TypeScript 5.9
- Vite 7
- React Icons
- CSS responsivo
- Node 22 em CI/deploy

## Estrutura principal

```text
PORTIFOLIO/
├── .github/workflows/      # CI e workflow de GitHub Pages
├── docs/
│   └── CONTINUIDADE_PORTIFOLIO.md
├── public/                 # currículos, foto e previews dos projetos
├── src/
│   ├── App.tsx             # estrutura e comportamento principal da página
│   ├── main.tsx            # bootstrap e escolha inicial de idioma
│   ├── portfolio.ts        # projetos, habilidades e experiências
│   ├── styles.css          # estilos principais
│   ├── performance.css     # ajustes de fluidez/performance
│   └── language-gate.css   # tela de escolha de idioma
├── index.html              # SEO e metadados
├── netlify.toml            # configuração do deploy Netlify
└── vite.config.ts
```

## Currículos

- `public/CurriculoSalermo.pdf`
- `public/GabrielSalermo_Resume.pdf`

O PDF disponibilizado no site acompanha o idioma selecionado.

## Rodar localmente

```bash
npm install
npm run dev
```

Build de produção:

```bash
npm run build
```

Preview do build:

```bash
npm run preview
```

## Fluxo do projeto

Por ser um projeto pessoal simples, evoluções normais podem ser feitas **diretamente na branch `main`**.

Mudanças maiores ou experimentais podem usar branches temporárias, mas não existe Git Flow obrigatório para manutenção cotidiana.

## Deploy

### Netlify

É o endpoint público principal declarado atualmente.

O `netlify.toml` usa:

- Node 22;
- `npm run build`;
- diretório `dist`.

### GitHub Pages

O repositório também mantém `.github/workflows/deploy.yml` como alternativa de publicação via GitHub Pages.

O estado e as pendências desse fluxo estão registrados em [`docs/CONTINUIDADE_PORTIFOLIO.md`](docs/CONTINUIDADE_PORTIFOLIO.md).

## Regra para continuidade

Antes de alterar arquitetura, hierarquia dos projetos, estratégia de idioma, deploy ou posicionamento do portfólio, leia o documento de continuidade. Se uma decisão relevante mudar, atualize a documentação no mesmo ciclo.
