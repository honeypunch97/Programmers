const input: number[] = require('fs').readFileSync('/dev/stdin').toString()
   .split(' ')
   .map((item: string) => parseInt(item));

const [a, b, c] = input.sort((a, b) => a - b);
let result: number = 0;
if (a === b && a === c) result = 10000 + a * 1000;
else if (a === b) result = 1000 + a * 100;
else if (b === c) result = 1000 + b * 100;
else if (a === c) result = 1000 + c * 100;
else result = c * 100;

console.log(result);