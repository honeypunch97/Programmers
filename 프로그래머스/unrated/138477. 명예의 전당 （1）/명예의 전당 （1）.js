function solution(k, score) {
   const answer = [];
   let arr = [];
   for (let i of score) {
      arr.push(i);
      arr.sort((a, b) => b - a);
      arr = arr.slice(0, k);
      answer.push(...arr.slice(-1));
   }
   return answer;
}