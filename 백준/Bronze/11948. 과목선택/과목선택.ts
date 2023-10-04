const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input: number[] = fs
   .readFileSync(filePath)
   .toString()
   .trim()
   .split('\n')
   .map((item: string) => Number(item));

const solution = (input: number[]) => {
   const sum: number = input.reduce((acc, cur) => acc + cur);
   const chooseNum1: number = Math.min(...input.slice(0, 4));
   const chooseNum2: number = Math.min(...input.slice(4, 6));
   console.log(sum - chooseNum1 - chooseNum2);
};
solution(input);
