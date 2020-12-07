'use strict';

const calcAverageHumanAge = function (ages) {
    const humanAges = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4);
    console.log(humanAges); //(7) [36, 4, 32, 2, 76, 48, 28]
    const adults = humanAges.filter(age => age >= 18);
    console.log(adults); //(5) [36, 32, 76, 48, 28]

    // const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
    // return average;

    //We can do it differently:
    const average = adults.reduce((acc, age, i, arr) => acc + age / arr.length, 0);
    return average;

};

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);




