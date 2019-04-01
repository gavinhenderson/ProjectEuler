#!/usr/bin/env node

const MAX = 20;
let notFound = true;
let answer = 0;

for (let i = 1; notFound; i++) {
  for (let j = 1; j <= MAX; j++) {
    if (i % j != 0) {
      break;
    }

    if (j == MAX) {
      notFound = false;
      answer = i;
    }
  }
}

console.log("The smallest positive number that is evenly divisible is", answer);
