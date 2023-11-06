"use strict";
{
    class BankAccount {
        constructor(id, name, balance) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }
        addDeposit(amount) {
            if (amount > 0)
                this._balance = amount;
        }
        getBalance() {
            return this._balance;
        }
    }
    const johnDoe = new BankAccount("1", "John Doe", 0);
    johnDoe.addDeposit(10);
    console.log(johnDoe.getBalance());
}
