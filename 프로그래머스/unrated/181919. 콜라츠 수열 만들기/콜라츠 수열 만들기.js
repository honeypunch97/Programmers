function solution(n) {
   let answer = [];
   const collatz = x => (x % 2 === 0 ? x / 2 : 3 * x + 1);
   while (n !== 1) {
      answer = [...answer,n]
      n = collatz(n);
   }
    answer.push(1)
   return answer;
}