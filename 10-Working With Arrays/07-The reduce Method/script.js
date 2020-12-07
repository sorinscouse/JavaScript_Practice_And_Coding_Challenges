'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//accumulator is like a snowball
// const balance = movements.reduce(function (acc, cur, i, arr) {
//     console.log(`Iteration ${i}: ${acc}`);
//     return acc + cur;
// }, 0); //start counting from 0
// console.log(balance);

//Also, with an 'arrow function':
const balance = movements.reduce((acc, cur) => acc + cur, 0); //start counting from 0
console.log(balance);

//Now let's do it with a 'for of' loop
let balance2 = 0; //We always need an external variable when we use a 'for of' loop
for (const mov of movements) balance2 += mov;
console.log(balance2);

// Maximum value
const max = movements.reduce((acc, mov) => {
    if (acc > mov) return acc;
    else return mov;
}, movements[0]);
console.log(max);



