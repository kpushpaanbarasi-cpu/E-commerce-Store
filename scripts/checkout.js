import { renderCheckout } from"./checkout/orderSummary.js";
import {getTotal, renderPayment}from"./checkout/paymentSummary.js";
import {saveUpdatestorage}from "./checkout/orderSummary.js";
import{loadProducts}from'../data/products.js';
//import  '../data/cart-class.js';
//import '../data/backend.js';
loadProducts(()=>{
renderPayment();
renderCheckout();
saveUpdatestorage();
getTotal();
});
