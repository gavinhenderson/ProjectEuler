#!/usr/bin/env node

const MAX = 100;
let sumOfSquares = 0;
let squareOfSumCount = 0;
let squareOfSum = 0;

for (let i = 0; i <= MAX; i++) {
  sumOfSquares += i * i;
}

for (let i = 0; i <= MAX; i++) {
  squareOfSumCount += i;
}

squareOfSum = Math.pow(squareOfSumCount, 2);

console.log(
  `The difference between the sum of the squares of the first one hundred natural numbers and the square of the sum is ${squareOfSum -
    sumOfSquares}`
);
