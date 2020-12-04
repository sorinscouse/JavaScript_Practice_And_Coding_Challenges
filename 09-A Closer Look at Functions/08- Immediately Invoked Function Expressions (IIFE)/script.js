'use strict';
//Normal function
const runOnce = function () {
    console.log('This will never run again');
};

runOnce();

//IIFE
(function () {
    console.log('This will never run again');
})();

//Arrow function
(() => console.log('This will also never run again'))();
