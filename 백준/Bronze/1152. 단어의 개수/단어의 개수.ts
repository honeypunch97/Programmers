const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input: string[] = fs.readFileSync(filePath).toString().trim().split(' ');

const solution = (input: string[]) => {
   let result: number = input[0] === '' ? 0 : input.length;
   return result;
};

console.log(solution(input));