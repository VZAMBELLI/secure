// Script compartilhado por todas as páginas.
document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', () => {
  // Menu no celular
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.menu-fixo nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const aberto = nav.classList.toggle('aberto');
      toggle.setAttribute('aria-expanded', aberto);
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('aberto');
      toggle.setAttribute('aria-expanded', false);
    }));
  }

  // Destaca automaticamente o link da página atual
  const atual = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.menu-fixo nav a').forEach(a => {
    if (a.getAttribute('href') === atual) a.classList.add('ativo');
  });

  // Seções aparecem suavemente ao rolar
  const itens = document.querySelectorAll('.section, .citacao, .cta');
  itens.forEach(el => el.classList.add('revelar'));
  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver(entradas => {
      entradas.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visivel'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    itens.forEach(el => obs.observe(el));
  } else {
    itens.forEach(el => el.classList.add('visivel'));
  }
});
