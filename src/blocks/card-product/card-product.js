const ready = require('../../js/utils/documentReady.js');
const Swiper = require('../../../node_modules/swiper/js/swiper');

ready(function () {
  const galleryThumbs = new Swiper('.card-product__slider-thumbs-container', {
    slidesPerView: 3,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });

  const galleryTop = new Swiper('.card-product__slider-container', {
    pagination: {
      el: '.card-product__slider-pagination',
    },
    navigation: {
      nextEl: '.card-product__slider-thumbs-button-next',
      prevEl: '.card-product__slider-thumbs-button-prev',
    },
    thumbs: {
      swiper: galleryThumbs,
      slideThumbActiveClass: 'card-product__slider-thumbs-slide--active',
    }
  });
});
