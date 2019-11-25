/* global document */
const ready = require('../../js/utils/documentReady.js');

ready(function () {
  const footerAccordion = () => {
    const items = document.querySelectorAll('.configurator__item-inner');
    const subblocks = document.querySelectorAll('.configurator__subblocks');
    const icons = document.querySelectorAll('.configurator__item-icon');


    for (let i = 0; i < items.length; i++) {
      items[i].addEventListener('click', () => {
        subblocks[i].classList.toggle('configurator__subblocks--active');
        items[i].classList.toggle('configurator__item-inner--active');
      })
    }
  }
  footerAccordion();
});