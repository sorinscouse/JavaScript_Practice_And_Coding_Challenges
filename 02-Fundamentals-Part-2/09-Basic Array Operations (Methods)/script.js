'use strict';

const friends = ['Michael', 'Steven', 'Peter'];

//Add elements
const newLenght = friends.push('Jay');
console.log(friends);
console.log(newLenght);

friends.unshift('John');
console.log(friends);

//Remove elements
friends.pop(); //Last
console.log(friends);
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); //First
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Michael'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven');
}

if (friends.includes('Sally')) {
    console.log('You have a friend called Sally'); //Nothing is printed to the console
}
