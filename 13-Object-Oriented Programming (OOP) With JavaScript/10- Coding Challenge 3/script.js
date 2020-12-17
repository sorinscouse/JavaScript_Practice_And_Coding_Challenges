'use strict';

const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
};

Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
};

// 1.
const EV = function (make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;
};

// Link the prototypes
EV.prototype = Object.create(Car.prototype);

const tesla = new EV('Tesla', 120, 23);

// 2.
EV.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo;
};
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();

// 3.
EV.prototype.accelerate = function () {
    this.speed += 20;
    this.charge--;

    // 4.
    console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`);
};
tesla.accelerate();
