"use strict";
// Normal Function
function add1(num1, num2) {
    return num1 + num2;
}
// Arrow Function
const add2 = (a, b) => a + b;
console.log(add1(3, 5));
// Example:
const poorUser = {
    name: "Abu Taher Muhammad",
    balance: 0,
    addBalance(balance) {
        return this.balance + balance;
    }
};
poorUser.addBalance(1);
console.log(poorUser.balance);
