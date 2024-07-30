// Бургер меню

const menuIcon = document.querySelector(".menu-icon")
const header = document.querySelector(".header")
const body = document.querySelector("body")

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("menu-icon__active")

    header.classList.toggle("header--mobile")

    // body.classList.toggle("no-scroll")
})

// Slider-arrows

const sliderArrows = document.querySelector(".slider-arrows")
const slidesArrows = sliderArrows.querySelectorAll(".slider-arrows__item")
const next = sliderArrows.querySelector(".slider-arrows__arrow--right")
const prev = sliderArrows.querySelector(".slider-arrows__arrow--left")

let current = 0
let total = slidesArrows.length - 1


function showSlideArrows(){
    slidesArrows.forEach(slide => {
        slide.classList.add("hide")
    });
    slidesArrows[current].classList.remove("hide")
}

showSlideArrows()

next.addEventListener("click", () => {
    if (current == total) {
        current = 0
    }else{
        current++
    }
    showSlideArrows()
})

prev.addEventListener("click", () => {
    if (current == 0) {
        current = total
    }else{
        current--
    }
    showSlideArrows();
})

// Slider-dots

const sliderDots = document.querySelector(".slider-dots")
const slidesDots = sliderDots.querySelectorAll(".slider-dots__item")
const wrapperDots = sliderDots.querySelector(".slider-dots__nav")

const dots = []

for (let i = 0; i < slidesDots.length; i++) {
    const dot = document.createElement('button')

    dot.dataset.slideTo = i;

    dot.classList.add('slider-dots__nav-item')
    if (i == 0) {
        dot.classList.add('slider-dots__nav-item--active')
    }

    if(i != 0){
        slidesDots[i].classList.add('hide')
    }

    dot.addEventListener('click', showSlideDots)

    wrapperDots.append(dot)
    dots.push(dot)
}

function showSlideDots(e) {
    slideTo = e.target.dataset.slideTo

    slidesDots.forEach(slide => {
        slide.classList.add('hide')
    });
    slidesDots[slideTo].classList.remove('hide')

    dots.forEach(dot => {
        dot.classList.remove('slider-dots__nav-item--active')
    });
    dots[slideTo].classList.add('slider-dots__nav-item--active')
}


