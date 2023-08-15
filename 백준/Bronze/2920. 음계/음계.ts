const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input: number[] = fs
   .readFileSync(filePath)
   .toString()
   .split(' ')
   .map((item: string) => parseInt(item));

const solution = (input: number[]) => {
   let result: string = '';
   if (input.join('') === [...input].sort((a, b) => a - b).join('')) result = 'ascending';
   else if (input.join('') === [...input].sort((a, b) => b - a).join('')) result = 'descending';
   else result = 'mixed';
   return result;
};

console.log(solution(input));
