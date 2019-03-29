#!/usr/bin/env node

const TARGET = 600851475143;
let factors = [];

let num = TARGET;
while (num % 2 === 0) {
  factors.push(2);
  num = num / 2;
}

const sqrtNum = Math.sqrt(num);
for (let i = 3; i <= sqrtNum; i++) {
  while (num % i === 0) {
    factors.push(i);
    num = num / i;
  }
}

if (num > 2) {
  factors.push(num);
}

console.log(
  `The largest prime factor of ${TARGET} is ${factors[factors.length - 1]}`
);
