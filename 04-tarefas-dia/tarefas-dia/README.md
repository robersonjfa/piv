# Registro de Tarefas do Dia (TypeScript + Vite)

Este é um projeto simples de **front-end** desenvolvido com **TypeScript**, **HTML** e **CSS** para registrar tarefas diárias, sem uso de API ou banco de dados.  
Todas as tarefas ficam salvas no **LocalStorage** do navegador, organizadas por data.

---

## 📌 Funcionalidades
- Selecionar **data** (padrão: hoje)  
- **Adicionar** novas tarefas  
- **Marcar** e **desmarcar** tarefas como concluídas  
- **Remover** tarefas individuais  
- **Limpar concluídas** ou **limpar todas**  
- Persistência local usando **LocalStorage**

---

## 🛠️ Como gerar este projeto
Este projeto foi criado utilizando o **Vite** com **TypeScript**.  
Se quiser criar algo do zero, siga os passos:

```bash
# 1. Crie o projeto
npm create vite@latest nome-do-projeto

# 2. Escolha o framework (nesse caso: Vanilla)
# 3. Escolha a linguagem: TypeScript

# 4. Entre na pasta do projeto
cd nome-do-projeto

# 5. Instale as dependências
npm install

# 6. Rode o servidor de desenvolvimento
npm run dev
```

---

## ▶️ Como rodar este projeto
1. **Clonar ou baixar** este repositório.  
2. **Instalar as dependências**:
```bash
npm install
```
3. **Executar o servidor de desenvolvimento**:
```bash
npm run dev
```
4. Abrir no navegador o endereço que aparecer no terminal (ex.: `http://localhost:5174`).

---

## 📂 Estrutura de Pastas
```
tarefas-dia-ts/
├── index.html
├── src/
│   ├── main.ts   # Código principal em TypeScript
│   ├── style.css # Estilos da aplicação
│   └── types.ts  # Tipos e interfaces
├── package.json
└── vite.config.ts
```

---

## 🌐 Publicando Online
Você pode colocar este projeto no ar gratuitamente usando:
- **GitHub Pages**  
- **Vercel**  
- **Netlify**