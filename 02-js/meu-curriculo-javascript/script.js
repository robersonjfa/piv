// =========================
// variáveis e constantes
// =========================

// const: valor não reatribuído
const anoNascimento = 2000;

// let: valor mutável
let visitas = Number(localStorage.getItem("visitas") || 0);

// objeto simples
const usuario = {
  nome: "Visitante",
  tema: "claro" // "escuro"
};

// array de habilidades (objetos)
let skills = [
  { nome: "HTML", nivel: 85 },
  { nome: "CSS",  nivel: 75 },
  { nome: "JavaScript", nivel: 70 },
  { nome: "TypeScript", nivel: 55 },
];

// =========================
// utilitários e funções puras
// =========================

/** calcula idade aproximada */
function calcularIdade(ano) {
  const atual = new Date().getFullYear();
  return atual - ano;
}

/** normaliza string para filtro (lowercase/trim) */
function normalizar(txt) {
  return String(txt || "").toLowerCase().trim();
}

/** valida e-mail simples */
function emailValido(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).toLowerCase());
}

// =========================
// manipulação de DOM
// =========================

function atualizarIdade() {
  const el = document.getElementById("idade-estimada");
  el.textContent = calcularIdade(anoNascimento) + " anos";
}

function atualizarVisitas() {
  visitas += 1;
  localStorage.setItem("visitas", String(visitas));
  document.getElementById("visitas").textContent = String(visitas);
}

/** renderiza lista de skills com barras de progresso */
function renderSkills(lista = skills) {
  const ul = document.getElementById("listaSkills");
  ul.innerHTML = ""; // limpa
  lista.forEach(({ nome, nivel }) => {
    const li = document.createElement("li");
    li.className = "skill";
    li.innerHTML = `
      <strong>${nome}</strong>
      <div class="barra" aria-label="Nível de ${nome}">
        <span style="width:${Math.min(Math.max(nivel,0),100)}%"></span>
      </div>
    `;
    ul.appendChild(li);
  });
}

/** filtra skills por texto digitado */
function filtrarSkills() {
  const termo = normalizar(document.getElementById("filtroSkill").value);
  const filtradas = skills.filter(s => normalizar(s.nome).includes(termo));
  renderSkills(filtradas);
}

/** reseta filtro e mostra todas */
function resetarFiltro() {
  document.getElementById("filtroSkill").value = "";
  renderSkills(skills);
}

/** adiciona uma nova skill a partir dos inputs */
function adicionarSkill() {
  const nome = document.getElementById("novaSkill").value.trim();
  const nivel = Number(document.getElementById("novaSkillNivel").value);
  if (!nome) {
    alert("Informe o nome da habilidade.");
    return;
  }
  if (Number.isNaN(nivel) || nivel < 0 || nivel > 100) {
    alert("O nível deve estar entre 0 e 100.");
    return;
  }
  skills.push({ nome, nivel });
  document.getElementById("novaSkill").value = "";
  renderSkills(skills);
}

/** alterna tema claro/escuro com atributo data-tema */
function alternarTema() {
  const raiz = document.documentElement;
  const atual = raiz.getAttribute("data-tema") || "claro";
  const proximo = atual === "claro" ? "escuro" : "claro";
  raiz.setAttribute("data-tema", proximo);
  usuario.tema = proximo;

  // estado acessível no botão
  const btn = document.getElementById("btnTema");
  btn.setAttribute("aria-pressed", String(proximo === "escuro"));
}

/** gera uma saudação com template literals */
function saudarUsuario() {
  const nome = document.getElementById("nomeInput").value.trim() || "Visitante";
  usuario.nome = nome;
  const saudacao = document.getElementById("saudacao");
  const hora = new Date().getHours();
  const parteDoDia = hora < 12 ? "Bom dia" : (hora < 18 ? "Boa tarde" : "Boa noite");
  saudacao.textContent = `${parteDoDia}, ${usuario.nome}! Seja bem-vindo(a).`;
}

/** valida formulário de contato */
function enviarContato(e) {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();
  const status = document.getElementById("statusForm");

  if (!emailValido(email)) {
    status.textContent = "⚠️ E-mail inválido.";
    return;
  }
  if (mensagem.length < 5) {
    status.textContent = "⚠️ Escreva uma mensagem maior.";
    return;
  }
  status.textContent = "✅ Mensagem enviada (simulação). Obrigado!";
  (e.target).reset();
}

/** desenha um retângulo simples no canvas */
function desenharCanvas() {
  const canvas = document.getElementById("grafico");
  if (!canvas?.getContext) return;
  const ctx = canvas.getContext("2d");

  // fundo
  ctx.fillStyle = "#dbeafe";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // barra decorativa
  ctx.fillStyle = "#2563eb";
  const largura = 240;
  ctx.fillRect(20, 60, largura, 24);

  // texto
  ctx.fillStyle = "#0b1220";
  ctx.font = "16px system-ui, -apple-system, Segoe UI, Roboto, Arial";
  ctx.fillText("Canvas decorativo", 20, 30);
}

// =========================
// inicialização e eventos
// =========================

function iniciar() {
  atualizarVisitas();
  atualizarIdade();
  renderSkills(skills);
  desenharCanvas();

  document.getElementById("btnTema").addEventListener("click", alternarTema);
  document.getElementById("btnSaudar").addEventListener("click", saudarUsuario);
  document.getElementById("btnFiltrar").addEventListener("click", filtrarSkills);
  document.getElementById("btnResetar").addEventListener("click", resetarFiltro);
  document.getElementById("btnAdicionarSkill").addEventListener("click", adicionarSkill);
  document.getElementById("formContato").addEventListener("submit", enviarContato);

  // também permite Enter no campo filtro
  document.getElementById("filtroSkill").addEventListener("keydown", (ev) => {
    if (ev.key === "Enter") filtrarSkills();
  });
}

document.addEventListener("DOMContentLoaded", iniciar);