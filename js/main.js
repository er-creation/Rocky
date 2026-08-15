/* ==========================================================
   Rocky Portfolio
   Main JavaScript
   Theme : Futuristic Hacker Style
   ----------------------------------------------------------
   Features
   - Custom Cursor
   - Scroll Progress Bar
   - Scroll Reveal Animation
   - Floating Action Button
   - Smooth Scrolling
   - Ripple Click Animation
   - Keyboard Shortcut (H = Home)
   - Easter Egg (Type ROCKY)
   ========================================================== */

"use strict";

/* ==========================================================
   Wait Until DOM Ready
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    initializeCursor();

    initializeScrollProgress();

    initializeReveal();

    initializeFloatingButton();

    initializeRippleEffect();

    initializeKeyboardShortcut();

    initializeEasterEgg();

});

/* ==========================================================
   Custom Cursor
   ========================================================== */

function initializeCursor(){

    const cursor = document.querySelector(".cursor");

    if(!cursor) return;

    document.addEventListener("mousemove",(event)=>{

        cursor.style.left = event.clientX + "px";
        cursor.style.top = event.clientY + "px";

    });

    document.querySelectorAll("a,button").forEach(item=>{

        item.addEventListener("mouseenter",()=>{

            cursor.style.transform =
                "translate(-50%,-50%) scale(1.8)";

        });

        item.addEventListener("mouseleave",()=>{

            cursor.style.transform =
                "translate(-50%,-50%) scale(1)";

        });

    });

}

/* ==========================================================
   Scroll Progress Bar
   ========================================================== */

function initializeScrollProgress(){

    const progress = document.getElementById("scrollProgress");

    if(!progress) return;

    window.addEventListener("scroll",()=>{

        const scrollTop =
            document.documentElement.scrollTop;

        const scrollHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const percent =
            (scrollTop / scrollHeight) * 100;

        progress.style.width = percent + "%";

    });

}

/* ==========================================================
   Scroll Reveal Animation
   ========================================================== */

function initializeReveal(){

    const elements =
        document.querySelectorAll(".reveal");

    if(elements.length === 0) return;

    const observer =
        new IntersectionObserver((entries)=>{

            entries.forEach(entry=>{

                if(entry.isIntersecting){

                    entry.target.classList.add("active");

                }

            });

        },{

            threshold:0.15

        });

    elements.forEach(item=>{

        observer.observe(item);

    });

}

/* ==========================================================
   Floating Action Button
   ========================================================== */

function initializeFloatingButton(){

    const button = document.getElementById("fab");

    if(!button) return;

    button.style.display = "none";

    window.addEventListener("scroll",()=>{

        if(window.scrollY > 300){

            button.style.display = "block";

        }

        else{

            button.style.display = "none";

        }

    });

    button.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}

/* ==========================================================
   Ripple Click Animation
   ========================================================== */

function initializeRippleEffect(){

    document.querySelectorAll(".nav-btn, button")
    .forEach(button=>{

        button.addEventListener("click",(event)=>{

            const ripple =
                document.createElement("span");

            ripple.className = "ripple";

            const rect =
                button.getBoundingClientRect();

            const size =
                Math.max(rect.width,rect.height);

            ripple.style.width = size + "px";
            ripple.style.height = size + "px";

            ripple.style.left =
                event.clientX - rect.left - size/2 + "px";

            ripple.style.top =
                event.clientY - rect.top - size/2 + "px";

            button.appendChild(ripple);

            setTimeout(()=>{

                ripple.remove();

            },700);

        });

    });

}

/* ==========================================================
   Keyboard Shortcut
   Press H -> Home
   ========================================================== */

function initializeKeyboardShortcut(){

    document.addEventListener("keydown",(event)=>{

        if(event.key.toLowerCase()==="h"){

            if(!location.pathname.endsWith("index.html")){

                window.location.href="index.html";

            }

            else{

                window.scrollTo({

                    top:0,

                    behavior:"smooth"

                });

            }

        }

    });

}

/* ==========================================================
   Easter Egg
   Type ROCKY
   ========================================================== */

function initializeEasterEgg(){

    let typed = "";

    const secret = "ROCKY";

    document.addEventListener("keydown",(event)=>{

        typed += event.key.toUpperCase();

        if(typed.length > secret.length){

            typed = typed.slice(-secret.length);

        }

        if(typed === secret){

            activateHackerMode();

            typed = "";

        }

    });

}

/* ==========================================================
   Hacker Mode Animation
   ========================================================== */

function activateHackerMode(){

    document.body.classList.add("hacker-mode");

    createFlashMessage();

    setTimeout(()=>{

        document.body.classList.remove("hacker-mode");

    },3000);

}

/* ==========================================================
   Floating Hacker Message
   ========================================================== */

function createFlashMessage(){

    const message =
        document.createElement("div");

    message.className = "hacker-popup";

    message.innerHTML = `
        <h2>ACCESS GRANTED</h2>
        <p>Welcome, Rocky.</p>
    `;

    Object.assign(message.style,{

        position:"fixed",
        top:"50%",
        left:"50%",
        transform:"translate(-50%,-50%)",
        padding:"25px 45px",
        background:"rgba(0,0,0,.9)",
        color:"#00ff66",
        border:"2px solid #00ff66",
        borderRadius:"16px",
        fontFamily:"monospace",
        textAlign:"center",
        zIndex:"999999",
        boxShadow:"0 0 30px #00ff66"

    });

    document.body.appendChild(message);

    setTimeout(()=>{

        message.remove();

    },2500);

}