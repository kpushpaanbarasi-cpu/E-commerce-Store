import {cart,updatequantity}from'../../data/cart.js';
import{getproductId}from'../../data/products.js';
import{getDeliveryOption}from'../../data/deliveryOptions.js';
import{currency}from'../utils/money.js';
 export function renderPayment(){
  let paymentHTML='';  
  const {
  productTotal,
  shippingPriceCents,
  total,
  tax,
  totalCents,
} = getTotal();
  paymentHTML+=`<div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items (${updatequantity()})</div>
            <div class="payment-summary-money">$${currency(productTotal)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$${currency(shippingPriceCents)}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${currency(total)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${currency(tax)}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${currency(totalCents)}</div>
          </div>

          <button class="place-order-button button-primary">
            Place your order
          </button>
        </div>`
        document.querySelector('.js-payment-summary').innerHTML=paymentHTML;
      }
       export function getTotal(){
      let productTotal=0;
      let shippingPriceCents=0;
      cart.forEach((cartitem)=>{
        const matchingproduct=getproductId(cartitem.productId);
        productTotal+=matchingproduct.priceCents*cartitem.quantity;
        const deliveroption=getDeliveryOption(cartitem.deliveryOptionId);
        shippingPriceCents+=deliveroption.priceCents;
      });
      const total = productTotal + shippingPriceCents;
      const tax=total*0.1;
      const totalCents=total+tax;
      return {
        total,
        productTotal,
        shippingPriceCents,
        tax,
        totalCents
      };
    }