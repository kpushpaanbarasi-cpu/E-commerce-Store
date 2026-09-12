import { renderCheckout } from"./checkout/orderSummary.js";
import {getTotal, renderPayment}from"./checkout/paymentSummary.js";
import {saveUpdatestorage}from "./checkout/orderSummary.js";
import{loadProducts,loadProductsFetch}from'../data/products.js';
import{loadCart}from'../data/cart.js';
//import  '../data/cart-class.js';
//import '../data/backend.js';
async function loadPage(){
  try{
await loadProductsFetch();
await new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  });
}catch(error){
  console.log("error.Sorry");
}
    renderPayment();
  renderCheckout();
  saveUpdatestorage();
  getTotal();
}
loadPage();
  /*
Promise.all([
loadProductsFetch(), new Promise((resolve) => {
    loadCart(() => {
      resolve('value2');
    });
  })
]).then((values) => {
  console.log(values);
  renderPayment();
  renderCheckout();
  saveUpdatestorage();
  getTotal();
});
*
 
/*
loadProducts(()=>{
    loadCart(()=>{
renderPayment();
renderCheckout();
saveUpdatestorage();
getTotal();
    });
});
*/
