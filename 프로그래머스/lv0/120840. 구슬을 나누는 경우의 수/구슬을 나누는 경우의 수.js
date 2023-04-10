function solution(balls, share) {
   let answer = 1;
   const factorial = num => (num !== 0 ? num * factorial(num - 1) : 1);
   answer = factorial(balls) / (factorial(balls - share) * factorial(share));
   return Math.round(answer);
}