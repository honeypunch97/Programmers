const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input: number[] = fs
   .readFileSync(filePath)
   .toString()
   .trim()
   .split(' ')
   .map((item: string) => Number(item));

const solution = (input: number[]): void => {
   const [x, y, w, h] = input;
   const arr: number[] = [];

   arr.push(x - 0);
   arr.push(w - x);
   arr.push(y - 0);
   arr.push(h - y);

   console.log(Math.min(...arr));
};
solution(input);