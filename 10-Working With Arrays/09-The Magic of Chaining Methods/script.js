'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;
const totalDepositsUSD = movements
    .filter(mov => mov > 0) //(5) [200, 450, 3000, 70, 1300]
    .map(mov => mov * eurToUsd) //(5) [220, 495, 3300, 77, 1430]
    .reduce((acc, mov) => acc + mov, 0); //5522 (sum of 220, 495, 3300, 77, 1430)
console.log(totalDepositsUSD);

