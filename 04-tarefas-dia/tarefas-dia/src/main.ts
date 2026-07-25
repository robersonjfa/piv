import { store } from './store';
import { renderList, setDateInput, getDateInput, setStatus, todayISO } from './ui';

function loadDay(dateISO: string) {
  const tasks = store.list(dateISO);
  renderList(tasks);
  setStatus(`Data: ${dateISO} • Total: ${tasks.length} • Concluídas: ${tasks.filter(t=>t.done).length}`);
}

function setupEvents() {
  // define data inicial
  setDateInput(todayISO());

  const inputText = document.getElementById('novaTarefa') as HTMLInputElement | null;
  const btnAdd = document.getElementById('btnAdicionar') as HTMLButtonElement | null;
  const inputDate = document.getElementById('data') as HTMLInputElement | null;
  const btnClearDone = document.getElementById('btnLimparConcluidas') as HTMLButtonElement | null;
  const btnClearAll = document.getElementById('btnLimparTudo') as HTMLButtonElement | null;
  const ul = document.getElementById('lista') as HTMLUListElement | null;

  btnAdd?.addEventListener('click', () => {
    const text = inputText?.value.trim() || '';
    if (!text) return;
    const day = getDateInput();
    store.add(day, text);
    inputText!.value = '';
    loadDay(day);
  });

  inputText?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') btnAdd?.click();
  });

  inputDate?.addEventListener('change', () => loadDay(getDateInput()));

  ul?.addEventListener('click', (e) => {
    const t = e.target as HTMLElement;
    const action = t.getAttribute('data-action');
    const id = t.getAttribute('data-id');
    const day = getDateInput();
    if (!id) return;

    if (action === 'remove') {
      store.remove(day, id);
      loadDay(day);
    }
  });

  ul?.addEventListener('change', (e) => {
    const t = e.target as HTMLElement;
    const action = t.getAttribute('data-action');
    const id = t.getAttribute('data-id');
    const day = getDateInput();
    if (action === 'toggle' && id) {
      store.toggle(day, id);
      loadDay(day);
    }
  });

  btnClearDone?.addEventListener('click', () => {
    const day = getDateInput();
    store.clearDone(day);
    loadDay(day);
  });

  btnClearAll?.addEventListener('click', () => {
    const day = getDateInput();
    if (confirm('Tem certeza que deseja remover todas as tarefas deste dia?')) {
      store.clearDay(day);
      loadDay(day);
    }
  });
}

setupEvents();
loadDay(getDateInput());
