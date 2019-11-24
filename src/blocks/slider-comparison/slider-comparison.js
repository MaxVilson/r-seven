const ready = require('../../js/utils/documentReady.js');
const Swiper = require('../../../node_modules/swiper/js/swiper');

ready(function () {
  const swiper = new Swiper('.slider-comparison__slider', {
    slidesPerView: 2, 
    spaceBetween: 20,
    navigation: {
      nextEl: '.slider-comparison__mobile-controls .swiper-button-next',
      prevEl: '.slider-comparison__mobile-controls .swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 3
      },
      1200: {
        slidesPerView: 4,
        navigation: {
          nextEl: '.slider-comparison__desktop-controls .swiper-button-next',
          prevEl: '.slider-comparison__desktop-controls .swiper-button-prev',
        },
      }
    }
  })
})