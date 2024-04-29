const [[N, S], arr] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(v => v.split(' ').map(Number));

let sum = 0;
let minLength = Infinity;
let i = 0;
let j = 0;

while (j < N) {
  sum += arr[j];

  while (sum >= S) {
    sum -= arr[i];
    minLength = Math.min(minLength, j - i + 1);
    i++;
  }

  j++;
}

console.log(minLength === Infinity ? 0 : minLength);