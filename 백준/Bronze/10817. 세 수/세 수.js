const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './data.txt';
let input = fs.readFileSync(filePath).toString();

function solution(input) {
  let result = input
    .split(' ')
    .map((item) => Number(item))
    .sort((a, b) => a - b)[1];

  return result;
}
console.log(solution(input));