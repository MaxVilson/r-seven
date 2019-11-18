const ready = require('../../js/utils/documentReady.js');
const Swiper = require('../../../node_modules/swiper/js/swiper');

ready(function(){
  var swiper = new Swiper('.promo__slider', {
    pagination: {
      el: '.promo__pagination',
    },
  });
});
