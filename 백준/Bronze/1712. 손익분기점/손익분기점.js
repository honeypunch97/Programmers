const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './data.txt';
let input = fs.readFileSync(filePath).toString();

function solution(input) {
  const [A, B, C] = input.split(' ').map((item) => Number(item));
  const margin = C - B;
  const count = Math.floor(A / margin) + 1;
  return margin <= 0 ? -1 : count;
}

console.log(solution(input));
