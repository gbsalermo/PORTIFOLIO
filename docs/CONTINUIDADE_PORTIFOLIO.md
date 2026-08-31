# CONTINUIDADE — PORTFÓLIO GABRIEL SALERMO

> Documento canônico de continuidade do projeto.
>
> Última revisão: **31/08/2026**  
> Base funcional revisada: `4ced7596724d57e290201deed349b1915b77e135`  
> Repositório: `gbsalermo/PORTIFOLIO`  
> Branch principal: `main`

---

## 1. Para que este documento existe

Este arquivo deve permitir que outra pessoa ou IA continue o portfólio sem reconstruir o contexto a partir do histórico de conversas.

Antes de alterar o projeto, considerar este documento a principal referência para:

- objetivo do portfólio;
- decisões já tomadas e que não devem ser revertidas sem motivo;
- estrutura técnica atual;
- hierarquia e critérios de conteúdo;
- etapas que já foram concluídas;
- estado real do projeto;
- pendências e planejamento atual.

**Não criar um novo roadmap por padrão.** Atualizar este documento quando uma decisão relevante mudar.

---

## 2. Objetivo do projeto

Portfólio pessoal de Gabriel Salermo com foco profissional em **desenvolvimento backend Java**, apresentando experiência, projetos e conhecimentos técnicos de forma rápida para recrutadores, clientes e parceiros.

O site também comunica a base de **Engenharia da Computação**, incluindo automação, robótica, sistemas embarcados e integração software-hardware, mas o posicionamento principal continua sendo:

> **Java Backend · Engenharia de Software**

O portfólio não deve virar um catálogo de todos os projetos já feitos. A curadoria deve favorecer trabalhos que mostrem problemas reais, arquitetura, regras de negócio, entrega e evolução técnica.

---

## 3. Estado atual resumido

**Situação:** V1 concluída, publicada e em fase de manutenção/evolução incremental.

O site já possui:

- React + TypeScript + Vite;
- interface dark com vermelho como cor de destaque;
- layout responsivo para desktop e mobile;
- entrada com escolha de idioma Português/English;
- idioma persistido em `localStorage`;
- navegação por seções com indicação da seção ativa;
- transições e revelação de conteúdo por `IntersectionObserver`;
- seção de projetos com visão rápida e estudos de caso;
- projetos principais e projetos secundários separados;
- experiência profissional atualizada;
- habilidades com percentuais de confiança prática;
- currículo em português e inglês;
- SEO/metadados básicos;
- configuração de build para Netlify;
- workflows GitHub Actions para build e GitHub Pages.

A estrutura visual foi considerada suficiente para publicação. **Não existe, neste momento, intenção de fazer outro redesign amplo.** Alterações devem ser pontuais e justificadas.

---

## 4. Stack e versões atuais

Conforme `package.json`:

- React `19.x`;
- React DOM `19.x`;
- TypeScript `5.9.x`;
- Vite `7.x`;
- React Icons `5.x`;
- Node `22` nos ambientes de CI/deploy.

Comandos principais:

```bash
npm install
npm run dev
npm run build
npm run preview
```

O build executa:

```bash
tsc -b && vite build
```

---

## 5. Arquitetura e responsabilidade dos arquivos

A aplicação é propositalmente simples e não possui backend próprio.

### `src/main.tsx`

Responsável pelo bootstrap da aplicação e pela **tela inicial de escolha de idioma**.

Regras importantes:

- idiomas suportados: `pt` e `en`;
- chave de persistência: `portfolio-language`;
- se não houver idioma salvo, exibe o language gate;
- depois da escolha, renderiza `App`.

### `src/App.tsx`

Responsável pela composição da página e comportamento de UI.

Contém principalmente:

- textos gerais da interface em PT/EN;
- header e navegação desktop/mobile;
- troca de idioma dentro do site;
- hero;
- seções Sobre, Projetos, Experiência, Habilidades e Contato;
- navegação lateral por seções;
- controle da seção ativa via `IntersectionObserver`;
- animações de entrada/reveal;
- links para currículos de acordo com o idioma.

### `src/portfolio.ts`

É a principal **fonte de verdade de conteúdo estruturado** do site.

Aqui ficam:

- projetos;
- textos de problema/solução/resultado;
- stacks dos projetos;
- status;
- indicação `featured`;
- previews e links;
- habilidades e percentuais;
- grupos de stack;
- experiências profissionais/acadêmicas.

Ao atualizar experiência, projeto, stack ou habilidade, verificar primeiro se a mudança deve ocorrer aqui.

### `src/styles.css`

Folha principal de estilos, layout, responsividade e identidade visual.

### `src/performance.css`

