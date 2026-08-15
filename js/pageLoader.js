/* ==========================================================
   Rocky Portfolio
   pageLoader.js
   ----------------------------------------------------------
   Handles:
   - Smooth page transitions
   - Navigation ripple explosion
   - Fade between pages
   - Browser back/forward support
   ========================================================== */

"use strict";

/* ==========================================================
   Initialize
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    pageEnterAnimation();

    initializePageLinks();

});

/* ==========================================================
   Page Enter Animation
   ========================================================== */

function pageEnterAnimation() {

    document.body.style.opacity = "0";
    document.body.style.transform = "translateY(20px)";

    requestAnimationFrame(() => {

        document.body.style.transition =
            "opacity .6s ease, transform .6s ease";

        document.body.style.opacity = "1";
        document.body.style.transform = "translateY(0)";

    });

}

/* ==========================================================
   Navigation Transition
   ========================================================== */

function initializePageLinks() {

    const links =
        document.querySelectorAll(".page-link");

    links.forEach(link => {

        link.addEventListener("click", function (event) {

            const href = this.getAttribute("href");

            if (
                !href ||
                href.startsWith("#") ||
                href.startsWith("javascript:")
            ) {

                return;

            }

            event.preventDefault();

            createPageRipple(event);

            setTimeout(() => {

                document.body.style.transition =
                    "opacity .5s ease, transform .5s ease";

                document.body.style.opacity = "0";

                document.body.style.transform =
                    "translateY(-20px)";

            }, 180);

            setTimeout(() => {

                window.location.href = href;

            }, 650);

        });

    });

}

/* ==========================================================
   Ripple Explosion
   ========================================================== */

function createPageRipple(     ) {

    const ripple =
        document.createElement("div");

    ripple.className = "page-ripple";

    ripple.style.left = event.clientX + "px";
    ripple.style.top = event.clientY + "px";

    document.body.appendChild(ripple);

    setTimeout(() => {

        ripple.remove();

    }, 1200);

}

/* ==========================================================
   Browser Cache Support
   ========================================================== */

window.addEventListener("pageshow", () => {

    document.body.style.opacity = "1";
    document.body.style.transform = "translateY(0)";

});

/* ==========================================================
   Prevent Double Click Navigation
   ========================================================== */

let navigationLocked = false;

document.addEventListener("click", event => {

    const target = event.target.closest(".page-link");

    if (!target) return;

    if (navigationLocked) {

        event.preventDefault();
        return;

    }

    navigationLocked = true;

    setTimeout(() => {

        navigationLocked = false;

    }, 1000);

});

/* ==========================================================
   Optional Keyboard Navigation
   ESC -> Cancel Current Transition
   ========================================================== */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        document.body.style.opacity = "1";
        document.body.style.transform = "translateY(0)";

    }

});