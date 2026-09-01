# ⚡ Alejandra Larrañaga Altamirano — Portfolio

> Backend-focused Full Stack Engineer · 10+ años construyendo sistemas en producción

Portafolio personal con estética cyberpunk: terminal en vivo, lluvia de código estilo Matrix, rutas de neón animadas y un hero con efecto glitch. Construido desde cero, sin frameworks — HTML, CSS y JavaScript puro.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![No frameworks](https://img.shields.io/badge/frameworks-none-00ffe1?style=flat)

🔗 **Live:** ![aleehpandita.dev](https://aleehpandita.dev)

---

## 🖥️ Vista previa

<img width="2956" height="1490" alt="image" src="https://github.com/user-attachments/assets/4b05652c-9dec-4a5a-9838-c3522868538e" />


## ✨ Features

- **Hero interactivo** — nombre con efecto de escritura, glitch cian/magenta, lluvia de código tipo Matrix y partículas flotantes de fondo
- **Zoom-out al hacer scroll** — el hero se aleja como si la cámara retrocediera de un sistema
- **Terminales en vivo** — trayectoria profesional y proyectos simulados como si se ejecutara `git log` real, con tipeo carácter por carácter
- **Ruta de neón animada** — un punto de luz que avanza por una "carretera" lateral conforme haces scroll
- **Sección de proyectos** — una terminal + marco de screenshot por cada proyecto en producción
- **Sección de educación** — tarjetas con animación de aparición y flicker
- 100% responsive, sin dependencias externas más que Google Fonts

## 🛠️ Stack

| Capa | Tecnología |
|---|---|
| Estructura | HTML5 semántico |
| Estilos | CSS3 puro (custom properties, grid, animaciones) |
| Interactividad | JavaScript vanilla (Canvas API, IntersectionObserver) |
| Tipografía | Share Tech Mono, Rajdhani (Google Fonts) |
| Deploy | Vercel |

## 📁 Estructura del proyecto

```
portafolio/
├── index.html              estructura de todas las secciones
├── css/
│   ├── style.css            hero: grid, glitch, tipeo, zoom-out
│   ├── about.css             terminales de trayectoria + ruta neón
│   ├── projects.css          bloques de proyecto + marcos de screenshot
│   └── education.css         tarjetas de educación
├── js/
│   ├── typing.js              efecto de escritura del nombre (hero)
│   ├── matrix.js               lluvia de caracteres tipo Matrix
│   ├── particles.js            partículas flotantes de fondo
│   ├── scroll.js                zoom-out del hero al hacer scroll
│   ├── terminal.js              motor reutilizable de terminales
│   ├── route.js                  ruta de neón + glitches de fondo
│   ├── about.js                   contenido de la terminal de trayectoria
│   ├── projects.js                contenido de cada terminal de proyecto
│   └── education.js               animación de las tarjetas de educación
└── README.md
```

## 🚀 Correr localmente

No requiere instalación ni build. Solo abre `index.html` en el navegador, o usa un servidor local simple:

```bash
npx serve .
```

## ☁️ Deploy en Vercel

1. Sube esta carpeta a un repositorio de GitHub
2. En [vercel.com](https://vercel.com), importa el repo como proyecto nuevo
3. Vercel lo detecta como sitio estático — no requiere configuración adicional
4. Cuando quede bien, mueve tu dominio a este proyecto desde **Settings → Domains**

## 🗺️ Roadmap

- [ ] Agregar capturas reales a los marcos de proyecto (`[ captura pendiente ]`)
- [ ] Sección de contacto
- [ ] Ajustar velocidad del marcador de ruta a gusto

## 👩‍💻 Autora

**Alejandra Larrañaga Altamirano** — Backend Engineer (Laravel, APIs, AWS)
📩 alejandra.altamirano19@gmail.com
