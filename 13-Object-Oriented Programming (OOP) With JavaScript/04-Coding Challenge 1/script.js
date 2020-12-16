'use strict';
// 1.
const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
};

const bmw = new Car('BMW', 120);
console.log(bmw);
const mercedes = new Car('Mercedes', 95);
console.log(mercedes);

// 2.
Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
};

// 3.
Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
};

// 4.
bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();

mercedes.accelerate();
mercedes.accelerate();
mercedes.accelerate();
mercedes.brake();
mercedes.accelerate();

