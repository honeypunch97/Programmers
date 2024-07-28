const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './data.txt';
let input = fs.readFileSync(filePath).toString();

function countWaysToSum(n) {
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;

  for (let i = 1; i <= n; i++) {
    if (i >= 1) dp[i] += dp[i - 1];
    if (i >= 2) dp[i] += dp[i - 2];
    if (i >= 3) dp[i] += dp[i - 3];
  }

  return dp[n];
}

function solution(input) {
  const lines = input.trim().split('\n');
  const T = parseInt(lines[0], 10);
  const results = [];

  for (let i = 1; i <= T; i++) {
    const n = parseInt(lines[i], 10);
    results.push(countWaysToSum(n));
  }

  return results.join('\n');
}

console.log(solution(input));