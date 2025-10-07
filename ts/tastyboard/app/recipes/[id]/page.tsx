'use client';
import { useEffect, useState } from 'react';
import { api, Recipe } from '@/lib/api';
import ImageMaybe from '@/components/ImageMaybe';

export default function RecipeView({ params }: any) {
  const id = Number(params.id);
  const [data, setData] = useState<Recipe | null>(null);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    api.recipes.get(id).then(setData).catch(e=>setErr(String(e?.message ?? e)));
  }, [id]);

  if (err) return <main><p className="error">{err}</p></main>;
  if (!data) return <main><p>Carregando...</p></main>;

  return (
    <main>
      <h1>{data.title}</h1>
      <ImageMaybe src={data.imageUrl} alt={data.title} className="thumb" />
      <p>{data.description}</p>
      {data.videoUrl && <p><a href={data.videoUrl} target="_blank">Ver vídeo</a></p>}
      <h3>Ingredientes</h3>
      <ul>{data.ingredients?.map((i,idx)=><li key={idx}>{i}</li>)}</ul>
      <h3>Passos</h3>
      <ol>{data.steps?.map((s,idx)=><li key={idx}>{s}</li>)}</ol>
      <div className="toolbar">
        <a href={`/recipes/${id}/edit`} className="btn">Editar</a>
        <a href="/recipes" className="btn ghost">Voltar</a>
      </div>
    </main>
  );
}
