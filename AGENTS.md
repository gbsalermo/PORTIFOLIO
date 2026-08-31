# AGENTS.md — PORTIFOLIO

Este arquivo é a porta de entrada para qualquer IA/agente que vá trabalhar neste repositório.

## Leitura obrigatória antes de alterar código

1. [`docs/CONTINUIDADE_PORTIFOLIO.md`](docs/CONTINUIDADE_PORTIFOLIO.md)
2. [`README.md`](README.md)
3. `src/portfolio.ts`
4. `src/App.tsx` quando a tarefa envolver interface/copy
5. arquivos específicos da área afetada

O documento de continuidade é a **fonte canônica para decisões, etapas, estado atual e planejamento**.

## Regras essenciais

- Não criar um novo roadmap por conta própria.
- Não fazer redesign amplo sem solicitação explícita.
- Preservar o foco principal em **Java Backend · Engenharia de Software**.
- Preservar a versão **Português / English** e manter novas copies equivalentes nos dois idiomas.
- Manter como projetos principais: **SGL, BUSIVS e RASCOMP**.
- Manter **Butler** como projeto secundário enquanto não houver nova decisão explícita.
- Não reintroduzir **Library Manager** automaticamente.
- Priorizar leveza, responsividade e transições suaves; evitar efeitos pesados.
- Alterações normais podem ser feitas na `main`, conforme decisão já registrada.
- Antes de concluir mudanças de código, executar `npm run build`.
- Se uma mudança alterar arquitetura, hierarquia dos projetos, deploy, etapa atual ou decisão relevante, atualizar `docs/CONTINUIDADE_PORTIFOLIO.md` no mesmo ciclo.

## Estado atual

A V1 está concluída/publicada e o projeto está em **manutenção e evolução incremental**.

Para detalhes e pendências técnicas atuais, não inferir pelo histórico de commits: ler o documento de continuidade.
