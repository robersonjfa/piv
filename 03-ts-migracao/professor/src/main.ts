// Tipos e interfaces
interface Skill {
  nome: string;
  nivel: number; // 0–100
}

const skills: Skill[] = [
  { nome: "HTML", nivel: 85 },
  { nome: "CSS", nivel: 75 },
  { nome: "JavaScript", nivel: 70 },
  { nome: "TypeScript", nivel: 55 },
];

// elementos do DOM com tipos adequados
const ul = document.getElementById("lista") as HTMLUListElement | null;
const input = document.getElementById("filtro") as HTMLInputElement | null;
const btn = document.getElementById("btn") as HTMLButtonElement | null;

// função pura com tipos nos parâmetros e retorno
function filtrar(termo: string, base: Skill[]): Skill[] {
  const t = termo.trim().toLowerCase();
  return base.filter((s) => s.nome.toLowerCase().includes(t));
}

function render(lista: Skill[]): void {
  if (!ul) return;
  ul.innerHTML = "";
  for (const s of lista) {
    const li = document.createElement("li");
    li.textContent = `${s.nome} - ${s.nivel}`;
    ul.appendChild(li);
  }
}

btn?.addEventListener("click", () => {
  const termo = input?.value ?? "";
  render(filtrar(termo, skills));
});

// primeira renderização
render(skills);