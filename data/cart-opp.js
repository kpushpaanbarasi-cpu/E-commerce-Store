import { deliveryOptions } from './deliveryOptions.js';
function carts(getlocalkey){
const cart={
    cartItems :JSON.parse(localStorage.getItem(getlocalkey)) || [],
 savetostorage() {
  localStorage.setItem(getlocalkey, JSON.stringify(this.cartItems));
},
deletecart(productId) {
  const newcart = [];
  this.cartItems.forEach((cartitem) => {
    if (cartitem.productId !== productId) {
      newcart.push(cartitem);  
    }
  });
  this.cartItems = newcart;
  this.savetostorage();
},
Addtocart(productId, quantity) {
  let matchingitem;
  this.cartItems.forEach((cartitem) => {
    if (productId === cartitem.productId) {
      matchingitem = cartitem;
    }
  });
  if (matchingitem) {
    matchingitem.quantity += quantity;
  } else {
    cartItems.push({
      productId,
      quantity,
      deliveryOptionId:'1'
    });
  }
  this.savetostorage();
},
 updatequantity(newquantity, productId) {
  this.cartItems.forEach((cartitem) => {
    if (cartitem.productId === productId) {
      cartitem.quantity = newquantity;
    }
  });
  this.savetostorage();
  let cartquantity = 0;
  this.cartItems.forEach((cartitem) => {
    cartquantity += cartitem.quantity;
  });
  return cartquantity;
},
updateDeliveryOption(productId,deliveryOptionId){
  this.cartItems.forEach((cartitem)=>{
  if(cartitem.productId===productId){
    cartitem.deliveryOptionId=deliveryOptionId;
  }
});
this.savetostorage();
}
};
return carts;
}
const normalcart=carts('opps');
const businesscart=carts('cart-businesscart');
console.log(normalcart);
console.log(businesscart);



