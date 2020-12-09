'use strict';

//Data
const account1 = {
    owner: 'Jonas Schemedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];

//Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
    containerMovements.innerHTML = '';

    movements.forEach(function (mov, i) {
        const type = mov > 0 ? 'deposit' : 'withdrawal';

        //HTML to be displayed on the page
        const html = `
        <div class="movements__row">
            <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
            <div class="movements__value">${mov}£</div>
        </div>
        `;

        containerMovements.insertAdjacentHTML('afterbegin', html);

    })
};


const calcDisplayBalance = function (acc) {
    const balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
    acc.balance = balance;
    labelBalance.textContent = `${balance}£`
};

const calcDisplaySummary = function (acc) {
    //Display all the incomes
    const incomes = acc.movements
        .filter(mov => mov > 0)
        .reduce((acc, mov) => acc + mov, 0);
    labelSumIn.textContent = `${incomes}£`; //Display incomes

    //Display all the outcomes
    const out = acc.movements
        .filter(mov => mov < 0)
        .reduce((acc, mov) => acc + mov, 0);
    labelSumOut.textContent = `${Math.abs(out)}£`; //Display outcomes

    //Calculate interest
    const interest = acc.movements
        .filter(mov => mov > 0) //[200, 450, 3000, 70, 1300]
        .map(deposit => deposit * acc.interestRate / 100) //[2.4, 5.4, 36, 0.84, 15.6]
        .filter((int, i, arr) => {
            // console.log(arr); //(5) [2.4, 5.4, 36, 0.84, 15.6]
            return int >= 1; //returns only the numbers >=1, so, in this case, 0.84 will not be returned
        })
        .reduce((acc, int) => acc + int, 0); //59.4 (2.4 + 5.4 + 36 + 15.6)
    labelSumInterest.textContent = `${interest}£`; //Display interest

};




// const user = 'Steven Thomas Williams'; // stw
// const username = user.toLowerCase().split(' ').map(function (name) {
//     return name[0];
// }).join('');
// console.log(username);

//The same, but with arrow function:
const createUsernames = function (accs) {
    accs.forEach(function (acc) {
        acc.username = acc.owner.toLowerCase().split(' ').map(name => name[0]).join('');
    });
};
createUsernames(accounts);

const updateUI = function(acc) {
    //Display movements
    displayMovements(acc.movements);

    //Display balance
    calcDisplayBalance(acc);

    //Display summary
    calcDisplaySummary(acc);
};



// Event handler
let currentAccount;

btnLogin.addEventListener('click', function (e) {
    //Prevent form from submitting
    e.preventDefault();
    // console.log('LOGIN');

    currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
    console.log(currentAccount);

    if (currentAccount?.pin === Number(inputLoginPin.value)) {
        // console.log('LOGIN');

        // Display UI and message
        labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`; //only the first letters from owner account: for Jonas Schmedtmann --> 'js', so when we login in, we put 'js' in the username field, and 1111 in the pin field. The same applies for the other users.
        containerApp.style.opacity = 100;

        //Clear input fields, after the user is logged in
        inputLoginUsername.value = inputLoginPin.value = '';
        //And for the field to lose its focus
        inputLoginPin.blur();

        //Update UI
        updateUI(currentAccount);
    }
});

btnTransfer.addEventListener('click', function (e) {
    e.preventDefault();
    const amount = Number(inputTransferAmount.value);
    const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
    inputTransferAmount.value = inputTransferTo.value = '';

    if (amount > 0 && receiverAcc && currentAccount.balance >= amount && receiverAcc?.username !== currentAccount.username) {
        //Doing the transfer
        currentAccount.movements.push(-amount);
        receiverAcc.movements.push(amount);

        //Update UI
        updateUI(currentAccount);
    }
});

btnClose.addEventListener('click', function (e) {
    e.preventDefault();

    if (inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin) {
        const index = accounts.findIndex(acc => acc.username === currentAccount.username);
        console.log(index);

        //Delete account
        accounts.splice(index, 1);

        //Hide UI
        containerApp.style.opacity = 0;
    }

    inputCloseUsername.value = inputClosePin.value = '';
});




