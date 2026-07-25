import type { Task } from './types';

export function setStatus(msg: string) {
  const el = document.getElementById('status');
  if (el) el.textContent = msg;
}

export function setDateInput(valueISO: string) {
  const el = document.getElementById('data') as HTMLInputElement | null;
  if (el) el.value = valueISO;
}

export function getDateInput(): string {
  const el = document.getElementById('data') as HTMLInputElement | null;
  return el?.value || todayISO();
}

export function todayISO(): string {
  const d = new Date();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${d.getFullYear()}-${m}-${day}`;
}

export function renderList(tasks: Task[]) {
  const ul = document.getElementById('lista') as HTMLUListElement | null;
  if (!ul) return;
  ul.innerHTML = '';

  if (!tasks.length) {
    ul.innerHTML = '<li class="item"><span class="texto">Sem tarefas neste dia.</span></li>';
    return;
  }

  for (const t of tasks) {
    const li = document.createElement('li');
    li.className = 'item' + (t.done ? ' completed' : '');
    li.innerHTML = `
      <input type="checkbox" ${t.done ? 'checked' : ''} data-action="toggle" data-id="${t.id}" aria-label="Concluir tarefa">
      <span class="texto">${escapeHtml(t.text)}</span>
      <button class="secondary" data-action="remove" data-id="${t.id}" aria-label="Remover tarefa">Remover</button>
    `;
    ul.appendChild(li);
  }
}

// simples sanitização
function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (m) => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
  }[m] as string));
}
