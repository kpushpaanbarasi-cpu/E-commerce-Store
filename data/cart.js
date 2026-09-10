import { deliveryOptions } from '../data/deliveryOptions.js';

export let cart = JSON.parse(localStorage.getItem('cart')) || [];
function savetostorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}
export function deletecart(productId) {
  const newcart = [];
  cart.forEach((cartitem) => {
    if (cartitem.productId !== productId) {
      newcart.push(cartitem);  
    }
  });
  cart = newcart;
  savetostorage();
}
export function Addtocart(productId, quantity) {
  let matchingitem;
  cart.forEach((cartitem) => {
    if (productId === cartitem.productId) {
      matchingitem = cartitem;
    }
  });
  if (matchingitem) {
    matchingitem.quantity += quantity;
  } else {
    cart.push({
      productId,
      quantity,
      deliveryOptionId:'1'
    });
  }
  savetostorage();
}
export function updatequantity(newquantity, productId) {
  cart.forEach((cartitem) => {
    if (cartitem.productId === productId) {
      cartitem.quantity = newquantity;
    }
  });
  savetostorage();
  let cartquantity = 0;
  cart.forEach((cartitem) => {
    cartquantity += cartitem.quantity;
  });
  return cartquantity;
}
export function updateDeliveryOption(productId,deliveryOptionId){
  cart.forEach((cartitem)=>{
  if(cartitem.productId===productId){
    cartitem.deliveryOptionId=deliveryOptionId;
  }
});
savetostorage();
}
  export function loadCart(fun){
      const xhr= new XMLHttpRequest();
      xhr.addEventListener('load',()=>{
       console.log(xhr.response);
     fun(); 
      });
      xhr.open('GET','https://supersimplebackend.dev/Cart');
      xhr.send();
   
    }
