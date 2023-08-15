let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input: number[] = fs
   .readFileSync(filePath)
   .toString()
   .split(' ')
   .map((item: string) => parseInt(item));

const solution = (input: number[]) => {
   let result: number = 0;
   for (let i of input) result += i ** 2;
   result %= 10;
   return result;
};

console.log(solution(input));
