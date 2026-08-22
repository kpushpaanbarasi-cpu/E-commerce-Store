import { renderCheckout } from"./checkout/orderSummary.js";
import {getTotal}from"./checkout/paymentSummary.js";
import {saveUpdatestorage}from "./checkout/orderSummary.js";
renderCheckout();
getTotal();
saveUpdatestorage();