function solution(a, b, n) {
   let answer = 0;
   while (n / a >= 1) {
      answer += Math.floor(n / a) * b;
      n = (n % a) + Math.floor(n / a) * b;
      console.log(answer, n, n % a);
   }
   return answer;
}