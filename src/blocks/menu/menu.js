import '../../../node_modules/mmenu-light/dist/mmenu-light';
document.addEventListener(
  "DOMContentLoaded", () => {
    const node = document.querySelector("#my-menu");
    const menu = new MmenuLight(node, {
      title: 'Категории товаров'
    });
    menu.enable("(max-width: 1179px)");
    menu.offcanvas();

    document.querySelector("a[href='#my-menu']")
      .addEventListener("click", (evnt) => {
        menu.open();
        evnt.preventDefault();
        evnt.stopPropagation();
      });
  }
);

// Откртытия меню при наведении на элемент
// const desktopMenu = () => {
//   const items = document.querySelectorAll('.menu__item-dropdown');
// }