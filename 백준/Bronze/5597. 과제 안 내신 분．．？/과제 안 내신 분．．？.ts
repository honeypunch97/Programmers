let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input: number[] = fs
   .readFileSync(filePath)
   .toString()
   .split('\n')
   .map((item: string) => parseInt(item));

const solution = (input: number[]) => {
   const result: number[] = [];
   const temp: number[] = [];
   for (let i = 1; i <= 30; i++) {
      if (!input.includes(i)) temp.push(i);
   }
   temp.sort((a: number, b: number) => a - b);
   result.push(temp[0], temp[temp.length - 1]);
   return result.join('\n');
};

console.log(solution(input));
