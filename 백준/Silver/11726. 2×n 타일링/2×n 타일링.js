const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './data.txt';
let input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const num = Number(input);
  const MOD = 10007;

  if (num === 1) return 1;
  if (num === 2) return 2;

  let dp = new Array(num + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= num; i++) {
    dp[i] = (dp[i-1] + dp[i-2]) % MOD;
  }

  return dp[num];
}

console.log(solution(input));