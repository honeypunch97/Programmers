const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input: string[] = fs.readFileSync(filePath).toString().trim().split('\n');
input.pop();

const solution = (input: string[]) => {
   for (let i of input) {
      const reverseStr: string = i.split('').reverse().join('');
      console.log(reverseStr);
   }
};
solution(input);