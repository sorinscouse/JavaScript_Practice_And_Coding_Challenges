'use strict';

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays.

// 2) Breaking up into sub-problems
// - How to merge 2 arrays?
const calcTempAmplitudeNew = function(t1, t2) {

  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);
