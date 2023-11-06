// Normal Function
function add1(num1: number, num2: number): number {
    return num1 + num2
}

// Arrow Function
const add2 = (a: number, b: number): number => a + b;

console.log(add1(3, 5))


// Example:
const poorUser = {
    name: "Abu Taher Muhammad",
    balance: 0,
    addBalance(balance: number): number {
        return this.balance + balance
    }
}

poorUser.addBalance(1)
console.log(poorUser.balance)