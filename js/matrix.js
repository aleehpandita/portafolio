// Lluvia de caracteres estilo Matrix, dibujada en un <canvas>.
// Cada "columna" tiene una posición (drops[x]) que avanza hacia abajo.

const mCanvas = document.getElementById('matrix');
const mCtx = mCanvas.getContext('2d');

function resizeMatrix() {
  mCanvas.width = window.innerWidth;
  mCanvas.height = window.innerHeight;
}
resizeMatrix();
window.addEventListener('resize', resizeMatrix);

const chars = "01アイウエオカキクケコサシスセソラリルレロ";
const fontSize = 16;
let drops = Array(Math.floor(mCanvas.width / fontSize)).fill(1);

function drawMatrix() {
  // capa semitransparente sobre el frame anterior = efecto de rastro
  mCtx.fillStyle = "rgba(6,7,10,0.08)";
  mCtx.fillRect(0, 0, mCanvas.width, mCanvas.height);
  mCtx.font = fontSize + "px monospace";

  for (let x = 0; x < drops.length; x++) {
    const char = chars[Math.floor(Math.random() * chars.length)];
    mCtx.fillStyle = Math.random() > 0.93 ? "#ff2ec4" : "#00ffe1";
    mCtx.fillText(char, x * fontSize, drops[x] * fontSize);

    if (drops[x] * fontSize > mCanvas.height && Math.random() > 0.975) {
      drops[x] = 0;
    }
    drops[x]++;
  }
}

setInterval(drawMatrix, 50);
