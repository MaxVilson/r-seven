/* global document */

const ready = require('../../js/utils/documentReady.js');

ready(function(){
  const items = document.querySelectorAll('.filter-panel__slide');
  const btnsClose = document.querySelectorAll('.filter-btn__close');

  for (let i = 0; i < btnsClose.length; i++) {
    btnsClose[i].addEventListener('click', () => {
      items[i].style.display = 'none';
    })
  }
});
