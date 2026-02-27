const menu=[
    {name:"Margherita", price:8},
    {name:"Pepperoni", price:10},
    {name:"Hawaiian", price:10},
    {name:"Veggie", price:7},
]

const nextOrderId=1;
const cashInRegister = 100;
const orderQueue = {};

function addNewPizza(pizzaObj) {
    menu.push(pizzaObj)
}

function placeOrder(pizzaName) {
    const selectedPizza = menu.find(item => item.name === pizzaName);
    cashInRegister += selectedPizza.price;
    const newOrder = { pizza: selectedPizza, status: "ordered", id: nextOrderId++ };
    orderQueue.push(newOrder);
    return newOrder;
}

function completeOrder(orderId) {
    const order = orderQueue.find(order => order.id === orderId);
    order.status = "completed";
    return completeOrder;
}

addNewPizza({name:"Golden Corn", price:5});
completeOrder("1");

placeOrder("Veggie");

console.log(menu,orderQueue,"id:",id);


