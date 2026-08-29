// Efecto de escritura para el nombre en el hero.
// Escribe el texto letra por letra y, al terminar, activa el glitch (ver css .glitch-active).

const fullText = "ALEJANDRA LARRAÑAGA ALTAMIRANO";
const typedEl = document.getElementById('typed');
const gcyan = document.getElementById('gcyan');
const gmag = document.getElementById('gmag');
const titleWrap = document.getElementById('titleWrap');

let charIndex = 0;

function typeStep() {
  if (charIndex <= fullText.length) {
    typedEl.textContent = fullText.slice(0, charIndex);
    charIndex++;
    setTimeout(typeStep, 70);
  } else {
    gcyan.textContent = fullText;
    gmag.textContent = fullText;
    titleWrap.classList.add('glitch-active');
  }
}

setTimeout(typeStep, 500);
