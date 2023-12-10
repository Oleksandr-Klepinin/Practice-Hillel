"use strict";

class Slider {
    constructor() {
        this.slideIndex = 0;
        this.slides = document.querySelectorAll(".slide");
        this.prevButton = document.querySelector(".prev");
        this.nextButton = document.querySelector(".next");
        this.dotsContainer = document.querySelector(".dots-container");

        if (this.prevButton) {
            this.prevButton.addEventListener("click", () => this.prevSlide());
        }

        if (this.nextButton) {
            this.nextButton.addEventListener("click", () => this.nextSlide());
        }

        this.showSlides(this.slideIndex);
    }

    createDots() {
        if (!this.dotsContainer) return;
        this.dotsContainer.innerHTML = "";
        const dots = [];

        for (let i = 0; i < this.slides.length; i++) {
            this.slides[i].style.display = "none";
            const dot = document.createElement("span");
            dot.classList.add("dot");
            dot.addEventListener("click", () => this.currentSlide(i));
            this.dotsContainer.appendChild(dot);
            dots.push(dot);
        }

        return dots;
    }

    showSlides(n) {
        const dots = this.createDots();

        if (this.nextButton) {
            this.nextButton.style.display = n >= this.slides.length - 1 ? "none" : "block";
        }

        if (this.prevButton) {
            this.prevButton.style.display = n <= 0 ? "none" : "block";
        }

        this.slides[this.slideIndex].style.display = "block";
        if (dots[this.slideIndex]) {
            dots[this.slideIndex].classList.add("active");
        }
    }

    nextSlide() {
        if (this.slideIndex < this.slides.length - 1) {
            this.slideIndex++;
            this.showSlides(this.slideIndex);
        }
    }

    prevSlide() {
        if (this.slideIndex > 0) {
            this.slideIndex--;
            this.showSlides(this.slideIndex);
        }
    }

    currentSlide(n) {
        this.slideIndex = n;
        this.showSlides(this.slideIndex);
    }
}

const slider = new Slider();