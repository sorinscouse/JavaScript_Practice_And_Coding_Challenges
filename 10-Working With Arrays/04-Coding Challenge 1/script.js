'use strict';

function checkDogs(dogsJulia, dogsKate) {
    const dogsJuliaCorrected = dogsJulia.slice();
    dogsJuliaCorrected.splice(0, 1); //(4) [5, 2, 12, 7]
    dogsJuliaCorrected.splice(-2); //(2) [5, 2]
    //The exact same result will be given if we use this:
    // dogsJulia.slice(1,3); //(2) [5, 2]

    const dogs = dogsJuliaCorrected.concat(dogsKate); //(7) [5, 2, 4, 1, 15, 8, 3]
    dogs.forEach(function (dog, i) { //'dog' = current element from the array, 'i' = array's index
        if (dog >= 3) {
            console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
        } else {
            console.log(`Dog number ${i + 1} is still a puppy`)
        }
    })


}
//Test data 1
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

//Test data 2
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
