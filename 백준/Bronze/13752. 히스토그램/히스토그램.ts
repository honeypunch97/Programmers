const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input: number[] = fs
   .readFileSync(filePath)
   .toString()
   .trim()
   .split('\n')
   .map((item: string) => Number(item));
input.shift();

const solution = (input: number[]) => {
   for (let i of input) {
      console.log('='.repeat(i));
   }
};
solution(input);