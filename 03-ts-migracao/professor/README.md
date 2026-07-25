# Migração JS → TS (Versão Inicial baseada no Guia)

Este projeto é a **Etapa 1 (JavaScript puro)**, alinhada com o “**Guia Completo: Migração de JavaScript para TypeScript (com códigos)**”.  
Ele serve como ponto de partida para você demonstrar a migração para TypeScript em sala.

## ✅ O que já tem
- Página HTML com um campo de **busca** e uma **lista** de “skills”
- **JavaScript puro** (`src/main.js`) com funções `render` e `filtrar`
- Estilos em `style.css` (layout simples e legível)

## ▶️ Como executar
- Opção A (mais simples): abra `index.html` no navegador
- Opção B (servidor local):
  ```bash
  npx serve .
  # ou
  python3 -m http.server 8080
  ```

---

## 🚀 Próxima etapa (migrar para TypeScript)

Siga exatamente o guia que você tem (“Guia Completo: Migração de JavaScript para TypeScript (com códigos)”):

1. **Inicializar npm** (opcional, se quiser compilar com tsc):
   ```bash
   npm init -y
   ```

2. **Instalar TypeScript**:
   ```bash
   npm i -D typescript
   npx tsc --init
   ```

3. **Ajustar `tsconfig.json`** (exemplo do guia):
   ```json
   {
     "compilerOptions": {
       "target": "ES2020",
       "module": "ES2020",
       "moduleResolution": "bundler",
       "strict": true,
       "noImplicitAny": true,
       "forceConsistentCasingInFileNames": true,
       "skipLibCheck": true,
       "outDir": "dist",
       "rootDir": "src"
     },
     "include": ["src"]
   }
   ```

4. **Migrar `src/main.js` → `src/main.ts`** e tipar dados/funções:
   - Criar interface `Skill`
   - Tipar elementos do DOM (`HTMLUListElement`, `HTMLInputElement`, `HTMLButtonElement`)
   - Tipar parâmetros e retornos (`string`, `Skill[]`, `void`)

5. **Compilar**:
   ```bash
   npx tsc
   ```
   Depois, no `index.html`, aponte para `./dist/main.js`.

> Se preferir usar **Vite** para dev server e build, crie um projeto `vanilla-ts` e mova os arquivos, ou ajuste o atual para usar Vite.

---

## 📂 Estrutura
```
js-ts-guia-inicial/
├─ index.html
├─ style.css
└─ src/
   └─ main.js     # Versão JS (Etapa 1)
```

Quando quiser, posso gerar automaticamente a **Etapa 2 (TypeScript)** baseada neste código, incluindo `tsconfig.json`, `src/main.ts` tipado e ajustes de build.
