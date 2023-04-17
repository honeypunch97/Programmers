function solution(n) {
   let arr = String(n).split('');
   let answer = 0;
   for (let i of arr) {
      answer += Number(i);
   }
   return answer;
}