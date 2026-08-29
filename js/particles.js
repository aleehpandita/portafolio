// Partículas flotando lentamente hacia arriba, en cian y magenta.

const pCanvas = document.getElementById('particles');
const pCtx = pCanvas.getContext('2d');

function resizeParticles() {
  pCanvas.width = window.innerWidth;
  pCanvas.height = window.innerHeight;
}
resizeParticles();
window.addEventListener('resize', resizeParticles);

const particles = Array.from({ length: 60 }, () => ({
  x: Math.random() * pCanvas.width,
  y: Math.random() * pCanvas.height,
  r: Math.random() * 1.8 + 0.4,
  vy: Math.random() * 0.4 + 0.1,
  color: Math.random() > 0.5 ? "0,255,225" : "255,46,196",
  alpha: Math.random() * 0.5 + 0.2
}));

function drawParticles() {
  pCtx.clearRect(0, 0, pCanvas.width, pCanvas.height);
  particles.forEach(p => {
    p.y -= p.vy;
    if (p.y < 0) p.y = pCanvas.height;
    pCtx.beginPath();
    pCtx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    pCtx.fillStyle = `rgba(${p.color},${p.alpha})`;
    pCtx.fill();
  });
  requestAnimationFrame(drawParticles);
}

drawParticles();
