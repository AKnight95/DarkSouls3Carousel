"use strict";

let toLeft = document.getElementById("toLeft");
let toRight = document.getElementById("toRight");
let editableImage = document.querySelectorAll("editableImage");
let zoomOutBtn = document.getElementById("zoomOutBtn");
let zoomInBtn = document.getElementById("zoomInBtn");
let xposition = 0;
let angle = 0;
let scale = 1;
let imgWidth;


zoomOutBtn.addEventListener('click', () => {
    // Méthode 1.

    editableImage.style.transform = `scale(2)`;

}
)




zoomInBtn.addEventListener('click', () => {
    // Méthode 1.
     if(scale >= .3)
         scale -= 0.1;
    editableImage.style.transform = `scale(${scale})`;
}
)

console.log(editableImage);


/* ***********************Carousel************************ */

var carousel = document.getElementById('carousel');
var slides = 11;
var speed = 7000; // 5 seconds

function carouselHide(num) {
    indicators[num].setAttribute('data-state', '');
    slides[num].setAttribute('data-state', '');

    slides[num].style.opacity=0;
}

function carouselShow(num) {
    indicators[num].checked = true;
    indicators[num].setAttribute('data-state', 'active');
    slides[num].setAttribute('data-state', 'active');

    slides[num].style.opacity=1;
}

function setSlide(slide) {
    return function() {
        // Reset all slides
        for (var i = 0; i < indicators.length; i++) {
            indicators[i].setAttribute('data-state', '');
            slides[i].setAttribute('data-state', '');
            
            carouselHide(i);
        }

        // Set defined slide as active
        indicators[slide].setAttribute('data-state', 'active');
        slides[slide].setAttribute('data-state', 'active');
        carouselShow(slide);

        // Stop the auto-switcher
        clearInterval(switcher);
    };
}

function switchSlide() {
    var nextSlide = 0;

    // Reset all slides
    for (var i = 0; i < indicators.length; i++) {
        // If current slide is active & NOT equal to last slide then increment nextSlide
        if ((indicators[i].getAttribute('data-state') == 'active') && (i !== (indicators.length-1))) {
            nextSlide = i + 1;
        }

        // Remove all active states & hide
        carouselHide(i);
    }

    // Set next slide as active & show the next slide
    carouselShow(nextSlide);
}

if (carousel) {
    var slides = carousel.querySelectorAll('.slide');
    var indicators = carousel.querySelectorAll('.indicator');

    var switcher = setInterval(function() {
        switchSlide();
    }, speed);

    for (var i = 0; i < indicators.length; i++) {
        indicators[i].addEventListener("click", setSlide(i));
    }
}

console.log(slides);
console.log(indicators);