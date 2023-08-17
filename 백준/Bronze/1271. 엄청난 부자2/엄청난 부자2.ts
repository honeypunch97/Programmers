const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs
   .readFileSync(filePath, 'utf-8')
   .trim()
   .split(' ')
   .map((item: string) => BigInt(item));

const solution = (input: number[]) => {
   const result = [];
   result.push(input[0] / input[1]);
   result.push(input[0] % input[1]);
   return result.map(item => item.toString()).join('\n');
};

console.log(solution(input));