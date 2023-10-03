const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input: string[] = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (input: string[]) => {
   const [a, b] = input[0].split(' ').map(item => Number(item));
   const [c, d] = input[1].split(' ').map(item => Number(item));
   console.log(a + d > b + c ? b + c : a + d);
};
solution(input);