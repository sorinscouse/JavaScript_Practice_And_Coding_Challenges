'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroToUsd = 1.1;

const movementsUSD = movements.map(function (mov) {
    return mov * euroToUsd;
    // return 23;
});
console.log(movements);
console.log(movementsUSD);

//Let's write the same thing using the 'for of' loop
const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * euroToUsd);
console.log(movementsUSDfor);

//We can also use arrow function to simplify it in just one line of code:
// const movementsUSD = movements.map( mov => mov * euroToUsd);



// const movementsDescriptions = movements.map((mov, i, arr) =>{
//     if (mov > 0) {
//         return `Movement ${i + 1}: You deposited ${mov}`;
//     } else {
//         return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
//     }
// });
// console.log(movementsDescriptions);




// We can also do it like this:
const movementsDescriptions = movements.map((mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
);
console.log(movementsDescriptions);

