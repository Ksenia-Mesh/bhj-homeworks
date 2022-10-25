let addButtons = document.getElementsByClassName('product__add');
let dcrButtons = document.getElementsByClassName('product__quantity-control_dec');
let incButtons = document.getElementsByClassName('product__quantity-control_inc');

function removeProduct() {
  const div = document.querySelector('.cart__product')
  div.remove();
  target.childElement.remove();
}

function addItem() {
  let newItem = this.closest('div.product');
  let value = Number(newItem.getElementsByClassName('product__quantity-value')[0].textContent);
  let image = newItem.getElementsByClassName('product__image')[0].src;
  let dataID = newItem.getAttribute('data-id');
  let cart = document.getElementsByClassName('cart__products')[0];

  function addNewItem() {
    const newItemDiv =
      `<div class="cart__product" data-id=${dataID}>
        <img class="cart__product-image" src=${image}>
        <div class="cart__product-count">${value}</div>
        <div class="product__delete">Удалить</div>
        </div>
      `;
  cart.insertAdjacentHTML('afterBegin', newItemDiv);
  cart.getElementsByClassName('product__delete')[0].onclick = removeProduct
  }
  
  let cartProduct = cart.getElementsByClassName('cart__product');
  let cartProdId = [];
  for (let i = 0; i < cartProduct.length; i++) {
    cartProdId[i] = cartProduct[i].getAttribute('data-id');
  }
  if (cartProdId.indexOf(dataID) !== -1) {
    for (let i = 0; i < cartProdId.length; i++) {
      if (cartProdId[i] === dataID) {
        cartProduct[i].querySelector('.cart__product-count').textContent = Number(cartProduct[i].querySelector('.cart__product-count').textContent) + value;
      }
    }  
  } 
  else {
    addNewItem();
  } 
}

for (let addButton of addButtons) {
  addButton.addEventListener('click', addItem);
}

function dcrQuantity() {
  let counter = this.nextElementSibling;
  if (Number(counter.textContent) > 1) {
    counter.textContent = Number(counter.textContent) - 1;    
  }
}

function incQuantity() {
    let counter = this.previousElementSibling;
     counter.textContent = Number(counter.textContent) + 1; 
}

for (let decreaseBtn of dcrButtons) {
  decreaseBtn.addEventListener('click', dcrQuantity);
}

for (let increaseBtn of incButtons) {
  increaseBtn.addEventListener('click', incQuantity);
}






