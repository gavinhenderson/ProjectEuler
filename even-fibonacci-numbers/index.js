#!/usr/bin/env node

const MAX = 4000000;

let counter = 0;
let previousFib = 1;
let currentFib = 2;

while (currentFib < MAX) {
  if (!(currentFib % 2)) {
    counter += currentFib;
  }

  let tempPrev = previousFib;
  previousFib = currentFib;
  currentFib += tempPrev;
}

console.log(`The sum of the even-valued terms is ${counter}`);
