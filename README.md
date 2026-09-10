# 🎮 Juego del Ahorcado | JavaScript

<p align="center">
    <img src="./assets/img/preview.png" alt="Juego del Ahorcado" width="800">
</p>

<div align="center">
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000000&style=for-the-badge"/>
    <img src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=FFFFFF&style=for-the-badge"/>
    <img src="https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=FFFFFF&style=for-the-badge"/>
    <img src="https://img.shields.io/badge/Git-F05032?logo=git&logoColor=FFFFFF&style=for-the-badge"/>
</div>

<br>

<p align="center">
    🎯 Un clásico Juego del Ahorcado desarrollado con HTML, CSS y JavaScript.
</p>

## 🎯 ¿Cómo funciona?

El objetivo del juego es **descubrir la palabra oculta antes de agotar todos los intentos disponibles**.

Al comenzar una partida, el juego selecciona una palabra y muestra su categoría como pista.

El jugador deberá seleccionar las letras que crea que forman parte de la palabra.

### ✅ Letra correcta

Si la letra seleccionada pertenece a la palabra:

* `1`: La letra aparece en su posición correspondiente.
* `2`: Se mantienen los intentos disponibles.
* `3`: El juego verifica si la palabra ha sido completada.

### ❌ Letra incorrecta

Si la letra no pertenece a la palabra:

* `1`: Se pierde un intento.
* `2`: Se agrega una nueva parte al dibujo del ahorcado.
* `3`: El juego continúa hasta descubrir la palabra o quedarse sin intentos.

## ⚙️ Características

* `01` 🎲 Selección dinámica de palabras.
* `02` 🏷️ Palabras organizadas por categorías.
* `03` ⌨️ Teclado virtual interactivo.
* `04` ❤️ Sistema de intentos.
* `05` 💀 Dibujo progresivo del ahorcado.
* `06` 🏆 Detección de victoria.
* `07` ☠️ Detección de derrota.
* `08` 🔄 Opción para iniciar una nueva partida.
* `09` 📱 Diseño adaptable a diferentes pantallas.

## 🧠 Tecnologías utilizadas

El proyecto fue desarrollado utilizando tecnologías web fundamentales, sin frameworks.

```text
HTML5        → Estructura de la aplicación
CSS3         → Diseño y estilos
JavaScript   → Lógica del juego
SVG          → Dibujo del ahorcado
Git          → Control de versiones
GitHub Pages → Despliegue
```

## 📂 Estructura del proyecto

```text
juego-del-ahorcad/
│
├── css/
│   ├── atoms.css
│   ├── css-reset.css
│   ├── molecules.css
│   ├── organisms.css
│   ├── style.css
│   └── variables.css
│
├── js/
│   ├── app.js
│   ├── game.js
│   ├── hangman-drawing.js
│   └── words.js
│
├── index.html
└── README.md
```

## 🚀 Demo

Puedes probar el proyecto directamente desde GitHub Pages:

<div align="center">

### 🎮 [JUGAR AHORA](https://luidmachacca.github.io/juego-del-ahorcad/)

</div>


##👨‍💻 Autor

<div align="center">
    <a href="https://github.com/luidmachacca">
        <img src="https://img.shields.io/badge/GitHub-luidmachacca-181717?logo=github&logoColor=FFFFFF&style=for-the-badge"/>
    </a>
</div>



