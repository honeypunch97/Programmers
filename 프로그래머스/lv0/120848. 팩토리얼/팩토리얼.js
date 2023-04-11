const factorial = num => (num === 0 ? 1 : num * factorial(num - 1));
function solution(n) {
   let answer = 0;
   let i = 0;
   while (true) {
      if (n >= factorial(i)) {
         answer = i;
         i++;
      } else {
         break;
      }
   }
   return answer;
}