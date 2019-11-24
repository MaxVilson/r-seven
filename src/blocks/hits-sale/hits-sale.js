const ready = require('../../js/utils/documentReady.js');
const Swiper = require('../../../node_modules/swiper/js/swiper');

ready(function () {
  const swiper = new Swiper('.hits-sale__slider', {
    slidesPerView: 1,
    navigation: {
      nextEl: '.hits-sale__mobile-controls .swiper-button-next',
      prevEl: '.hits-sale__mobile-controls .swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2
      },
      960: {
        slidesPerView: 3
      },

      1200: {
        slidesPerView: 'auto',
        slidesPerColumn: 2,
        spaceBetween: 20,
        navigation: {
          nextEl: '.hits-sale__desktop-controls .swiper-button-next',
          prevEl: '.hits-sale__desktop-controls .swiper-button-prev',
        },
      }
    }
  })
})