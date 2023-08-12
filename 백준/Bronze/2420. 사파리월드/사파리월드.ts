const input: number[] = require('fs').readFileSync('/dev/stdin').toString()
   .split(' ')
   .map((item: string) => parseInt(item));

const [a, b] = input;
let result: number = Math.abs(a - b);
console.log(result);
