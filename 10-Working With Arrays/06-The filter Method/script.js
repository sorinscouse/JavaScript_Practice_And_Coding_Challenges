'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter(function (mov, i, arr) {
    return mov > 0;
});
console.log(movements);
console.log(deposits);

//Now with the 'for of' loop:
const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

//Array with withdrawals, but with the 'arrow function'
const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);
