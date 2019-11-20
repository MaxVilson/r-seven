// import $ from '../../../node_modules/jquery/dist/jquery';
// import '../../../node_modules/ion-rangeslider/js/ion.rangeSlider';

const ready = require('../../js/utils/documentReady.js');

ready(function () {
  const fieldStart = document.getElementById('fieldRangeStart');
  const fieldEnd = document.getElementById('fieldRangeEnd');

  $('.input-range__input').ionRangeSlider({
    type: "double",
    min: 0,
    max: 1000000,
    onChange(data) {
      fieldStart.value = data.from;
      fieldEnd.value = data.to;
    }
  });
})