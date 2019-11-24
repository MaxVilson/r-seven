/* global document */
const ready = require('../../js/utils/documentReady.js');

ready(function () {
  const footerAccordion = () => {
    const items = document.querySelectorAll('.accordion-table__item-inner');
    const subblocks = document.querySelectorAll('.accordion-table__subblocks');
    const icons = document.querySelectorAll('.accordion-table__item-icon');


    for (let i = 0; i < items.length; i++) {
      items[i].addEventListener('click', () => {
        subblocks[i].classList.toggle('accordion-table__subblocks--active');
        icons[i].classList.toggle('accordion-table__item-icon--active');
      })
    }
  }
  footerAccordion();
});