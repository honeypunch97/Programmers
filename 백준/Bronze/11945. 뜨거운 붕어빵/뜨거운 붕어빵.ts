const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input: string[] = fs.readFileSync(filePath).toString().trim().split('\n');
input.shift();

const solution = (input: string[]) => {
   for (let i of input) {
      console.log(i.split('').reverse().join(''));
   }
};
solution(input);