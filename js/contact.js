const trigger = document.getElementById('contactTrigger');
const modal = document.getElementById('contactModal');
const backdrop = document.getElementById('contactBackdrop');
const closeBtn = document.getElementById('contactClose');
const body = document.getElementById('contactBody');

const REAL_LINES = [
  'ACCESS GRANTED',
  'email: alejandra.altamirano19@gmail.com',
  'tel: +52 56 5293 6126',
  'linkedin: https://www.linkedin.com/in/aleehpandita/',
];

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&*';

function decryptLine(el, finalText, duration = 600) {
  const start = performance.now();
  function frame(now) {
    const progress = Math.min((now - start) / duration, 1);
    const revealCount = Math.floor(progress * finalText.length);
    let out = '';
    for (let i = 0; i < finalText.length; i++) {
      if (i < revealCount || finalText[i] === ' ') out += finalText[i];
      else out += CHARS[Math.floor(Math.random() * CHARS.length)];
    }
    el.textContent = out;
    if (progress < 1) requestAnimationFrame(frame);
    else el.textContent = finalText;
  }
  requestAnimationFrame(frame);
}

function openContact() {
  modal.classList.add('open');
  body.innerHTML = '';
  REAL_LINES.forEach((line, i) => {
    const div = document.createElement('div');
    div.className = 'line out shown';
    body.appendChild(div);
    setTimeout(() => decryptLine(div, line), i * 700);
  });
}

trigger.addEventListener('click', openContact);
closeBtn.addEventListener('click', () => modal.classList.remove('open'));
backdrop.addEventListener('click', () => modal.classList.remove('open'));