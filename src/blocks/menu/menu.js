import '../../../node_modules/mmenu-light/dist/mmenu-light';
document.addEventListener(
  "DOMContentLoaded", () => {
    const node = document.querySelector("#my-menu");
    const menu = new MmenuLight(node, {
      title: 'Категории товаров'
    });
    menu.enable("(max-width: 600px)");
    menu.offcanvas();

    document.querySelector("a[href='#my-menu']")
      .addEventListener("click", (evnt) => {
        menu.open();
        evnt.preventDefault();
        evnt.stopPropagation();
      });
  }
);