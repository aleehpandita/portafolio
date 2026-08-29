// Efecto zoom-out: mientras el usuario hace scroll dentro de .scroll-spacer,
// el hero se encoge y desvanece, como si la cámara retrocediera.
// Para ajustar velocidad: cambia la altura de .scroll-spacer en style.css
// (más bajo = zoom más rápido) o el multiplicador "0.55" de abajo (más alto = más brusco).

const stage = document.getElementById('stage');
const spacer = document.querySelector('.scroll-spacer');

function onScroll() {
  const rect = spacer.getBoundingClientRect();
  const total = rect.height - window.innerHeight;
  const scrolled = Math.min(Math.max(-rect.top, 0), total);
  const progress = total > 0 ? scrolled / total : 0;

  const scale = 1 - progress * 0.50;
  const opacity = 1 - progress;

  stage.style.transform = `scale(${scale})`;
  stage.style.opacity = opacity;
}

window.addEventListener('scroll', onScroll);
onScroll();
