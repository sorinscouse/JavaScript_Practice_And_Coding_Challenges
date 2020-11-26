'use strict';

// var firstName = 'Matilda';

const jonas = {
    firstName: 'Jonas',
    year: 1991,
    calcAge: function () {
        // console.log(this);
        console.log(2037 - this.year);

        //Solution 1
        // const self = this;
        // const isMillennial = function () {
        //     console.log(self);
        //     console.log(self.year >= 1981 && self.year <= 1996);
        // };

        //Solution 2
        const isMillennial = () => {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);
        };
        isMillennial();
    },

    greet: () => {
        console.log(this);
        console.log(`Hey ${this.firstName}`)
    },
};
jonas.greet();
jonas.calcAge();

//Arguments keyword
const addExpr = function (a, b) {
    console.log(arguments);
    return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
    console.log(arguments);
    return a + b;
};
addArrow(2, 5, 8);
