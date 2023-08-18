const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input: number[] = fs
   .readFileSync(filePath, 'utf-8')
   .trim()
   .split('\n')
   .map((item: string) => BigInt(item));

const solution = (input: number[]) => {
   const [a, b] = input;
   const result: number[] = [];
   result.push(a + b);
   result.push(a - b);
   result.push(a * b);
   return result.join('\n');
};
console.log(solution(input));