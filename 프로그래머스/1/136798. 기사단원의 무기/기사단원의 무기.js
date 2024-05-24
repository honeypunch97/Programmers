function solution(number, limit, power) {
  return Array.from({ length: number }, (_, i) => {
    let cnt = 0;
    for (let j = 1; j <= Math.sqrt(i + 1) && cnt <= limit; j++) {
      cnt += (i + 1) % j === 0 ? (j === (i + 1) / j ? 1 : 2) : 0;
    }
    return cnt > limit ? power : cnt;
  }).reduce((acc, cnt) => acc + cnt, 0);
}