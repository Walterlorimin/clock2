const slide= document.querySelectorAll('.slide img')
let slideIndex= 0;
let interval = null;
//initializeSlide();
document.addEventListener("DOMContentLoaded", initializeSlide);

function initializeSlide(){
    slide[slideIndex].classList.add("displaySlide");
    intervalId= setInterval(nextSlide, 4000);
    console.log(intervalId);

}

function showSlider(){

}
function prevSlide(){

}
function nextSlide(){

}
