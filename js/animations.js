/* ==========================================================
   Rocky Portfolio
   animations.js
   Futuristic Hacker Animation Engine
   ----------------------------------------------------------
   Features
   - Loading Screen Transition
   - Matrix Rain
   - Green Particle System
   - Hero Glitch Effect
   - Floating Binary Numbers
   ========================================================== */

"use strict";

document.addEventListener("DOMContentLoaded", () => {

    initializeLoadingScreen();
    initializeMatrixRain();
    initializeParticles();
    initializeHeroGlitch();
    initializeBinaryRain();

});

/* ==========================================================
   Loading Screen
   ========================================================== */

function initializeLoadingScreen() {

    const loader = document.getElementById("loadingScreen");
    const main = document.getElementById("mainContent");

    if (!loader || !main) return;

    setTimeout(() => {

        loader.classList.add("fade-out");

        setTimeout(() => {

            loader.style.display = "none";

            main.style.opacity = "1";

            main.classList.add("fade-in");

        }, 900);

    }, 5000);

}

/* ==========================================================
   Matrix Rain
   ========================================================== */

function initializeMatrixRain() {

    const canvas = document.getElementById("matrixCanvas");

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    function resize() {

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

    }

    resize();

    window.addEventListener("resize", resize);

    const letters =
        "01";

    const fontSize = 16;

    let columns =
        Math.floor(canvas.width / fontSize);

    let drops = [];

    function resetDrops() {

        columns =
            Math.floor(canvas.width / fontSize);

        drops = [];

        for (let i = 0; i < columns; i++) {

            drops[i] = Math.random() * -100;

        }

    }

    resetDrops();

    window.addEventListener("resize", resetDrops);

    function draw() {

        ctx.fillStyle = "rgba(0,0,0,0.08)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#00ff66";
        ctx.font = fontSize + "px monospace";

        for (let i = 0; i < drops.length; i++) {

            const char =
                letters[Math.floor(Math.random() * letters.length)];

            ctx.fillText(
                char,
                i * fontSize,
                drops[i] * fontSize
            );

            if (
                drops[i] * fontSize > canvas.height &&
                Math.random() > 0.975
            ) {

                drops[i] = 0;

            }

            drops[i]++;

        }

        requestAnimationFrame(draw);

    }

    draw();

}

/* ==========================================================
   Green Particle System
   ========================================================== */

function initializeParticles() {

    const amount = 40;

    for (let i = 0; i < amount; i++) {

        const particle =
            document.createElement("span");

        particle.className = "particle";

        particle.style.left =
            Math.random() * 100 + "%";

        particle.style.top =
            Math.random() * 100 + "%";

        particle.style.animationDuration =
            (4 + Math.random() * 6) + "s";

        particle.style.animationDelay =
            Math.random() * 5 + "s";

        document.body.appendChild(particle);

    }

}

/* ==========================================================
   Hero Glitch Effect
   ========================================================== */

function initializeHeroGlitch() {

    const title =
        document.querySelector(".hero-title");

    if (!title) return;

    const original = title.textContent;

    const chars =
        "!@#$%^&*ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    setInterval(() => {

        title.textContent = original
            .split("")
            .map(letter => {

                if (Math.random() > 0.92) {

                    return chars[
                        Math.floor(Math.random() * chars.length)
                    ];

                }

                return letter;

            })
            .join("");

        setTimeout(() => {

            title.textContent = original;

        }, 120);

    }, 2500);

}

/* ==========================================================
   Floating Binary Rain
   ========================================================== */

function initializeBinaryRain() {

    const total = 10;

    for (let i = 0; i < total; i++) {

        const binary =
            document.createElement("div");

        binary.className = "binary-number";

        binary.textContent =
            randomBinary(16);

        binary.style.left =
            Math.random() * 100 + "%";

        binary.style.animationDuration =
            (8 + Math.random() * 12) + "s";

        binary.style.animationDelay =
            Math.random() * 10 + "s";

        document.body.appendChild(binary);

    }

}

/* ==========================================================
   Random Binary Generator
   ========================================================== */

function randomBinary(length) {

    let result = "";

    for (let i = 0; i < length; i++) {

        result +=
            Math.random() > 0.5 ? "1" : "0";

    }

    return result;

}

/* ==========================================================
   Page Ripple Explosion
   ========================================================== */