Ajustes de fluidez, desempenho e comportamento visual. Deve ser preservado como parte da estratégia de manter o site leve.

### `src/language-gate.css`

Estilos específicos da tela inicial de escolha de idioma.

### `public/`

Assets públicos do portfólio:

- `eu.png`: imagem usada no hero;
- `CurriculoSalermo.pdf`: currículo PT-BR;
- `GabrielSalermo_Resume.pdf`: currículo EN;
- `sgl-architecture.svg`: preview/arquitetura do SGL;
- `rascomp.png` e assets relacionados: preview do RASCOMP;
- `butler.svg`: preview do Butler;
- `favicon.svg`: favicon com identidade `GS`;
- demais imagens estáticas.

### `index.html`

Metadados básicos de SEO/Open Graph, favicon e bootstrap da aplicação.

### `vite.config.ts`

Usa `base: './'` para permitir publicação estática relativa em diferentes hosts.

### `.github/workflows/`

- `ci.yml`: valida build em pull requests e pushes fora da `main`;
- `deploy.yml`: build + tentativa de publicação no GitHub Pages em push na `main`.

### `netlify.toml`

Build do Netlify:

- comando: `npm run build`;
- diretório publicado: `dist`;
- Node 22.

---

## 6. Decisões de produto e design já consolidadas

### 6.1 Direção visual

Manter:

- fundo escuro;
- vermelho como destaque;
- tipografia forte e leitura rápida;
- estética profissional/tecnológica, sem excesso de efeitos;
- transições suaves entre seções;
- movimento leve o suficiente para não deixar a página pesada;
- responsividade como requisito obrigatório.

A referência inicial ajudou a orientar fluidez e apresentação, mas o resultado deve manter identidade própria, não ser uma cópia de outro portfólio.

### 6.2 Bilíngue é requisito do projeto

A versão Português/English não é opcional.

Fluxo atual:

1. primeiro acesso sem preferência salva → tela de escolha de idioma;
2. idioma escolhido é salvo em `localStorage`;
3. o usuário pode trocar novamente pelo header/menu;
4. currículo acompanha o idioma selecionado.

Toda nova copy relevante deve existir nos dois idiomas.

### 6.3 O portfólio é orientado a backend Java

Mesmo exibindo frontend, cloud, IoT e robótica, a hierarquia de mensagem deve continuar priorizando:

1. Java;
2. Spring Boot;
3. APIs REST e regras de negócio;
4. bancos SQL;
5. arquitetura/testes;
6. Engenharia da Computação como diferencial complementar.

### 6.4 Projetos principais

A seleção atual de projetos em destaque é intencional:

1. **SGL — Sistema de Gestão de Laboratórios**;
2. **BUSIVS**;
3. **RASCOMP**.

Esses projetos usam `featured: true` em `src/portfolio.ts`.

Motivo da curadoria:

- SGL demonstra sistema corporativo, domínio e backend Java;
- BUSIVS demonstra produto real em produção, cloud e problema comunitário;
- RASCOMP demonstra backend Java aplicado a competições, regras e evolução de um sistema completo.

### 6.5 Butler ficou em segundo plano

O **Butler** continua no portfólio, mas como projeto secundário. Ele não deve voltar a ocupar a vaga de RASCOMP entre os três principais sem uma nova decisão explícita.

### 6.6 Library Manager foi removido da curadoria

O **Library Manager** foi retirado porque não foi considerado um projeto finalizado/representativo o suficiente para a vitrine atual.

Não reintroduzir automaticamente apenas para aumentar a quantidade de projetos.

### 6.7 Percentuais de habilidades

Os valores atuais são arredondados de propósito e representam **confiança prática**, não certificação de domínio absoluto.

Valores atuais em `src/portfolio.ts`:

- Java: **90%**;
- SQL: **80%**;
- Python: **70%**;
- HTML/CSS: **70%**;
- JavaScript: **60%**;
- TypeScript: **60%**.

Ao alterar esses números, manter valores simples/arredondados e coerentes com uso real.

---

## 7. Conteúdo profissional atual

### Experiência principal

A experiência de estágio na **Embrapa** foi atualizada em 29/08/2026 e atualmente descreve atuação com:

- Java;
- Spring Boot;
- Vue.js;
- PostgreSQL;
- APIs REST;
- regras de negócio;
- JPA/Hibernate;
- Camunda;
- Docker;
- Git/GitHub;
- Maven;
- Postman;
- desenvolvimento de soluções sob demanda, incluindo participação no SGL.

Sempre que currículo e site forem atualizados, evitar divergência relevante entre os dois.

### Currículos

Arquivos atuais:

```text
public/CurriculoSalermo.pdf
public/GabrielSalermo_Resume.pdf
```

A aplicação escolhe o PDF conforme o idioma.

