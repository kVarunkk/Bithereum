// For Slideshow

var slide_index = 1;
displaySlides(slide_index);

function nextSlide(n) {
    displaySlides(slide_index += n);
}

function currentSlide(n) {
    displaySlides(slide_index = n);
}

function displaySlides(n) {
    var i;
    var slides = document.getElementsByClassName("showSlide");
    if (n > slides.length) { slide_index = 1 }
    if (n < 1) { slide_index = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slide_index - 1].style.display = "block";
}






// For menu button
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        document.querySelector(".list-items").style.width = "100%";
        document.querySelector(".list").style.display = "block";
        document.querySelector(".menu-btn").style.position = "fixed";
        document.querySelector(".brand").style.position = "fixed";
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        document.querySelector(".list-items").style.width = "0";
        document.querySelector(".list").style.display = "none";
        document.querySelector(".menu-btn").style.position = "absolute";
        document.querySelector(".brand").style.position = "absolute";
        menuOpen = false;
    }
});



var list = document.querySelector(".list");
list.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        document.querySelector(".list-items").style.width = "100%";
        document.querySelector(".list").style.display = "block";
        document.querySelector(".menu-btn").style.position = "fixed";
        document.querySelector(".brand").style.position = "fixed";
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        document.querySelector(".list-items").style.width = "0";
        document.querySelector(".list").style.display = "none";
        document.querySelector(".menu-btn").style.position = "absolute";
        document.querySelector(".brand").style.position = "absolute";
        menuOpen = false;
    }
});






