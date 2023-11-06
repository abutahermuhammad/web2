"use strict";
{
    class BankAccount {
        constructor(id, name, balance) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }
        // Balance Setter
        set deposit(amount) {
            if (amount > 0)
                this._balance = amount;
        }
        // Balance Getter
        get balance() {
            return this._balance;
        }
    }
    class StudentAccount extends BankAccount {
        constructor(id, name, balance) {
            super(id, name, balance);
        }
        getInfo() {
        }
    }
    const johnDoe = new StudentAccount("1", "John Doe", 0);
    johnDoe.deposit = 100;
    console.log(johnDoe.balance);
}
