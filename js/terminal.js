// Motor genérico de terminal, reutilizado por about.js y projects.js.
// initTerminal(sectionEl, bodyEl, script) arranca la simulación una sola
// vez, cuando sectionEl entra en pantalla.

function typeChars(el, text, speed, done) {
  let i = 0;
  const cursor = document.createElement('span');
  cursor.className = 'type-cursor';
  el.appendChild(cursor);

  function step() {
    if (i < text.length) {
      cursor.insertAdjacentText('beforebegin', text[i]);
      i++;
      setTimeout(step, speed);
    } else {
      cursor.remove();
      done();
    }
  }
  step();
}

function runTerminalScript(body, script, index = 0) {
  if (index >= script.length) return;
  const item = script[index];

  const line = document.createElement('div');
  line.className = `line ${item.type}${item.cls ? ' ' + item.cls : ''} shown`;
  body.appendChild(line);

  if (item.type === 'cmd') {
    typeChars(line, item.text, 36, () => {
      setTimeout(() => runTerminalScript(body, script, index + 1), 240);
    });
  } else {
    if (item.hash) {
      const hashSpan = document.createElement('span');
      hashSpan.className = 'hash';
      hashSpan.textContent = item.hash + ' ';
      line.appendChild(hashSpan);
      line.appendChild(document.createTextNode(item.text));
    } else {
      line.textContent = item.text;
    }
    setTimeout(() => runTerminalScript(body, script, index + 1), 200);
  }
}

function initTerminal(sectionEl, bodyEl, script) {
  let started = false;
  const observer = new IntersectionObserver((items) => {
    items.forEach(item => {
      if (item.isIntersecting && !started) {
        started = true;
        runTerminalScript(bodyEl, script);
        observer.disconnect();
      }
    });
  }, { threshold: 0.3 });
  observer.observe(sectionEl);
}
