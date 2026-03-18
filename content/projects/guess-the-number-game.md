---
title: Guess the Number Game
description: Juego interactivo desarrollado con JavaScript donde el usuario debe adivinar un número aleatorio entre 1 y 100.
image: guessthenumber.png
slug: guess-the-number-game
---

# 🎯 Guess The Number Game

![Guess The Number Game](https://raw.githubusercontent.com/dmpb/guess-the-number-game/main/public/images/screenshot_game.png)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) ![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white) ![Status](https://img.shields.io/badge/status-active-success?style=for-the-badge) ![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge) ![Made with Love](https://img.shields.io/badge/made%20with-❤️-red?style=for-the-badge)

Aplicación web sencilla en la que el usuario debe adivinar un número secreto generado aleatoriamente por el sistema. El juego proporciona retroalimentación en cada intento para ayudar al usuario a encontrar la respuesta correcta.

## 📖 Descripción

Al iniciar la aplicación, se genera un número aleatorio.  
El usuario debe ingresar un número e intentar adivinarlo.

En cada intento, el sistema responde:

- Si el número es mayor al secreto → "Muy alto"
- Si el número es menor al secreto → "Muy bajo"
- Si el número es correcto → el juego finaliza

El objetivo es acertar el número en la menor cantidad de intentos posible.


## 🚀 Cómo ejecutar el proyecto

### 🐳 Opción 1: Con Docker

1. Construye la imagen:

```bash
docker build -t guess-the-number-game .
```

2. Levanta el contenedor:

```bash
docker run --rm -p 8080:80 guess-the-number-game
```

3. Abre en el navegador:

```
http://localhost:8080
```

### 🧪 Opción 2: Sin Docker (PHP integrado)

1. Desde la raíz del proyecto:

```bash
php -S localhost:8080 -t public
```

2. Abre en el navegador:

```
http://localhost:8080
```
