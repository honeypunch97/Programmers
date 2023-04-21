function solution(a, b) {
   let min,
      max,
      answer = 0;
   if (a - b >= b - a) {
      max = a;
      min = b;
   } else {
      max = b;
      min = a;
   }

   for (let i = min; i <= max; i++) {
      answer += i;
   }
   return answer;
}