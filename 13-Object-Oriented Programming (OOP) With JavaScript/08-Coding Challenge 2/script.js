'use strict';

// 1.
class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    // 2.
    get speedUS() {
        return this.speed / 1.6;
    }

    // 3.
    set speedUS(speed) {
        this.speed = speed * 1.6; // km/h
    }
}

// 4.
const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.accelerate();
ford.brake();

ford.speed = 50;
console.log(ford);
