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