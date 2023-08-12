const input: string[] = require('fs').readFileSync('/dev/stdin').toString()
   .split('\n')
   .map((item: string) => item.trim());

const numLen: number = parseInt(input[0]);
const numArr: number[] = input[1].split(' ').map((item: string) => parseInt(item));
const target: number = parseInt(input[2]);
let count: number = 0;
for (let i: number = 0; i < numLen; i++) {
   if (target === numArr[i]) count++;
}

console.log(count);
