'use strict';

class Account {
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this._pin = pin;
        // Protected property
        this._movements = [];
        this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${owner}`);
    }

    // Public interface
    getMovements() {
        return this._movements;
    }

    deposit(val) {
        this._movements.push(val)
    }

    withdraw(val) {
        this.deposit(-val)
    }

    _approveLoan(val) {
        return true;
    }

    requestLoan(val) {
        if (this._approveLoan(val)) {
            this.deposit(val);
            console.log(`Loan approved`);
        }
    }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);

// '_' it's just a developers convention, meaning that this property is not supposed to be touched outside of a class.
acc1._movements.push(250);
acc1._movements.push(-140);

console.log(acc1.getMovements());
