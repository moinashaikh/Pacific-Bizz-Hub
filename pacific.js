const counters =
document.querySelectorAll(".counter");

counters.forEach(counter=>{

const updateCounter=()=>{

const target=
+counter.getAttribute("data-target");

const count=
+counter.innerText;

const increment=
target/100;

if(count < target){

counter.innerText=
Math.ceil(count + increment);

setTimeout(updateCounter,20);

}else{

counter.innerText=target+"+";

}

};

updateCounter();

});

const faqQuestions =
document.querySelectorAll(".faq-question");

faqQuestions.forEach(btn=>{

btn.addEventListener("click",()=>{

const answer =
btn.nextElementSibling;

if(answer.style.display==="block"){

answer.style.display="none";

}else{

answer.style.display="block";

}

});

});

/* TOP BUTTON */

const topBtn =
document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY > 300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

const contactForm =
document.getElementById("contactForm");

const successMessage =
document.getElementById("success-message");

if(contactForm){

contactForm.addEventListener("submit", async function(e){

e.preventDefault();

const formData = new FormData(contactForm);

const response = await fetch(
"https://formspree.io/f/mpqekbkq",
{
method:"POST",
body:formData,
headers:{
Accept:"application/json"
}
}
);

if(response.ok){

successMessage.classList.add("show");

contactForm.reset();

setTimeout(()=>{

successMessage.classList.remove("show");

},2000);

}else{

alert("Something went wrong!");

}

});

}

/*==========================================
            HERO CAROUSEL
==========================================*/

const heroSlides = document.querySelectorAll(".hero-slide");
const heroDots = document.querySelectorAll(".hero-dot");
const prevBtn = document.querySelector(".hero-prev");
const nextBtn = document.querySelector(".hero-next");

let heroIndex = 0;

function showHeroSlide(index){

    heroSlides.forEach((slide)=>{
        slide.classList.remove("active");
    });

    heroDots.forEach((dot)=>{
        dot.classList.remove("active");
    });

    heroSlides[index].classList.add("active");
    heroDots[index].classList.add("active");

}

function nextHero(){

    heroIndex++;

    if(heroIndex >= heroSlides.length){

        heroIndex = 0;

    }

    showHeroSlide(heroIndex);

}

function prevHero(){

    heroIndex--;

    if(heroIndex < 0){

        heroIndex = heroSlides.length - 1;

    }

    showHeroSlide(heroIndex);

}

nextBtn.addEventListener("click",nextHero);

prevBtn.addEventListener("click",prevHero);

heroDots.forEach((dot,index)=>{

    dot.addEventListener("click",()=>{

        heroIndex = index;

        showHeroSlide(heroIndex);

    });

});

setInterval(nextHero,5000);

const links = document.querySelectorAll(".contact-link");

links.forEach(link=>{

    link.addEventListener("mouseenter",()=>{

        link.style.transform="translateX(10px)";

    });

    link.addEventListener("mouseleave",()=>{

        link.style.transform="translateX(0)";

    });

});