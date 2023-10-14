const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input: number[] = fs
   .readFileSync(filePath)
   .toString()
   .trim()
   .split(' ')
   .map((item: string) => Number(item));

const solution = (input: number[]): void => {
   const [a, b] = input;
   const w = Math.abs(Math.ceil(a / 4) - Math.ceil(b / 4));
   const h = Math.abs((a % 4 || 4) - (b % 4 || 4));
   console.log(w + h);
};
solution(input);