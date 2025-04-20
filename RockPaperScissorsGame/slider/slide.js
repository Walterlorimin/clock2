const slides= document.querySelectorAll(".slide")
let slideIndex= 0;
let intervalId= null;


document.addEventListener("DOMContentLoaded",InitializeSlider);

function InitializeSlider(){
    if(slides.length >0){


   
    slides[slideIndex].classList.add("displaySlide");
    intervalId=setInterval(nextSlide, 5000);
    }
   

}
function showSlide(index) {
    if (index >= slides.length) {
        index = 0;
    } else if (index < 0) {
        index = slides.length - 1;
    }

    slideIndex = index; // ✅ update global index here

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });

    slides[slideIndex].classList.add("displaySlide");
}
function prevSlide(){
    slideIndex --;
    showSlide(slideIndex);

}
function nextSlide(){
    slideIndex ++;
    showSlide(slideIndex);
    

}