import {cart,deletecart,updatequantity,updateDeliveryOption}from'../../data/cart.js';
import{products,getproductId}from'../../data/products.js';
import{deliveryOptions,getDeliveryOption}from'../../data/deliveryOptions.js';
import{currency}from'../utils/money.js';
import dayjs from'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
import {renderPayment} from './paymentSummary.js';
            function saveUpdatestorage(){
    document.querySelectorAll('.js-click-update').forEach((link)=>{
    link.addEventListener('click',()=>{
      const {productId}=link.dataset;
      const updateBox=document.querySelector(`.js-update-${productId}`);
      
      if(link.innerHTML.toLowerCase()==='update'){
      updateBox.classList.add('update-quantity-visible');
      link.innerHTML='save';
      }else{
        const newquantity=Number(updateBox.value);
        document.querySelector(`.js-quantity-${productId}`).innerHTML=newquantity;
        updateBox.classList.remove('update-quantity-visible');
        link.innerHTML='Update';
        updatequantity(newquantity,productId);
        document.querySelector('.js-checkout-title').innerHTML=`${updatequantity()} items`;
          renderPayment();
      }
      });
    });
  }
export function renderCheckout(){
 let cartHTML='';
cart.forEach((cartitem)=>{
  const deliveryOptionId=cartitem.deliveryOptionId;
  const deliveryOption=getDeliveryOption(deliveryOptionId);
  const today=dayjs();
  const deliverydate=today.add(deliveryOption.duedate,'day');
  const dateString= deliverydate.format('dddd,MMMM,D');
    const matchingproduct=getproductId(cartitem.productId);
   cartHTML+=`<div class="cart-item-container js-cart-item-container-${matchingproduct.id}">
            <div class="delivery-date">
              Delivery date: ${dateString}
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${matchingproduct.image}">
              <div class="cart-item-details">
                <div class="product-name">
                  ${matchingproduct.name}
                </div>
                <div class="product-price">
                   $${currency(matchingproduct.priceCents)}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label js-quantity-${matchingproduct.id}">${cartitem.quantity}</span>
                  </span>
                  <span class="update-quantity-link link-primary js-click-update js-save"
                  data-product-id="${matchingproduct.id}">
                    Update
                  </span>
                  <input type="number"class="update-quantity-input js-update-${matchingproduct.id}"
                   data-product-id="${matchingproduct.id}"
                         min="1"
                        value="${cartitem.quantity}">
                  <span class="delete-quantity-link link-primary js-click-delete"
                  data-product-id="${matchingproduct.id}">
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                    ${deliveryOptionsHTML(matchingproduct,cartitem)}
              </div>
            </div>
           </div>`
       }); 
  
      
       function deliveryOptionsHTML(matchingproduct,cartitem){
        let Html='';
         deliveryOptions.forEach((deliveryOption)=>{
          const today=dayjs();
          const deliverydate=today.add(deliveryOption.duedate,'day');
          const dateString= deliverydate.format('dddd,MMMM,D');
          const priceString=deliveryOption.priceCents===0?"FREE":`$${currency(deliveryOption.priceCents)}`;
          const  ischecked=deliveryOption.id===cartitem.deliveryOptionId;
           Html+=`<div class="delivery-option">
                  <input type="radio" ${ischecked?'checked' : ''}
                  class="delivery-option-input js-delivery-option"
                  data-product-id="${matchingproduct.id}"
                  data-delivery-option-id="${deliveryOption.id}"
                    name="delivery-option-${matchingproduct.id}">
                  <div>
                    <div class="delivery-option-date">
                      ${dateString}
                    </div>
                    <div class="delivery-option-price">
                      ${priceString} Shipping
                    </div>
                  </div>
                </div>`
         });
         return Html;
        }
  document.querySelector('.js-summary').innerHTML=cartHTML;
  document.querySelectorAll('.js-click-delete').forEach((button)=>{
    button.addEventListener('click',()=>{
      const {productId}=button.dataset;
      deletecart(productId);
     const container= document.querySelector( `.js-cart-item-container-${productId}`);
           document.querySelector('.js-checkout-title').innerHTML=`${updatequantity()} items`;
     container.remove();
     renderPayment();
    });
  });
  document.querySelector('.js-checkout-title').innerHTML=`${updatequantity()} items`;
        document.querySelectorAll('.js-delivery-option').forEach((radio)=>{
          radio.addEventListener('click',()=>{
            const{productId,deliveryOptionId}=radio.dataset;
             updateDeliveryOption(productId, deliveryOptionId);
               renderCheckout();
          });
        });
      }
      renderPayment();
      renderCheckout();
      saveUpdatestorage();
      
      
    
        

