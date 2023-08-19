const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input: number[] = fs
   .readFileSync(filePath, 'utf-8')
   .trim()
   .split('\n')
   .map((item: string) => parseInt(item));

const solution = (input: number[]) => {
   const [a, b] = input;
   return a + b;
};
console.log(solution(input));