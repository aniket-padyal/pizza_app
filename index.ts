type Pizza = { name: string; price: number };
type Order = { id: number; pizza: Pizza; status: string };

const menu = [
  { name: "Margherita", price: 8 },
  { name: "Pepperoni", price: 10 },
  { name: "Hawaiian", price: 10 },
  { name: "Veggie", price: 7 },
];

let nextOrderId: number = 1;
let cashInRegister: number = 100;
const orderHistory: Order[] = [];

function addNewPizza(pizzaObj: Pizza) {
  menu.push(pizzaObj);
}

function placeOrder(pizzaName: string) {
  const selectedPizza = menu.find((item) => item.name === pizzaName);

  if (!selectedPizza) {
    console.error(`Sorry, ${pizzaName} pizza is not available.`);
    return;
  }

  cashInRegister += selectedPizza.price;
  let newOrder = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" };
  orderHistory.push(newOrder);
  return newOrder;
}

function completeOrder(orderId: number) {
  const order = orderHistory.find((order) => order.id === orderId);
  if (!order) {
    console.error(`${orderId} was not found in the order history.`);
    return;
  }
  order.status = "completed";
  return completeOrder;
}

addNewPizza({ name: "Golden Corn", price: 12 });
addNewPizza({ name: "Onion", price: 31 });
addNewPizza({ name: "Paneer", price: 22 });

placeOrder("Veggie");
placeOrder("Onion");
placeOrder("Paneer");

completeOrder(1);
completeOrder(3);
