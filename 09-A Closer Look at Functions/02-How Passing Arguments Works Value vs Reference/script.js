'use strict';

const flight = 'LH234';
const jonas = {
    name: 'Jonas Schmedtmann',
    passport: 4324783274783
};

const checkIn = function (flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;

    if (passenger.passport === 4324783274783) {
        alert('Check in')
    } else {
        alert('Wrong passport')
    }
};

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// Is the same as doing...
// const flightNum = flight;
// const passenger = jonas;

const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(jonas);
checkIn(flight, jonas);
