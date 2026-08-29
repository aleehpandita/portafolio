// Terminal de trayectoria profesional. Requiere que js/terminal.js
// esté cargado antes que este archivo.

const careerScript = [
  { type: 'cmd', text: 'whoami' },
  { type: 'out', text: 'alejandra_altamirano — backend engineer, 10+ años en producción' },

  { type: 'cmd', text: 'git log --oneline --all --reverse' },
  { type: 'out', cls: 'commit', hash: 'a1e4c2f', text: '(2016-08) feat: sistema de reservas + pagos — Cancún Transfers' },
  { type: 'out', cls: 'commit', hash: '5c9b0d4', text: '(2019-06) feat: panel administrativo migrado a AWS — panel.feraltar.com' },
  { type: 'out', cls: 'commit', hash: '4f8c3e0', text: '(2020-01) feat: sitio de reservas en PHP — feraltar.com' },
  { type: 'out', cls: 'commit', hash: '9d1a7b6', text: '(2020-03) feat: plataforma de booking — cabsi.mx' },
  { type: 'out', cls: 'commit', hash: 'e2a71f8', text: '(2020-08) feat: sitio público multi-idioma (Nuxt) — cancun-airport.net' },

  { type: 'cmd', text: 'echo $CURRENT_STATUS' },
  { type: 'out', cls: 'highlight', text: 'construyendo cabsi-taxi: app para choferes + shifts →' },
];

initTerminal(
  document.getElementById('quien-eres'),
  document.getElementById('terminalBody'),
  careerScript
);
