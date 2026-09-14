export const orders=localStorage.getItem('orders') ? JSON.parse(localStorage.getItem('orders')) : [];
 export function save(){
    localStorage.setItem('orders',JSON.stringify(orders));
}
export function addOrder(order){
    orders.unshift(order);
    save();
}
export function getorderId(orderId){
    let matchingOrder;
    orders.forEach(order=>{
    if(order.id===orderId){
        matchingOrder=order;
    }
});
    return matchingOrder;
}
