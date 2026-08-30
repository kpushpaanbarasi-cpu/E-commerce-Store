import { deliveryOptions } from './deliveryOptions.js';
class Cart{
        cartItems=JSON.parse(localStorage.getItem(this.getlocalkey)) || [];
        getlocalkey=undefined;
        savetostorage() {
  localStorage.setItem(this.getlocalkey, JSON.stringify(this.cartItems));
}
constructor(getlocalkey){
  this.getlocalkey=getlocalkey;
}
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
}
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
}
updateDeliveryOption(productId,deliveryOptionId){
  this.cartItems.forEach((cartitem)=>{
  if(cartitem.productId===productId){
    cartitem.deliveryOptionId=deliveryOptionId;
  }
});
this.savetostorage();
}
}
const normalcart= new Cart('cart-oop');
const businesscart= new Cart('business-cart');

console.log(normalcart);
console.log(businesscart);



