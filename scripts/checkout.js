import { renderCheckout } from"./checkout/orderSummary.js";
import {getTotal}from"./checkout/paymentSummary.js";
import {saveUpdatestorage}from "./checkout/orderSummary.js";
//import  '../data/cart-class.js';
import '../data/backend.js';
renderCheckout();
getTotal();
saveUpdatestorage();