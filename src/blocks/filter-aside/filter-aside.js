/* global document */
const ready = require('../../js/utils/documentReady.js');

ready(function () {
  const item = document.querySelectorAll('.filter-aside__item');
  const subblock = document.querySelectorAll('.filter-aside__subblock');
  const aside = document.querySelector('.filter-aside');
  const filter = document.getElementById('filter');
  const close = document.querySelector('.filter-aside__close');

  filter.addEventListener('click', () => aside.style.transform = 'translateX(0)');
  close.addEventListener('click', () => aside.style.transform = 'translateX(-100%)');

  for (let i = 0; i < item.length; i++) {
    item[i].addEventListener('click', () => {
      item[i].classList.toggle('filter-aside__item--active');
      subblock[i].classList.toggle('filter-aside__subblock--active');
    })
  }
});