let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input: string[] = fs.readFileSync(filePath).toString().split('\n');

const solution = (input: string[]) => {
   const [str, len] = input;
   console.log(str[parseInt(len) - 1]);
};

solution(input);