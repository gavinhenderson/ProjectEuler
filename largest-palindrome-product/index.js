#!/usr/bin/env node

const isPalindrome = (x) => {
  const reversed = x
    .toString()
    .split("")
    .reverse()
    .join("");
  return x.toString() === reversed;
};

const MAX = 999;
const MIN = 100;

function getPalindromes(MAX, MIN) {
  let palindromes = [];

  for (let i = MAX; i >= MIN; i--) {
    for (let j = MAX; j >= MIN; j--) {
      if (isPalindrome(j * i)) {
        palindromes.push(i * j);
      }
    }
  }

  return palindromes;
}

const largest = Math.max(...getPalindromes(MAX, MIN));
console.log("The largest palindrome is", largest);
