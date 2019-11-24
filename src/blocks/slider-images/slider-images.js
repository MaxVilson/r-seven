const ready = require('../../js/utils/documentReady.js');
const Swiper = require('../../../node_modules/swiper/js/swiper');

ready(function () {
  var swiper = new Swiper('.slider-images__slider', {
    pagination: {
      el: '.slider-images__pagination',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30
      }
    }
  });
});
