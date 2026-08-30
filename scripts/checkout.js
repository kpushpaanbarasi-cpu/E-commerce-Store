import { renderCheckout } from"./checkout/orderSummary.js";
import {getTotal}from"./checkout/paymentSummary.js";
import {saveUpdatestorage}from "./checkout/orderSummary.js";
import  '../data/cart-class.js';
renderCheckout();
getTotal();
saveUpdatestorage();