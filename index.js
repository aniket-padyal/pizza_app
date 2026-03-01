"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 7 },
];
let nextOrderId = 1;
let cashInRegister = 100;
const orderQueue = [];
function addNewPizza(pizzaObj) {
    menu.push(pizzaObj);
}
function placeOrder(pizzaName) {
    const selectedPizza = menu.find(item => item.name === pizzaName);
    if (!selectedPizza) {
        console.error(`Sorry, ${selectedPizza} pizza is not available.`);
        return;
    }
    cashInRegister += selectedPizza.price;
    let newOrder = { pizza: selectedPizza, status: "ordered", id: nextOrderId++ };
    orderQueue.push(newOrder);
    return newOrder;
}
function completeOrder(orderId) {
    const order = orderQueue.find(order => order.id === orderId);
    order.status = "completed";
    return completeOrder;
}
addNewPizza({ name: "Golden Corn", price: 12 });
addNewPizza({ name: "Onion", price: 1 });
addNewPizza({ name: "Paneer", price: 2 });
console.log(menu);
placeOrder("Veggie");
placeOrder("Onion");
placeOrder("Paneer");
placeOrder("Golden Corn");
console.log(orderQueue);
completeOrder(1);
completeOrder(4);
completeOrder(2);
console.log(orderQueue);
//# sourceMappingURL=index.js.map