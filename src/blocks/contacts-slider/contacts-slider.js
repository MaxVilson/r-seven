const ready = require('../../js/utils/documentReady.js');
const Swiper = require('../../../node_modules/swiper/js/swiper');

ready(function () {
  if (getWindowWidth() < 1200) {
    var swiper = new Swiper('.contacts-slider__slider', {
      pagination: {
        el: '.contacts-slider__pagination',
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 30
        }
      }
    });
  }

  function getWindowWidth() {
    return window.innerWidth || document.body.clientWidth;
  }
});
