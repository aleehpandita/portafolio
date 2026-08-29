// Fondo animado de la sección "trayectoria": una carretera de neón fija
// a un lado, con un punto de luz que baja según el scroll (temático con
// transporte), más destellos glitch aleatorios detrás de la terminal.

const routeSection = document.querySelector('.about-section');
const routeMarker = document.getElementById('routeMarker');
const glitchBg = document.getElementById('glitchBg');

if (routeSection && routeMarker) {
  function updateRoute() {
    const rect = routeSection.getBoundingClientRect();
    const vh = window.innerHeight;
    const start = vh * 0.9;
    const total = (rect.height - vh * 0.3) * 1.6;
    const scrolled = Math.min(Math.max(start - rect.top, 0), total);
    const progress = total > 0 ? scrolled / total : 0;
    routeMarker.style.top = `${progress * 100}%`;
    requestAnimationFrame(updateRoute);
  }
  requestAnimationFrame(updateRoute);
}

const glitchContainers = document.querySelectorAll('.glitch-bg');
glitchContainers.forEach(container => {
  function spawnGlitchBar() {
    const bar = document.createElement('div');
    bar.className = 'glitch-bar';
    bar.style.top = `${Math.random() * 100}%`;
    bar.style.background = Math.random() > 0.5 ? '#00ffe1' : '#ff2ec4';
    container.appendChild(bar);
    setTimeout(() => bar.remove(), 400);
    setTimeout(spawnGlitchBar, 900 + Math.random() * 1800);
  }
  spawnGlitchBar();
});
