'use strict';

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// (There is also the static version)

class Account {
    // 1) Public fields (instances)
    locale = navigator.language;

    // 2) Private fields (instances)
    #movements = [];
    #pin;

    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        // Protected property
        this.#pin = pin;
        // this._movements = [];
        // this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${owner}`);
    }

    // 3) Public methods

    // Public interface
    getMovements() {
        return this.#movements;
    }

    deposit(val) {
        this.#movements.push(val)
    }

    withdraw(val) {
        this.deposit(-val)
    }


    requestLoan(val) {
        // if (this.#approveLoan(val)) {
        if (this._approveLoan(val)) {
            this.deposit(val);
            console.log(`Loan approved`);
        }
    }

    static helper() {
        console.log(`Helper`);
    }

    // 4) Private methods
    // #approveLoan(val) {
    _approveLoan(val) {
        return true;
    }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);

// console.log(acc1.#movements);
// console.log(acc1.#pin);
// console.log(acc1.#approveLoan(100));
Account.helper();
