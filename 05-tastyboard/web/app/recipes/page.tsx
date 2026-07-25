'use client';
import { useEffect, useMemo, useState } from 'react';
import { api, Recipe } from '@/lib/api';
import ImageMaybe from '@/components/ImageMaybe';

export default function RecipesPage() {
  const [items, setItems] = useState<Recipe[]>([]);
  const [q, setQ] = useState('');
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  async function load() {
    try {
      setLoading(true); setErr(null);
      const data = await api.recipes.list();
      setItems(data);
    } catch (e:any) {
      setErr(e?.message ?? 'Erro ao carregar');
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => { load(); }, []);

  const filtered = useMemo(() => items.filter(r => {
    const hay = (r.title + ' ' + r.description).toLowerCase();
    return hay.includes(q.toLowerCase());
  }), [items, q]);

  async function handleDelete(id: number) {
    if (!confirm('Remover esta receita?')) return;
    await api.recipes.remove(id);
    await load();
  }

  return (
    <main>
      <h1>Receitas</h1>
      <div className="toolbar">
        <input placeholder="Buscar por título/descrição..." value={q} onChange={e=>setQ(e.target.value)} />
        <a href="/recipes/new" className="btn">Nova receita</a>
        <button className="btn ghost" onClick={load}>Recarregar</button>
      </div>
      {loading && <p>Carregando...</p>}
      {err && <p className="error">{err}</p>}
      <ul className="grid" style={{ listStyle: 'none', padding: 0 }}>
        {filtered.map(r => (
          <li className="card" key={r.id}>
            <h3><a href={`/recipes/${r.id}`}>{r.title}</a></h3>
            <ImageMaybe src={r.imageUrl} alt={r.title} className="thumb" />
            <p>{r.description}</p>
            <div className="toolbar">
              <a href={`/recipes/${r.id}/edit`} className="btn">Editar</a>
              <button className="btn secondary" onClick={() => handleDelete(r.id)}>Remover</button>
            </div>
          </li>
        ))}
      </ul>
      {!loading && filtered.length === 0 && <p className="help">Nada encontrado. Tente outro termo.</p>}
    </main>
  );
}
