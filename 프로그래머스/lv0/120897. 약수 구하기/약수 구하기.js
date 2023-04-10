function solution(n) {
   let answer = [],
      num = 1;
   while (true) {
      if (num === n + 1) {
         break;
      } else if (n % num === 0) {
         answer.push(num);
      }
      num++;
   }
   return answer;
}