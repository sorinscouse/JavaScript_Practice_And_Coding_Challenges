'use strict';

// TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
// TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

//Code from the previous challenge
// const calcAverageHumanAge = function (ages) {
//     const humanAges = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4);
//     const adults = humanAges.filter(age => age >= 18);
//
//     const average = adults.reduce((acc, age, i, arr) => acc + age / arr.length, 0);
//     return average;
// };

//Code from the current challenge
const calcAverageHumanAge = ages => ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4)) //[36, 4, 32, 2, 76, 48, 28]
    .filter(age => age >= 18) //[36, 32, 76, 48, 28]
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);//7.2

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2); //44, 47.333333333333336

/*

acc: 0
age: 36
arr: (5) [36, 32, 76, 48, 28]
i: 0

Return value: 7.2 (acc + age / arr.length, 0 --> 0 + 36 / 5)

acc: 7.2
age: 32
arr: (5) [36, 32, 76, 48, 28]
i: 1

Return value: 13.600000000000001 (acc + age / arr.length, 0 --> 7.2 + 32 / 5)

acc: 13.600000000000001
age: 76
arr: (5) [36, 32, 76, 48, 28]
i: 2

Return value: 28.8 (acc + age / arr.length, 0 --> 13.600000000000001 + 76 / 5)

acc: 28.8
age: 48
arr: (5) [36, 32, 76, 48, 28]
i: 3

Return value: 38.4 (acc + age / arr.length, 0 --> 28.8 + 48 / 5)

acc: 38.4
age: 28
arr: (5) [36, 32, 76, 48, 28]
i: 4

Return value: 44 (acc + age / arr.length, 0 --> 28.8 + 48 / 5)
.
.
.
.
.
.
The same for TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

*/



