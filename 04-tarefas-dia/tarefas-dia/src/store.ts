import type { Task } from './types';

const KEY = 'tarefas-dia:v1';

type StoreShape = Record<string, Task[]>; // por dataISO

function loadAll(): StoreShape {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) as StoreShape : {};
  } catch {
    return {};
  }
}

function saveAll(db: StoreShape) {
  localStorage.setItem(KEY, JSON.stringify(db));
}

export const store = {
  list(dateISO: string): Task[] {
    const db = loadAll();
    return db[dateISO] || [];
  },
  add(dateISO: string, text: string): Task {
    const db = loadAll();
    const t: Task = {
      id: crypto.randomUUID(),
      text: text.trim(),
      done: false,
      dateISO
    };
    db[dateISO] = [t, ...(db[dateISO] || [])];
    saveAll(db);
    return t;
  },
  toggle(dateISO: string, id: string): void {
    const db = loadAll();
    const arr = db[dateISO] || [];
    db[dateISO] = arr.map(t => t.id === id ? { ...t, done: !t.done } : t);
    saveAll(db);
  },
  remove(dateISO: string, id: string): void {
    const db = loadAll();
    const arr = db[dateISO] || [];
    db[dateISO] = arr.filter(t => t.id !== id);
    saveAll(db);
  },
  clearDone(dateISO: string): void {
    const db = loadAll();
    const arr = db[dateISO] || [];
    db[dateISO] = arr.filter(t => !t.done);
    saveAll(db);
  },
  clearDay(dateISO: string): void {
    const db = loadAll();
    delete db[dateISO];
    saveAll(db);
  }
};
