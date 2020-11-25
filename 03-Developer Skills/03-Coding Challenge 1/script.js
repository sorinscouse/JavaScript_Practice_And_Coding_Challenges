'use strict';

// 1) Understanding the problem
// - Array transformed to string, separated by ...
// - What is the X days? Answer: index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with ºC
// - String needs to contain day (index + 1)
// - Add ... between elements at start and at the end of the string
// - Log string to the console

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

// We can try to do it this way
console.log(`...${data1[0]}ºC...${data1[1]}ºC...${data1[2]}ºC`);

// But there's a better alternative
const printForecast = function(arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}ºC in ${i + 1} days ...`;
  }
  console.log('...' + str);
};

printForecast(data1);
printForecast(data2);
