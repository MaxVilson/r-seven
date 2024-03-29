/* global document */
const ready = require('../../js/utils/documentReady.js');

ready(function () {
  const footerAccordion = () => {
    const itemTitle = document.querySelectorAll('.page-footer__item-title');
    const items = document.querySelectorAll('.page-footer__item');
    const lists = document.querySelectorAll('.page-footer__sublist');
    const icons = document.querySelectorAll('.page-footer__item-icon');

    function getWindowWidth() {
      return window.innerWidth || document.body.clientWidth;
    }

    if (getWindowWidth() < 1200) {
      for (let i = 0; i < itemTitle.length; i++) {
        itemTitle[i].addEventListener('click', () => {
          items[i].classList.toggle('page-footer__item--active');
          lists[i].classList.toggle('page-footer__sublist--active');
          icons[i].classList.toggle('page-footer__item-icon--active');
        })
      }
    }
  }
  footerAccordion();
});