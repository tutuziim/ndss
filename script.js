// Navegação SPA simples com fade
const inicioBtn = document.getElementById('inicioBtn');
const sobreBtn  = document.getElementById('sobreBtn');
const contatoBtn = document.getElementById('contatoBtn');

const inicio = document.getElementById('inicio');
const sobre = document.getElementById('sobre');
const contato = document.getElementById('contato');

function showSection(target){
  // remover active
  [inicio, sobre, contato].forEach(s => {
    s.classList.remove('active');
  });
  // breve delay para permitir transição mais suave (opcional)
  setTimeout(()=>{
    target.classList.add('active');
    // rolar pro topo do main para simular troca
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 50);
}

inicioBtn.addEventListener('click', (e)=>{ e.preventDefault(); showSection(inicio); });
sobreBtn.addEventListener('click', (e)=>{ e.preventDefault(); showSection(sobre); });
contatoBtn.addEventListener('click', (e)=>{ e.preventDefault(); showSection(contato); });

/* Ações extras simples (demo) */
document.querySelectorAll('.icon-btn').forEach(btn=>{
  btn.addEventListener('click', ()=> {
    btn.classList.toggle('liked');
    btn.innerHTML = btn.classList.contains('liked') ? '<i class="fas fa-heart"></i>' : '<i class="far fa-heart"></i>';
  });
});
document.querySelectorAll('.add-btn').forEach(b=>{
  b.addEventListener('click', ()=> {
    b.innerHTML = '<i class="fas fa-check"></i> Adicionado';
    setTimeout(()=> b.innerHTML = '<i class="fas fa-cart-plus"></i> Comprar', 1400);
  });
});
