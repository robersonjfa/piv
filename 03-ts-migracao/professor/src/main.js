// Versão Inicial (Etapa 1): JavaScript puro
// Baseado no “Guia Completo: Migração de JavaScript para TypeScript (com códigos)”

// Dados de exemplo (sem tipos)
const skills = [
  { nome: "HTML", nivel: 85 },
  { nome: "CSS", nivel: 75 },
  { nome: "JavaScript", nivel: 70 },
  { nome: "TypeScript", nivel: 55 },
];

function render(lista) {
  const ul = document.getElementById("lista");
  ul.innerHTML = "";
  lista.forEach((s) => {
    const li = document.createElement("li");
    li.innerHTML = `<h3>${escapeHtml(s.nome)}</h3><p>Nível: ${escapeHtml(String(s.nivel))}</p>`;
    ul.appendChild(li);
  });
}

function filtrar(termo) {
  return skills.filter((s) =>
    s.nome.toLowerCase().includes(String(termo || "").toLowerCase())
  );
}

function setup() {
  document.getElementById("btn").addEventListener("click", () => {
    const termo = document.getElementById("filtro").value;
    render(filtrar(termo));
  });

  document.getElementById("filtro").addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const termo = document.getElementById("filtro").value;
      render(filtrar(termo));
    }
  });

  // primeira renderização
  render(skills);
}

// Sanitização simples
function escapeHtml(s) {
  return s.replace(/[&<>"']/g, (m) => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
  }[m]));
}

document.addEventListener("DOMContentLoaded", setup);