---

## 8. Projetos cadastrados atualmente

### Principais

#### SGL — Sistema de Gestão de Laboratórios

- categoria: backend / sistema corporativo;
- foco: estoque, lotes, pedidos, FEFO/FIFO, rastreabilidade;
- stack mostrada: Java, Spring Boot, PostgreSQL, JPA/Hibernate, Flyway, Swagger;
- status exibido: backend concluído.

#### BUSIVS

- categoria: cloud / produto comunitário;
- foco: mobilidade universitária, Telegram, rotas e confirmações;
- stack mostrada: Python, Cloudflare Workers, Durable Objects, SQLite, Telegram API;
- status exibido: em produção.

#### RASCOMP

- categoria: backend / competições de robótica;
- foco: inscrições, categorias, rankings, partidas e resultados;
- stack mostrada: Java 21, Spring Boot, MySQL, JPA/Hibernate, Flyway, JUnit/Mockito, OpenAPI;
- status exibido: API validada.

### Secundários

- Butler;
- PIPETA;
- Landing Page Audiovisual.

PIPETA e Landing Page usam previews externos do GitHub; portanto, mudanças de caminho nos repositórios de origem podem quebrar as imagens do portfólio.

---

## 9. Etapas do projeto já executadas

Esta seção organiza o histórico real; não cria um roadmap novo.

### Etapa 0 — definição e direção

**Concluída.**

Decisões:

- criar um portfólio web próprio;
- React + TypeScript + Vite;
- versão PT/EN;
- foco principal em backend Java;
- visual dark/vermelho;
- navegação fluida;
- projeto simples o suficiente para evolução direta na `main`.

### Etapa 1 — primeira versão funcional

**Concluída.**

Entregas:

- hero;
- Sobre;
- Projetos;
- Experiência;
- Habilidades/Stack;
- Contato;
- responsividade inicial;
- SEO básico;
- CI/deploy inicial.

### Etapa 2 — curadoria e posicionamento

**Concluída.**

Principais ajustes:

- RASCOMP promovido para projeto principal;
- Butler movido para projetos secundários;
- Library Manager removido;
- percentuais de habilidades arredondados;
- mensagens reforçando Java Backend e Engenharia.

### Etapa 3 — refinamento visual e desempenho

**Concluída.**

Incluiu:

- melhoria da responsividade mobile;
- remoção de overflow horizontal;
- maior clareza entre seções;
- visão rápida dos projetos;
- previews/diagramas maiores para projetos backend;
- animações e transições suavizadas;
- foto definitiva no hero;
- favicon `GS`.

### Etapa 4 — publicação e atualização profissional

**Concluída para a V1.**

Incluiu:

- publicação pública;
- currículos PT/EN;
- atualização da experiência de estágio na Embrapa;
- configuração Netlify;
- manutenção do workflow de GitHub Pages.

### Etapa 5 — manutenção e evolução incremental

**Etapa atual.**

Não há necessidade de reconstruir o site. O trabalho daqui para frente é manter conteúdo, projetos e apresentação sincronizados com a evolução profissional.

---

## 10. Deploy e CI — estado real em 31/08/2026

### Netlify

URL pública declarada no projeto:

```text
https://salermodev.netlify.app/
```

`netlify.toml` está configurado para Node 22, `npm run build` e publicação de `dist`.

**Tratamento atual:** considerar o Netlify como endpoint público principal enquanto não houver outra decisão explícita.

### GitHub Pages

Existe `.github/workflows/deploy.yml` executado em push na `main`.

No último workflow analisado (`4ced759...`):

- checkout: OK;
- setup Node: OK;
- `npm install`: OK;
- `npm run build`: **OK**;
- `actions/configure-pages@v5`: **falhou**;
- upload/deploy foram ignorados depois da falha.

Portanto:

- **o código compila**;
- a falha observada é de configuração/publicação do GitHub Pages, não do build React/Vite;
- esse problema não deve ser confundido com quebra da aplicação.

### Inconsistência conhecida de SEO/deploy

`index.html` ainda usa URLs do GitHub Pages em:

- `og:image`;
- `canonical`.

Ao manter Netlify como domínio principal, o ideal é alinhar esses metadados com o domínio público definitivo.

---

## 11. Fluxo de desenvolvimento

Decisão atual:

> Por ser um projeto pessoal simples, evoluções normais podem ser feitas diretamente na branch `main`.

Isso é uma escolha consciente do projeto, não uma falta de definição de Git Flow.

Para mudanças arriscadas ou experimentais, uma branch temporária ainda pode ser usada, mas não é requisito para ajustes pequenos de conteúdo/estilo.

### Antes de enviar alteração

Executar, no mínimo:

