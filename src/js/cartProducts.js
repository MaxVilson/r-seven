class CartProducts {
  constructor(items, btns) {
    this.items = document.querySelectorAll(items);
    this.btns = document.querySelectorAll(btns);
  }

  getProducts() {
    let products = [];
    let productsLocalStorage = localStorage.getItem('products');
    if (productsLocalStorage !== null) {
      products = JSON.parse(productsLocalStorage);
    }
    return products;
  }

  putProduct(id) {
    let products = this.getProducts();
    let index = products.indexOf(id);
    if (index === -1) {
      products.push(id);
      let pushProduct = true;
    } else {
      products.splice(index, 1);
      let pushProduct = false;
    }
    localStorage.setItem('products', JSON.stringify(products));
    return {
      pushProduct: pushProduct,
      products: products
    };
  }

  getItem() {
    for (let i = 0; i < this.btns.length; i++) {
      this.btns[i].addEventListener('click', function () {
        let id = this.getAttribute('data-id');
        let result = this.putProduct(id);
        console.log(result);
      })
    }
  }
}

const cartProducts = new CartProducts('.card-hit', '.card-hit__btn');
cartProducts.getItem();