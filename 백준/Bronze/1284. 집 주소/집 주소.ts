const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input: string[] = fs.readFileSync(filePath).toString().trim().split('\n').slice(0, -1);

const solution = (input: string[]): void => {
   for (let i of input) {
      let width: number = i.length + 1;
      for (let j of i.split('')) {
         if (j === '1') width += 2;
         else if (j === '0') width += 4;
         else width += 3;
      }
      console.log(width);
   }
};
solution(input);