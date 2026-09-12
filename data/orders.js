export const orders=localStorage.getItem('orders') ? JSON.parse(localStorage.getItem('orders')) : [];
export function addOrder(order){
    orders.unshift(order);
    save();
}

 export function save(){
    localStorage.setItem('orders',JSON.stringify(orders));
}
