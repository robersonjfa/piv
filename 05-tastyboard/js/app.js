// Demo inicial — TastyBoard (jQuery) — corrigido com fallback/referrerPolicy
// Lista estática de receitas (mock). Em versões futuras, virá de uma API.
const FALLBACK = "https://placehold.co/800x500?text=TastyBoard&font=system-ui&bg=0b1220&fc=e5e7eb";

const RECIPES = [
  {
    id: 'r1',
    name: 'Spaghetti à Bolonhesa',
    photo: 'https://placehold.co/1200x750?text=Spaghetti',
    desc: 'Massa com molho de carne e tomates frescos.'
  },
  {
    id: 'r2',
    name: 'Salada Mediterrânea',
    photo: 'https://placehold.co/1200x750?text=Salada+Mediterranea',
    desc: 'Folhas, pepino, tomate, azeitonas e queijo feta.'
  },
  {
    id: 'r3',
    name: 'Tacos de Frango',
    photo: 'https://placehold.co/1200x750?text=Tacos+de+Frango',
    desc: 'Tortilhas com frango temperado, milho e guacamole.'
  },
  {
    id: 'r4',
    name: 'Brownie Clássico',
    photo: 'https://placehold.co/1200x750?text=Brownie',
    desc: 'Chocolate intenso, casquinha crocante e interior macio.'
  }
];

function templateCard(r){
  return `
    <li class="card" role="listitem">
      <figure>
        <img src="${r.photo}" alt="Foto da receita: ${escapeHtml(r.name)}"
             loading="lazy" referrerpolicy="no-referrer"
             onerror="if(this.src!=='https://placehold.co/800x500?text=TastyBoard&font=system-ui&bg=0b1220&fc=e5e7eb') this.src='https://placehold.co/800x500?text=TastyBoard&font=system-ui&bg=0b1220&fc=e5e7eb'">
      </figure>
      <div class="body">
        <h3>${escapeHtml(r.name)}</h3>
        <p>${escapeHtml(r.desc)}</p>
      </div>
    </li>
  `;
}

function renderList(items){
  const $grid = $('#grid');
  $grid.empty();
  if (!items.length){
    $('#empty').prop('hidden', false);
    return;
  }
  $('#empty').prop('hidden', true);
  items.forEach(r => $grid.append(templateCard(r)));
}

function normalize(s){ return String(s||'').toLocaleLowerCase(); }

function applySearch(){
  const q = normalize($('#q').val());
  const filtered = RECIPES.filter(r => normalize(r.name).includes(q) || normalize(r.desc).includes(q));
  renderList(filtered);
}

function escapeHtml(s){
  return String(s).replace(/[&<>\"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[m]);
}

$(function(){
  renderList(RECIPES);

  $('#q').on('input', applySearch);
  $('#btnClear').on('click', function(){
    $('#q').val('');
    applySearch();
    $('#q').trigger('focus');
  });

  // Acessibilidade: Enter na caixa de pesquisa rola para grade
  $('#q').on('keydown', function(e){
    if (e.key === 'Enter') document.getElementById('grid').scrollIntoView({behavior:'smooth'});
  });
});
