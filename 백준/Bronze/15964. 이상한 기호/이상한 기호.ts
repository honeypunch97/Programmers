let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input: number[] = fs
   .readFileSync(filePath)
   .toString()
   .split(' ')
   .map((item: string) => parseInt(item));

const solution = (input: number[]) => {
   const [A, B] = input;
   return (A + B) * (A - B);
};

console.log(solution(input));
