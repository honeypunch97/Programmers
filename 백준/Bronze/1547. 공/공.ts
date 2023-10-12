const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input: string[] = fs.readFileSync(filePath).toString().trim().split('\n');
input.shift();

const solution = (input: string[]): void => {
   const arr = ['1', '2', '3'];
   for (let i of input) {
      const [a, b] = i.split(' ');
      const aIdx = arr.findIndex(item => item === a);
      const bIdx = arr.findIndex(item => item === b);

      arr[aIdx] = b;
      arr[bIdx] = a;
   }
   console.log(arr[0]);
};
solution(input);