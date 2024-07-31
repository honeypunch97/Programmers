const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './data.txt';
let input = fs.readFileSync(filePath).toString();

function solution(input) {
  input = input.split('\n');
  const T = Number(input.shift());
  let result = [];

  for (let i = 0; i < T; i++) {
    const k = +input.shift();
    const n = +input.shift();

    const house = Array.from(Array(k + 1), () => Array(n + 1).fill(0));
    for (let i = 1; i <= n; i++) {
      house[0][i] = i;
    }

    for (let i = 1; i <= k; i++) {
      for (let j = 1; j <= n; j++) {
        house[i][j] = house[i - 1][j] + house[i][j - 1];
      }
    }

    result.push(house[k][n]);
  }

  return result.join('\n');
}

console.log(solution(input));