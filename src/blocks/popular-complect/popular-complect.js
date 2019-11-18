const ready = require('../../js/utils/documentReady.js');
const Swiper = require('../../../node_modules/swiper/js/swiper');

ready(function () {
  if (getWindowWidth() < 1200) {
    const swiper = new Swiper('.popular-complect__mobile-slider', {
      slidesPerView: 1,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 2
        }
      }
    });
  }

  if (getWindowWidth() >= 1200) {
    const swiper2 = new Swiper('.popular-complect__desktop-slider', {
      slidesPerView: 1,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
  

  function getWindowWidth() {
    return window.innerWidth || document.body.clientWidth;
  }
});
