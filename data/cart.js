export let cart=[
  {
    productId:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity:1
  },
   {
    productId:"15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity:1
  }
];
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
}) 
}
