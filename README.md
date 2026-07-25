# PIV — Programação IV (UNOESC)

Material de apoio da disciplina **Programação IV**: progressão de HTML/CSS → JavaScript → TypeScript → app full stack (TastyBoard).

**Na aula (construção ao vivo):** use o repositório separado  
➡️ https://github.com/robersonjfa/piv-aula  

Este repo (`piv`) é o **gabarito / referência** (com comentários e GitHub Pages).

## Estrutura

```text
piv/
├── 02-js/                   # JavaScript no navegador
├── 03-ts-migracao/          # Exercício JS → TypeScript (aluno / professor)
├── 04-tarefas-dia/          # App Vite + TypeScript
├── 05-tastyboard/           # Projeto TastyBoard (JS puro + Next.js)
│   ├── js/                  # Front em JavaScript
│   └── web/                 # Front em Next.js + TypeScript
├── apps/
│   └── tastyboard-api/      # API NestJS + Prisma + PostgreSQL
├── docs/                    # GitHub Pages + guias
│   ├── index.html           # Página inicial (Pages)
│   ├── 01-html/             # Fundamentos HTML/CSS
│   └── *.docx               # Guias Node.js e migração JS→TS
└── README.md
```

## Trilha sugerida

| Etapa | Pasta | Objetivo |
|------:|-------|----------|
| 1 | `docs/01-html/` | Estrutura, CSS e HTML semântico |
| 2 | `02-js/` | Interatividade e DOM |
| 3 | `03-ts-migracao/` | Migrar JS para TypeScript |
| 4 | `04-tarefas-dia/` | Projeto Vite + TS |
| 5 | `05-tastyboard/js` → `web` | Evoluir front; consumir API |
| 6 | `apps/tastyboard-api` | Backend, banco e CRUD |

## Projetos

### `docs/` (GitHub Pages)
Site estático: configure **Settings → Pages → Deploy from a branch → `/docs`**.

- URL: `https://robersonjfa.github.io/piv/`
- `index.html` — índice com links dos exemplos HTML
- `01-html/aula01/` — primeiros exercícios HTML/CSS
- `01-html/exemplo01/` — HTML + CSS + JS em pastas
- `01-html/meu-curriculo/` — currículo básico
- `01-html/meu-curriculo-semantico/` — HTML5 semântico

### `02-js/`
- `meu-curriculo-javascript/` — currículo com interatividade

### `03-ts-migracao/`
- `aluno/` — ponto de partida em JavaScript
- `professor/` — versão migrada/completa em TypeScript

```bash
cd 03-ts-migracao/professor
npm install
npm run build
```

### `04-tarefas-dia/tarefas-dia`
App de tarefas com Vite + TypeScript + LocalStorage.

```bash
cd 04-tarefas-dia/tarefas-dia
npm install
npm run dev
```

### `05-tastyboard/`
- `js/` — versão front em JavaScript
- `web/` — versão Next.js + TypeScript

```bash
cd 05-tastyboard/web
cp .env.local.example .env.local   # se necessário
npm install
npm run dev
```

### `apps/tastyboard-api`
API NestJS + Prisma.

```bash
cd apps/tastyboard-api
cp .env.example .env
# ajuste DATABASE_URL, suba o Postgres (docker compose) e rode:
npm install
npx prisma migrate dev
npm run start:dev
```

## Documentação (`docs/`)

- `Guia_Instalacao_NodeJS.docx` — instalação Node.js (2026)
- `Migracao_JS_TS_Completo.docx` — tutorial de migração JS → TS (2026)

## Como rodar projetos estáticos (HTML/CSS/JS)

```bash
cd docs
npx --yes serve .
# ou
python3 -m http.server 8080
# abra http://localhost:8080
```

## Requisitos

- Node.js **24 LTS** (recomendado) — ver `docs/Guia_Instalacao_NodeJS.docx`
- npm / npx
- Para a API: Docker (PostgreSQL) ou instância local compatível

## Segurança

Arquivos `.env` **não** devem ser commitados. Use sempre `.env.example` / `.env.local.example`.

## Licença

Uso educacional (MIT).
