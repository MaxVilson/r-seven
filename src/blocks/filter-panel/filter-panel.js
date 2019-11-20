const ready = require('../../js/utils/documentReady.js');
const Swiper = require('../../../node_modules/swiper/js/swiper');

ready(function () {
  const swiper = new Swiper('.filter-panel__slider', {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 10,
  });

  if (getWindowWidth() >= 1200) {
    swiper.destroy(deleteInstance=true, cleanStyles=true)
  }

  function getWindowWidth() {
    return window.innerWidth || document.body.clientWidth;
  }
});
