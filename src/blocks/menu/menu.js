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

// function getWindowWidth() {
//   return window.innerWidth || document.body.clientWidth;
// }

// Откртытия меню при наведении на элемент
// if (getWindowWidth() >= 1200) {
//   const desktopMenu = () => {
//     const items = document.querySelectorAll('.menu__item-dropdown');
//     for (let i = 0; i < items.length; i++) {
//       items[i].addEventListener('mouseenter', function () {
//         if (this.children.length > 1) {
//           this.children[1].classList.add('menu__sublist--active');  
//           this.children[2].classList.add('menu__sublist--active');
//         }
//       })
//       items[i].addEventListener('mouseleave', function () {
//         if (this.children.length > 1) {
//           this.children[1].classList.remove('menu__sublist--active'); 
//           this.children[2].classList.remove('menu__sublist--active');
//         }
//       })
//     }
//   }
//   desktopMenu();
// }