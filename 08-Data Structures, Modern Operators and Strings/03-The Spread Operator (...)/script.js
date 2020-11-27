'use strict';

//Old way of solving
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

//New way, with the spread operator
const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

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

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function ({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },

    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
    }
};

const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
console.log(newMenu);
/*The spread operator is a bit similar with destructuring, because it also helps us to get elements out of arrays. The big difference is
that the spread operator takes all the elements from the array and it also doesn't create new variables. As a consequence,
we can only use it in the places where we would otherwise write values separated by commas (,)*/

//Copy array
const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 arrays or more
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//The spread operator works on all iterables (arrays, strings, maps, sets. NOT objects)
const str = 'Jonas';
const letters = [...str, '', 'S.'];
console.log(letters); //We can still only use the spread operator when building an array or when we pass values into a function
console.log(...str);

//Real world example
const ingredients = [
    // prompt('Let\'s make pasta! Ingredient 1?'),
    // prompt('Ingredient 2?'),
    // prompt('Ingredient 3?')
    ];

//We can do this:
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
//But we learned about the spread operator and this is a better solution:
restaurant.orderPasta(...ingredients);
console.log(ingredients);

//Objects
const newRestaurant = {founding: 1998, ...restaurant, founder: 'Giuseppe'};
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);


