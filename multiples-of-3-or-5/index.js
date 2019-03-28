#!/usr/bin/env node

const UPPER_LIMIT = 1000;
const MULTIPLES_OF = [3, 5];

const isMultipleOf = (x, y) => {
  return !Boolean(x % y);
};

const multiples = [];

for (let i = 1; i < UPPER_LIMIT; i++) {
  for (let j = 0; j < MULTIPLES_OF.length; j++) {
    if (isMultipleOf(i, MULTIPLES_OF[j])) {
      multiples.push(i);
      break;
    }
  }
}

const total = multiples.reduce((prev, current) => prev + current);

console.log(`The sum of all the multiples of 3 or 5 below 1000 is ${total}`);
