/* global document */
const ready = require('../../js/utils/documentReady.js');
const $ = require('jquery');
import '../../../node_modules/slick-carousel/slick/slick';

ready(function(){
  $('.promo__slider').slick({
    dots: true,
    arrows: false
  });
});
