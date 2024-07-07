function solution(n) {
  const MOD = 1000000007;
  if (n === 1) return 1;
  if (n === 2) return 2;

  let a = 1, b = 2;

  for (let i = 3; i <= n; i++) {
    let c = (a + b) % MOD;
    a = b;
    b = c;
  }

  return b;
}