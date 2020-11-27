'use strict';

console.log('--- OR ---');
// Use ANY data type, return ANY data type, short-circuiting
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined, null);
console.log(undefined || 0 || '' || 'Hello' || 23 || null);

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },
};

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('--- AND ---');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'Jonas');

//Practical example
if (restaurant.orderPizza) {
    restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza
('mushrooms', 'spinach');
/*The OR operator will return the first truthy value of all the operands or simply the last value if all of them are falsy
* The AND operator will return first falsy value or the last value if all of them are truthy
* For practical applications we can use the OR operator to set default values and AND operator to execute code in the second operand
* if the first one is true*/
