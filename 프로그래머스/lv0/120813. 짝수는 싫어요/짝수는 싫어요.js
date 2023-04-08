function solution(n) {
   let answer = [];
   for (let i = n; i >= 0; i--) {
      i % 2 === 1 ? answer.push(i) : 0;
   }
   answer.sort((a, b) => a - b);
   return answer;
}