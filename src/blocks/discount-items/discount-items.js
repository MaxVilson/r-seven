const ready = require('../../js/utils/documentReady.js');
const Swiper = require('../../../node_modules/swiper/js/swiper');

ready(function () {
  const swiper = new Swiper('.discount-items__slider', {
    slidesPerView: 1,
    navigation: {
      nextEl: '.discount-items__mobile-controls .swiper-button-next',
      prevEl: '.discount-items__mobile-controls .swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2
      },
      1200: {
        slidesPerView: 4,
        navigation: {
          nextEl: '.discount-items__desktop-controls .swiper-button-next',
          prevEl: '.discount-items__desktop-controls .swiper-button-prev',
        },
      }
    }
  })
})