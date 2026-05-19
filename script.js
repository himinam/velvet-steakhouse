window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if(loader){

        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 1000);

    }

});

// SCROLL NAVBAR

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(header){
        header.classList.toggle("header-scroll", window.scrollY > 50);
    }

});

// CONTADOR

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");

        const c = +counter.innerText;

        const increment = target / 200;

        if(c < target){

            counter.innerText = `${Math.ceil(c + increment)}`;

            setTimeout(updateCounter, 10);

        } else {

            counter.innerText = target;

        }

    }

    updateCounter();

});

// SCROLL REVEAL

if(typeof ScrollReveal !== "undefined"){

    ScrollReveal().reveal('.hero-content',{
        delay:300,
        distance:'60px',
        origin:'bottom',
        duration:1200
    });

    ScrollReveal().reveal('.card',{
        interval:200,
        distance:'50px',
        origin:'bottom'
    });

    ScrollReveal().reveal('.galeria-grid img',{
        interval:200,
        scale:.8
    });

    ScrollReveal().reveal('.testimonio',{
        interval:200,
        origin:'bottom'
    });

}
const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", ()=>{

    nav.classList.toggle("active");

});

const galeriaImgs = document.querySelectorAll(".galeria-grid img");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightboxImg");

const cerrarLightbox = document.getElementById("cerrarLightbox");

galeriaImgs.forEach(img=>{

    img.addEventListener("click", ()=>{

        lightbox.style.display = "flex";

        lightboxImg.src = img.src;

    });

});

cerrarLightbox.addEventListener("click", ()=>{

    lightbox.style.display = "none";

});
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{

    cursor.style.left = e.clientX + "px";

    cursor.style.top = e.clientY + "px";

});
tsParticles.load("tsparticles", {
    particles: {
        number: {
            value: 50
        },
        color: {
            value: "#d4af37"
        },
        move: {
            enable: true,
            speed: 1
        }
    }
});

const text = "Experiencia Gourmet Premium";

let index = 0;

function escribir(){

    if(index < text.length){

        document.getElementById("typingText").innerHTML += text.charAt(index);

        index++;

        setTimeout(escribir,100);

    }

}

escribir();

document.querySelectorAll("button").forEach(btn=>{

    btn.addEventListener("click", ()=>{

        document.getElementById("clickSound").play();

    });

});

// ==========================
// CHAT IA
// ==========================

const chatToggle = document.getElementById("chatToggle");

const chatbot = document.getElementById("chatbot");

const cerrarChat = document.getElementById("cerrarChat");

const sendBtn = document.getElementById("sendBtn");

const chatInput = document.getElementById("chatInput");

const chatBody = document.getElementById("chatBody");


// ABRIR CHAT

chatToggle.addEventListener("click", ()=>{

    chatbot.style.display = "flex";

});


// CERRAR CHAT

cerrarChat.addEventListener("click", ()=>{

    chatbot.style.display = "none";

});


// ENVIAR MENSAJE

sendBtn.addEventListener("click", enviarMensaje);

chatInput.addEventListener("keydown",(e)=>{

    if(e.key === "Enter"){

        enviarMensaje();

    }

});


// FUNCION MENSAJE

async function enviarMensaje(){

    const texto = chatInput.value.trim();

    if(!texto) return;

    agregarMensaje(texto,"user-message");

    chatInput.value = "";

    try{

        const respuesta = await obtenerRespuestaIA(texto);

        agregarMensaje(respuesta,"bot-message");

    }catch(error){

        agregarMensaje("❌ Error conectando IA","bot-message");

    }

}


// AGREGAR MENSAJES

function agregarMensaje(texto,clase){

    const div = document.createElement("div");

    div.classList.add(clase);

    div.innerText = texto;

    chatBody.appendChild(div);

    chatBody.scrollTop = chatBody.scrollHeight;

}


// IA RENDER

async function obtenerRespuestaIA(mensaje){

    const response = await fetch("https://chat-ia-app.onrender.com/chat",{

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify({

            messages:[

                {
                    role:"system",
                    content:"Eres un asistente de un restaurante premium llamado Velvet Steakhouse. Respondes corto, elegante y profesional."
                },

                {
                    role:"user",
                    content:mensaje
                }

            ]

        })

    });

    const data = await response.json();

    return data.respuesta;

}