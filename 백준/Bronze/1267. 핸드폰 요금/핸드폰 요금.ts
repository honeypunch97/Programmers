const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input: number[] = fs
   .readFileSync(filePath)
   .toString()
   .trim()
   .split('\n')[1]
   .split(' ')
   .map((item: string) => Number(item));

const solution = (input: number[]): void => {
   let Y = 0;
   let M = 0;

   for (let i of input) {
      Y += Math.ceil(i / 30) * 10;
      M += Math.ceil(i / 60) * 15;
      if (i % 30 === 0) Y += 10;
      if (i % 60 === 0) M += 15;
   }
   if (Y < M) console.log(`Y ${Y}`);
   else if (Y > M) console.log(`M ${M}`);
   else console.log(`Y M ${Y}`);
};
solution(input);