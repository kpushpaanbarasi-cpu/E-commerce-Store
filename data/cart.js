export let cart=JSON.parse(localStorage.getItem('cart')) || [];
export function deletecart(productId){
const newcart=[];
cart.forEach((cartitem)=>{
if(cartitem.productId!==productId){
  newcart.push(cartitem);
}
});
cart=newcart;
}
export function Addtocart(productId,quantity){
    let matchingitem;
    cart.forEach((cartitem)=>{
      if(productId === cartitem.productId){
          matchingitem=cartitem;
      }
    });
    if(matchingitem){
      matchingitem.quantity+=quantity;
    }else{
  cart.push({
          productId,
          quantity
  });  
}
 } 
 export function updatequantity(){
 let cartquantity=0;
cart.forEach((cartitem)=>{
  cartquantity+=cartitem.quantity;
  document.querySelector('.js-add-button').innerHTML=cartquantity;
  localStorage.setItem('cart',JSON.stringify(cart));
}) 
}
