const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input: string = fs.readFileSync(filePath).toString();

const solution = (input: string) => {
   const aASCII: number = 'a'.charCodeAt(0);
   const zASCII: number = 'z'.charCodeAt(0);
   const result: number[] = [];
   for (let i: number = aASCII; i <= zASCII; i++) {
      result.push(input.indexOf(String.fromCharCode(i)));
   }
   return result.join(' ');
};

console.log(solution(input));