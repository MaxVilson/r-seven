/* global document */
const ready = require('../../js/utils/documentReady.js');

ready(function(){
  const close = document.querySelector('.widget-sale__close');
  const widget = document.querySelector('.widget-sale');
  
  close.addEventListener('click', () => {
    widget.style.display = 'none';
  })
});
