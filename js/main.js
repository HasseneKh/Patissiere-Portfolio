document.getElementById('year').textContent = new Date().getFullYear();

/* Header scroll state */
const header = document.getElementById('site-header');
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 30);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

/* Mobile nav */
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');
navToggle.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  navToggle.classList.toggle('open', open);
  navToggle.setAttribute('aria-expanded', String(open));
});
mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

/* Gallery icons (line-art placeholders, cycled until real photos are added) */
const ICONS = {
  viennoiserie: '<svg viewBox="0 0 64 64" fill="none" stroke="var(--chocolat)" stroke-width="1.6"><path d="M6 40 C 16 20, 26 44, 32 24 C 38 44, 48 20, 58 40 C 50 34, 44 46, 32 40 C 20 46, 14 34, 6 40 Z"/></svg>',
  tarte: '<svg viewBox="0 0 64 64" fill="none" stroke="var(--chocolat)" stroke-width="1.6"><circle cx="32" cy="32" r="22"/><path d="M32 10 L32 32 L48 42"/></svg>',
  chocolat: '<svg viewBox="0 0 64 64" fill="none" stroke="var(--chocolat)" stroke-width="1.6"><path d="M32 8 C 48 8, 54 22, 48 34 C 42 46, 44 52, 32 56 C 20 52, 22 46, 16 34 C 10 22, 16 8, 32 8 Z"/></svg>',
  buffet: '<svg viewBox="0 0 64 64" fill="none" stroke="var(--chocolat)" stroke-width="1.6"><path d="M12 46 Q32 54 52 46"/><path d="M18 46 C18 30, 46 30, 46 46"/><circle cx="32" cy="20" r="6"/></svg>'
};
const DEFAULT_ICON = ICONS.viennoiserie;

async function loadProducts() {
  try {
    const res = await fetch('data/products.json', { cache: 'no-store' });
    if (!res.ok) throw new Error('bad response');
    const data = await res.json();
    return data.produits || [];
  } catch (e) {
    return [
      { nom: 'Croissant Tradition', categorie: 'viennoiserie', ingredients: ['Farine', 'Beurre AOP', 'Levure'], image: '' },
      { nom: 'Tarte aux Fruits de Saison', categorie: 'tarte', ingredients: ['Pâte sablée', 'Crème pâtissière', 'Fruits frais'], image: '' },
      { nom: "Pièce Chocolat & Pâte d'Amande", categorie: 'chocolat', ingredients: ['Chocolat noir', "Pâte d'amande", 'Feuille d\'or'], image: '' }
    ];
  }
}

function renderGallery(products) {
  const grid = document.getElementById('gallery-grid');
  grid.innerHTML = products.map((p, i) => `
    <article class="gallery-card reveal" style="--i:${i}">
      <div class="gallery-card-visual">
        ${p.image
          ? `<img src="${p.image}" alt="${p.nom}" loading="lazy">`
          : `<span class="gallery-icon">${ICONS[p.categorie] || DEFAULT_ICON}</span>`}
      </div>
      <div class="gallery-card-body">
        <h3 class="gallery-card-name">${p.nom}</h3>
        <ul class="ingredient-list">
          ${(p.ingredients || []).map(ing => `<li>${ing}</li>`).join('')}
        </ul>
      </div>
    </article>
  `).join('');
  observeReveals();
}

window.loadProducts = loadProducts;
window.renderGallery = renderGallery;

/* Scroll reveal */
let observer;
function observeReveals() {
  const targets = document.querySelectorAll('.reveal:not(.in-view)');
  if (!observer) {
    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  }
  targets.forEach(t => observer.observe(t));
}

document.querySelectorAll('.skills-grid .skill-chip').forEach((el, i) => el.style.setProperty('--i', i));
document.querySelectorAll('.timeline-item').forEach((el, i) => el.style.setProperty('--i', i));

observeReveals();
