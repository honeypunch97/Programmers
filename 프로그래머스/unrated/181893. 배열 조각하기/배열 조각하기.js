function solution(arr, query) {
   let answer = [...arr];
   for (let i = 0; i < query.length; i++) {
      const currentQ = query[i];
      answer = i % 2 === 0 ? answer.slice(0, currentQ + 1) : answer.slice(currentQ);
   }
   return answer;
}