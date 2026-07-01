export let cart=JSON.parse(localStorage.getItem('cart')) || [];
 function savetostorage(){
    localStorage.setItem('cart',JSON.stringify(cart));
  }
export function deletecart(productId){
const newcart=[];
cart.forEach((cartitem)=>{
if(cartitem.productId!==productId){
  newcart.push(cartitem);
}
});
cart=newcart;
savetostorage();
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
savetostorage();
} 
 export function updatequantity(){
 let cartquantity=0;
cart.forEach((cartitem)=>{
  cartquantity+=cartitem.quantity;
  document.querySelector('.js-add-button').innerHTML=cartquantity;
}) 
savetostorage();
}
