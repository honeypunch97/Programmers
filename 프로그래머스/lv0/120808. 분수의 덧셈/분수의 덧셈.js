function solution(numer1, denom1, numer2, denom2) {
   let answer = [],
      resultNumer = 0,
      resultDenom = 0;
   resultNumer = numer1 * denom2 + numer2 * denom1;
   resultDenom = denom1 * denom2;
   const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
   answer[0] = resultNumer / gcd(resultNumer, resultDenom);
   answer[1] = resultDenom / gcd(resultNumer, resultDenom);
   return answer;
}