const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input: string[] = fs.readFileSync(filePath).toString().split(' ');

const solution = (input: string[]) => {
   const reverseArr: number[] = [];
   for (let i: number = 0; i < input.length; i++) {
      reverseArr.push(parseInt(input[i].split('').reverse().join('')));
   }
   return Math.max(reverseArr[0], reverseArr[1]);
};
console.log(solution(input));