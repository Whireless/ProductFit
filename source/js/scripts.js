const prevBtn = document.querySelector('.main-header__button--previus');
const nextBtn = document.querySelector('.main-header__button--next');
const slider = document.querySelectorAll('.main-header__partners-item');

const sliderTwo = document.querySelectorAll('.order__item');
const prevBtnTwo = document.querySelector('.order__button--previus');
const nextBtnTwo = document.querySelector('.order__button--next');

let slideIndex = 1;

// Слайдер партнёров

function showSlides (n) {
  let i;
  if (n > slider.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = slider.length;
  }
  for (i = 0; i < slider.length; i++) {
    slider[i].style.display = 'none';
  }
  slider[slideIndex - 1].style.display = 'block';
};

function plusSlides (n) {
  showSlides(slideIndex += n);
};

function currentSlide (n) {
  showSlides(slideIndex = n);
};

prevBtn.onclick = function () {
  plusSlides(-1);
}

nextBtn.onclick = function () {
  plusSlides(1);
}

showSlides(slideIndex);

// Слайдер тарифов

function showSlidesTwo (n) {
  let i;
  if (n > sliderTwo.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = sliderTwo.length;
  }
  for (i = 0; i < sliderTwo.length; i++) {
    sliderTwo[i].style.display = 'none';
  }
  sliderTwo[slideIndex - 1].style.display = 'flex';
};

function plusSlidesTwo (n) {
  showSlidesTwo(slideIndex += n);
};

function currentSlideTwo (n) {
  showSlidesTwo(slideIndex = n);
};

prevBtnTwo.onclick = function () {
  plusSlidesTwo(-1);
}

nextBtnTwo.onclick = function () {
  plusSlidesTwo(1);
}

showSlidesTwo(slideIndex);