```bash
npm install
npm run build
```

Quando houver alteração visual, validar também:

- desktop;
- mobile;
- PT;
- EN;
- troca de idioma;
- links de currículo;
- links dos projetos;
- ausência de overflow horizontal;
- fluidez das animações.

---

## 12. Planejamento atual

O planejamento atual é de **manutenção incremental**, sem novo redesign.

### Prioridade alta

1. manter site, currículo e experiência profissional sincronizados;
2. preservar a hierarquia atual de projetos;
3. manter PT e EN equivalentes;
4. não adicionar efeitos que prejudiquem leveza/responsividade;
5. manter build funcionando antes de qualquer publicação.

### Ajustes técnicos pendentes identificados nesta revisão

1. **Decidir o destino do workflow GitHub Pages**:
   - configurar corretamente Pages e mantê-lo como deploy secundário; ou
   - remover/desativar o workflow caso Netlify seja definitivamente o único deploy desejado.
2. **Corrigir canonical e Open Graph** de `index.html` para o domínio público definitivo caso Netlify continue como principal.
3. Revisar links `live` dos projetos quando existirem demos realmente úteis; não criar links vazios apenas para preencher a interface.

### Evolução contínua de conteúdo

Conforme os projetos amadurecerem:

- atualizar status;
- atualizar problema/solução/resultado;
- substituir previews temporários por imagens reais quando melhorarem a apresentação;
- adicionar demos somente quando estiverem estáveis;
- atualizar stack apenas quando houver uso real;
- atualizar experiência/currículo quando houver mudança profissional concreta.

---

## 13. O que não fazer sem nova decisão

Outra IA não deve, por iniciativa própria:

- trocar React/Vite por outro framework;
- transformar o portfólio em aplicação com backend;
- criar um novo roadmap ignorando este histórico;
- remover a versão em inglês;
- retirar a tela inicial de idioma sem motivo;
- substituir o foco de Java Backend por uma mensagem genérica de full stack;
- rebaixar RASCOMP para promover Butler novamente;
- reintroduzir Library Manager automaticamente;
- adicionar dezenas de projetos apenas para aumentar volume;
- aumentar muito a quantidade/peso das animações;
- alterar os percentuais de habilidades para números quebrados sem necessidade;
- fazer refatoração estrutural grande apenas por preferência estética de código.

---

## 14. Critério para novos projetos no portfólio

Antes de adicionar um novo projeto, verificar se ele melhora pelo menos um destes pontos:

- demonstra backend Java ou arquitetura;
- resolve um problema real;
- está em produção ou possui resultado concreto;
- mostra uma habilidade ainda pouco representada;
- possui apresentação visual suficiente para não parecer incompleto.

Se um novo projeto for mais forte que um projeto principal atual, a troca de hierarquia deve ser uma decisão explícita, não automática.

---

## 15. Checklist para outra IA começar a trabalhar

1. Ler este arquivo inteiro.
2. Ler `README.md`.
3. Verificar o último commit da `main`.
4. Ler `src/portfolio.ts` para entender o conteúdo atual.
5. Ler `src/App.tsx` para entender a composição da interface.
6. Identificar se a solicitação é conteúdo, UI, performance, deploy ou SEO.
7. Alterar apenas o necessário.
8. Preservar PT/EN.
9. Executar build.
10. Atualizar este documento se a mudança alterar estado, prioridade ou decisão do projeto.

---

## 16. Fonte de verdade por assunto

| Assunto | Fonte principal |
| --- | --- |
| Continuidade, decisões e planejamento | `docs/CONTINUIDADE_PORTIFOLIO.md` |
| Visão pública do repositório | `README.md` |
| Projetos, habilidades, experiências | `src/portfolio.ts` |
| Copy geral e estrutura da página | `src/App.tsx` |
| Escolha inicial de idioma | `src/main.tsx` |
| Identidade visual/responsividade | `src/styles.css` |
| Otimizações visuais/performance | `src/performance.css` |
| Language gate | `src/language-gate.css` |
| Currículos e imagens | `public/` |
| SEO/OG | `index.html` |
| Build Vite | `vite.config.ts` |
| Netlify | `netlify.toml` |
| CI/GitHub Pages | `.github/workflows/` |

---

## 17. Regra de manutenção desta documentação

Quando uma alteração mudar qualquer um destes pontos, atualizar este arquivo no mesmo ciclo:

- projeto principal/secundário;
- stack;
- percentual de habilidade;
- experiência;
- arquitetura;
- estratégia de idioma;
- estratégia de deploy;
- fase atual;
- prioridade de trabalho;
- decisão visual relevante.

O objetivo é que a próxima IA possa continuar o projeto apenas lendo o repositório, sem depender do histórico de chat.
