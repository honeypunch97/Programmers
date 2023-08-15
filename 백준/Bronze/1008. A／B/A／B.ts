let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input: number[] = fs
   .readFileSync(filePath)
   .toString()
   .split(' ')
   .map((item: string) => parseInt(item));

const solution = (input: number[]) => {
   const result: number = input[0] / input[1];
   return result;
};

console.log(solution(input));
