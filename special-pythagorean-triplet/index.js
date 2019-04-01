#!/usr/bin/env node

let sum = 1000;

let a, b, c;
let sqrt = Math.sqrt(sum);
for (let n = 1; n <= sqrt; n++) {
  for (let m = n + 1; m <= sqrt; m++) {
    a = m * m - n * n;
    b = 2 * m * n;
    c = m * m + n * n;
    if (a + b + c == 1000) {
      console.log(a, b, c);
      console.log(a * b * c);
      return;
    }
  }
}
