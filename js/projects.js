// Una terminal por proyecto, con datos reales y corregidos por Alejandra.
// Requiere que js/terminal.js esté cargado antes que este archivo.

const feraltarPanelScript = [
  { type: 'cmd', text: 'cd panel.feraltar && cat README.md' },
  { type: 'out', text: 'Panel administrativo / backend de Feraltar — panel.feraltar.com' },
  { type: 'out', text: 'rol: Senior Full Stack Engineer · desde 2019 · en producción' },
  { type: 'out', cls: 'commit', text: '- backend de reservas, CRM y procesos operativos' },
  { type: 'out', cls: 'commit', text: '- migración completa de infraestructura a AWS EC2 + S3' },
  { type: 'cmd', text: 'cat stack.json' },
  { type: 'out', cls: 'highlight', text: '["Laravel","PHP","MySQL","AWS EC2","AWS S3","REST APIs"]' },
];

const feraltarScript = [
  { type: 'cmd', text: 'cd feraltar && cat README.md' },
  { type: 'out', text: 'Sitio de reservas de Feraltar — feraltar.com' },
  { type: 'out', text: 'rol: desarrollo backend y frontend · PHP · desde 2020 · en producción' },
  { type: 'out', cls: 'commit', text: '- sistema de reservas y checkout' },
  { type: 'out', cls: 'commit', text: '- pagos con Stripe: links multi-moneda + recordatorios automáticos' },
  { type: 'cmd', text: 'cat stack.json' },
  { type: 'out', cls: 'highlight', text: '["PHP","Laravel","MySQL","Stripe"]' },
];

const cabsiScript = [
  { type: 'cmd', text: 'cd cabsi && cat README.md' },
  { type: 'out', text: 'Sitio web de booking — cabsi.mx' },
  { type: 'out', text: 'rol: Backend / Full Stack Engineer · desde 2020 · en producción' },
  { type: 'out', cls: 'commit', text: '- arquitectura en capas: Controller → FormRequest → Service → Repository → Model' },
  { type: 'out', cls: 'commit', text: '- procesamiento asíncrono con Laravel Queues' },
  { type: 'out', cls: 'commit', text: '- testing con Pest' },
  { type: 'cmd', text: 'cat stack.json' },
  { type: 'out', cls: 'highlight', text: '["Laravel","PHP","MySQL","REST APIs","Pest"]' },
];

const nuxtScript = [
  { type: 'cmd', text: 'cd cancun-airport-net && cat README.md' },
  { type: 'out', text: 'Sitio público de Cancún Airport Transportation — cancun-airport.net' },
  { type: 'out', text: 'rol: desarrollo y mantenimiento de secciones clave · Nuxt.js (SSR)' },
  { type: 'out', cls: 'commit', text: '- implementé el sistema completo de internacionalización (ES/EN/RU)' },
  { type: 'out', cls: 'commit', text: '- desarrollo de secciones: motor de reservas, info de vuelos, servicios' },
  { type: 'out', cls: 'commit', text: '- sitio orientado a SEO: renta de autos, boletos de ferry, terminales' },
  { type: 'cmd', text: 'cat stack.json' },
  { type: 'out', cls: 'highlight', text: '["Nuxt.js","Vue.js","SSR","i18n","REST APIs"]' },
];

// Proyecto actual, en desarrollo activo — se muestra junto a la
// terminal de trayectoria, no en la sección de proyectos.
const cabsitaxiScript = [
  { type: 'cmd', text: 'cat STATUS.md' },
  { type: 'out', text: 'Cabsi Taxi — plataforma de venta de viajes tipo taxi' },
  { type: 'out', text: 'estado: en desarrollo activo' },
  { type: 'out', cls: 'commit', text: '- app para choferes (React + PWA)' },
  { type: 'out', cls: 'commit', text: '- sistema de turnos (shifts) para vendedores' },
  { type: 'out', cls: 'commit', text: '- backend en Laravel, arquitectura en capas' },
  { type: 'cmd', text: 'cat stack.json' },
  { type: 'out', cls: 'highlight', text: '["React","PWA","Laravel","MySQL","REST APIs"]' },
];

initTerminal(document.getElementById('proy-feraltar-panel'), document.getElementById('feraltarPanelBody'), feraltarPanelScript);
initTerminal(document.getElementById('proy-feraltar'), document.getElementById('feraltarBody'), feraltarScript);
initTerminal(document.getElementById('proy-cabsi'), document.getElementById('cabsiBody'), cabsiScript);
initTerminal(document.getElementById('proy-nuxt'), document.getElementById('nuxtBody'), nuxtScript);
initTerminal(document.getElementById('proy-cabsitaxi'), document.getElementById('cabsitaxiBody'), cabsitaxiScript);
