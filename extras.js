"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person1 = {
    name: "Aniket",
    age: 14,
    isStudent: false,
    address: {
        street: "sarvoday nagar",
        city: "Mumbai",
        country: "Russia"
    }
};
const person2 = {
    name: "Tekina",
    age: 41,
    isStudent: true,
    address: {
        street: "sarvoday nagar",
        city: "Mumbai",
        // country: "Russia"
    }
};
function displayInfo(person) {
    console.log(`${person.name} lives at ${person.address?.country}.`);
}
displayInfo(person2);
//# sourceMappingURL=extras.js.map