const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input: number[] = fs
   .readFileSync(filePath)
   .toString()
   .trim()
   .split(' ')
   .map((item: string) => Number(item));

const solution = (input: number[]): void => {
   let minNum: number = Infinity;
   const sum: number = input.reduce((acc, cur) => acc + cur);

   for (let i = 1; i < input.length; i++) {
      const tempTeam1 = input[0] + input[i];
      const tempTeam2 = sum - tempTeam1;
      const minValue = Math.abs(tempTeam1 - tempTeam2);
      if (minNum > minValue) minNum = minValue;
   }
   console.log(minNum);
};
solution(input);