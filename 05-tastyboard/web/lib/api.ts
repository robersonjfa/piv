export const API = process.env.NEXT_PUBLIC_API_BASE_URL!;

async function json<T>(res: Response): Promise<T> {
  if (!res.ok) {
    const msg = await res.text().catch(()=>'Erro');
    throw new Error(`HTTP ${res.status}: ${msg}`);
  }
  return res.json();
}

export type Recipe = {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
  videoUrl?: string;
  ingredients: string[];
  steps: string[];
  authorId?: number;
  categoryId?: number;
};

export const api = {
  recipes: {
    list: () => fetch(`${API}/recipes`, { cache: 'no-store' }).then(json<Recipe[]>),
    get: (id: number) => fetch(`${API}/recipes/${id}`, { cache: 'no-store' }).then(json<Recipe>),
    create: (data: Partial<Recipe>) => fetch(`${API}/recipes`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data)
    }).then(json<Recipe>),
    update: (id: number, data: Partial<Recipe>) => fetch(`${API}/recipes/${id}`, {
      method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data)
    }).then(json<Recipe>),
    remove: (id: number) => fetch(`${API}/recipes/${id}`, { method: 'DELETE' }).then(json<{ok:true}>),
  }
};
