'use strict';

// Strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
// Now the array is mutated
console.log(owners);

// Numbers
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements.sort()); // they are alphabetically ordered as if they are strings

// if return < 0 --> a, b (keep order)
// if return > 0 --> b, a (switch order)
movements.sort((a, b) => {
    // // ascending order
    // if (a > b)
    //     return 1; // switch order
    // if (b > a)
    //     return -1; // keep order

    // descending order
    if (a < b)
        return -1;
    if (b < a)
        return 1;
});
console.log(movements);



// We can also do it like this:
// ascending
movements.sort((a, b) => a - b);
console.log(movements);

// descending
movements.sort((a, b) => b - a);
console.log(movements);



