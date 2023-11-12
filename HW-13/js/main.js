"use strict";

// 1

let slideIndex = 0;
const slides = document.getElementsByClassName("slide");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const dotsContainer = document.querySelector(".dots-container");

function showSlides(n) {
    dotsContainer.innerHTML = '';
    const dots = [];
    const totalSlides = slides.length;

    for (let i = 0; i < totalSlides; i++) {
        slides[i].style.display = "none";
        const dot = document.createElement("span");
        dot.classList.add("dot");
        dot.addEventListener("click", () => currentSlide(i));
        dotsContainer.appendChild(dot);
        dots.push(dot);
    }

    nextButton.style.display = n < totalSlides - 1 ? "block" : "none";
    prevButton.style.display = n > 0 ? "block" : "none";

    slides[slideIndex].style.display = "block";
    dots[slideIndex].classList.add("active");
}

function nextSlide() {
    if (slideIndex < slides.length - 1) {
        slideIndex++;
        showSlides(slideIndex);
    }
}

function prevSlide() {
    if (slideIndex > 0) {
        slideIndex--;
        showSlides(slideIndex);
    }
}

function currentSlide(n) {
    slideIndex = n;
    showSlides(slideIndex);
}

showSlides(slideIndex);

// 2

// function createSlider() {
//     const slides = document.getElementsByClassName("slide");
//     const prevButton = document.querySelector(".prev");
//     const nextButton = document.querySelector(".next");
//
//     const showSlides = (n) => {
//         const dotsContainer = document.querySelector(".dots-container");
//         if (!dotsContainer) return;
//         dotsContainer.innerHTML = "";
//         const dots = [];
//
//         for (let i = 0; i < slides.length; i++) {
//             slides[i].style.display = "none";
//             const dot = document.createElement("span");
//             dot.classList.add("dot");
//             dot.addEventListener("click", () => currentSlide(i));
//             dotsContainer.appendChild(dot);
//             dots.push(dot);
//         }
//
//         if (n >= slides.length - 1) {
//             nextButton.style.display = "none";
//         } else {
//             nextButton.style.display = "block";
//         }
//
//         if (n <= 0) {
//             prevButton.style.display = "none";
//         } else {
//             prevButton.style.display = "block";
//         }
//
//         slides[n].style.display = "block";
//         dots[n] && dots[n].classList.add("active");
//     };
//
//     const nextSlide = () => {
//         if (slideIndex < slides.length - 1) {
//             slideIndex++;
//             showSlides(slideIndex);
//         }
//     };
//
//     const prevSlide = () => {
//         if (slideIndex > 0) {
//             slideIndex--;
//             showSlides(slideIndex);
//         }
//     };
//
//     const currentSlide = (n) => {
//         if (n >= 0 && n < slides.length) {
//             slideIndex = n;
//             showSlides(slideIndex);
//         }
//     };
//
//     prevButton && prevButton.addEventListener("click", prevSlide);
//     nextButton && nextButton.addEventListener("click", nextSlide);
//
//     let slideIndex = 0;
//     showSlides(slideIndex);
//
//     return { showSlides, nextSlide, prevSlide, currentSlide };
// }
//
// const slider = createSlider();
// slider.showSlides(0);

// 3

// class Slider {
//     constructor() {
//         this.slideIndex = 0;
//         this.slides = document.querySelectorAll(".slide");
//         this.prevButton = document.querySelector(".prev");
//         this.nextButton = document.querySelector(".next");
//         this.dotsContainer = document.querySelector(".dots-container");
//
//         if (this.prevButton) {
//             this.prevButton.addEventListener("click", () => this.prevSlide());
//         }
//
//         if (this.nextButton) {
//             this.nextButton.addEventListener("click", () => this.nextSlide());
//         }
//
//         this.showSlides(this.slideIndex);
//     }
//
//     createDots() {
//         if (!this.dotsContainer) return;
//         this.dotsContainer.innerHTML = "";
//         const dots = [];
//
//         for (let i = 0; i < this.slides.length; i++) {
//             this.slides[i].style.display = "none";
//             const dot = document.createElement("span");
//             dot.classList.add("dot");
//             dot.addEventListener("click", () => this.currentSlide(i));
//             this.dotsContainer.appendChild(dot);
//             dots.push(dot);
//         }
//
//         return dots;
//     }
//
//     showSlides(n) {
//         const dots = this.createDots();
//
//         if (this.nextButton) {
//             this.nextButton.style.display = n >= this.slides.length - 1 ? "none" : "block";
//         }
//
//         if (this.prevButton) {
//             this.prevButton.style.display = n <= 0 ? "none" : "block";
//         }
//
//         this.slides[this.slideIndex].style.display = "block";
//         if (dots[this.slideIndex]) {
//             dots[this.slideIndex].classList.add("active");
//         }
//     }
//
//     nextSlide() {
//         if (this.slideIndex < this.slides.length - 1) {
//             this.slideIndex++;
//             this.showSlides(this.slideIndex);
//         }
//     }
//
//     prevSlide() {
//         if (this.slideIndex > 0) {
//             this.slideIndex--;
//             this.showSlides(this.slideIndex);
//         }
//     }
//
//     currentSlide(n) {
//         this.slideIndex = n;
//         this.showSlides(this.slideIndex);
//     }
// }
//
// const slider = new Slider();