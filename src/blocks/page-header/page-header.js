const ready = require('../../js/utils/documentReady.js');

ready(function () {
  const headerPopup = () => {
    const open = document.querySelector('.page-header__top-line-phones-arrow');
    const close = document.querySelector('.page-header__top-line-dropdown-icon-close');
    const dropdown = document.querySelector('.page-header__top-line-dropdown');

    open.addEventListener('click', () => {
      dropdown.style.display = 'block';
    });
    close.addEventListener('click', () => {
      dropdown.style.display = 'none';
    })
  }
  headerPopup();
});
