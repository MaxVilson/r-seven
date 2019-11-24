/* global document */
const ready = require('../../js/utils/documentReady.js');

ready(function () {
  const footerAccordion = () => {
    const items = document.querySelectorAll('.accordion__item');
    const lists = document.querySelectorAll('.accordion__subblock');
    const icons = document.querySelectorAll('.accordion__item-icon');

    function getWindowWidth() {
      return window.innerWidth || document.body.clientWidth;
    }

    if (getWindowWidth() < 1200) {
      for (let i = 0; i < items.length; i++) {
        items[i].addEventListener('click', () => {
          lists[i].classList.toggle('accordion__subblock--active');
          items[i].classList.toggle('accordion__item--active');
          icons[i].classList.toggle('accordion__item-icon--active');
        })
      }
    }
  }
  footerAccordion();
});