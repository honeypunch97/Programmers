let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input: string[] = fs.readFileSync(filePath).toString().split('\n');

const solution = (input: string[]) => {
   const num: number = parseInt(input[0]);
   const numArr: number[] = input[1].split('').map((item: string) => parseInt(item));
   let result: number = 0;
   for (let i: number = 0; i < num; i++) {
      result += numArr[i];
   }
   return result;
};

console.log(solution(input));
