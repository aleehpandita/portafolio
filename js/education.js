// Revela cada tarjeta de educación con un pequeño stagger al entrar en pantalla.

const eduCards = Array.from(document.querySelectorAll('.edu-card'));

const eduObserver = new IntersectionObserver((items) => {
  items.forEach(item => {
    if (item.isIntersecting) {
      const index = eduCards.indexOf(item.target);
      item.target.style.transitionDelay = `${index * 0.1}s`;
      item.target.classList.add('visible');
    }
  });
}, { threshold: 0.3 });

eduCards.forEach(card => eduObserver.observe(card));
