#!/usr/bin/env node

// https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes

let a = [];
let n = 999999;
let goal = 10001;

for (let i = 0; i < n; i++) a.push(true);

for (let i = 2; i < Math.sqrt(n); i++) {
  if (a[i])
    for (let j = i * i; j < n; j += i) {
      a[j] = false;
    }
}

let primes = [];

for (let i = 0; i < n; i++) {
  if (a[i]) primes.push(i);
}

console.log(`The ${goal} prime is ${primes[goal + 1]}`);
