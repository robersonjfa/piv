'use client';
import { useEffect, useState } from 'react';
import { api, Recipe } from '@/lib/api';

export default function RecipeEdit({ params }: any) {
  const id = Number(params.id);
  const [title, setTitle] = useState('');
  const [description, setDesc] = useState('');
  const [imageUrl, setImage] = useState('');
  const [videoUrl, setVideo] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');

  useEffect(() => {
    api.recipes.get(id).then((r: Recipe) => {
      setTitle(r.title || '');
      setDesc(r.description || '');
      setImage(r.imageUrl || '');
      setVideo(r.videoUrl || '');
      setIngredients((r.ingredients || []).join('\n'));
      setSteps((r.steps || []).join('\n'));
    }).catch(console.error);
  }, [id]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    await api.recipes.update(id, {
      title, description,
      imageUrl: imageUrl || undefined,
      videoUrl: videoUrl || undefined,
      ingredients: ingredients ? ingredients.split('\n').map(s=>s.trim()).filter(Boolean) : [],
      steps: steps ? steps.split('\n').map(s=>s.trim()).filter(Boolean) : []
    });
    alert('Atualizado!');
    window.location.href = `/recipes/${id}`;
  }

  return (
    <main>
      <h1>Editar Receita</h1>
      <form onSubmit={submit} style={{ display: 'grid', gap: 12, maxWidth: 640 }}>
        <input placeholder="Título" value={title} onChange={e=>setTitle(e.target.value)} required />
        <textarea placeholder="Descrição" value={description} onChange={e=>setDesc(e.target.value)} required />
        <input placeholder="Image URL (opcional)" value={imageUrl} onChange={e=>setImage(e.target.value)} />
        <input placeholder="Video URL (opcional)" value={videoUrl} onChange={e=>setVideo(e.target.value)} />
        <textarea placeholder={"Ingredientes (um por linha)"} value={ingredients} onChange={e=>setIngredients(e.target.value)} rows={5} />
        <textarea placeholder={"Passos (um por linha)"} value={steps} onChange={e=>setSteps(e.target.value)} rows={5} />
        <div className="toolbar">
          <button className="btn" type="submit">Salvar</button>
          <a href={`/recipes/${id}`} className="btn ghost">Cancelar</a>
        </div>
      </form>
    </main>
  );
}
