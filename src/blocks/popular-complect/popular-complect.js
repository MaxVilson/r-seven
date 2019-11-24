const ready = require('../../js/utils/documentReady.js');
const Swiper = require('../../../node_modules/swiper/js/swiper');

ready(function () {
  if (getWindowWidth() < 1200) {
    const swiper = new Swiper('.popular-complect__mobile-slider', {
      slidesPerView: 1,
      navigation: {
        nextEl: '.popular-complect__mobile-controls .swiper-button-next',
        prevEl: '.popular-complect__mobile-controls .swiper-button-prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        960: {
          slidesPerView: 3,
        }
      }
    });
  }

  if (getWindowWidth() >= 1200) {
    const swiper2 = new Swiper('.popular-complect__desktop-slider--js', {
      slidesPerView: 1,
      navigation: {
        nextEl: '.popular-complect__desktop-controls .swiper-button-next',
        prevEl: '.popular-complect__desktop-controls .swiper-button-prev',
      },
    });
  }
  

  function getWindowWidth() {
    return window.innerWidth || document.body.clientWidth;
  }
});
