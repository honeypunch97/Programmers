function solution(l, r) {
   let answer = [];
   for (let i = l; i <= r; i++) {
      if (/^(?:5|0)+$/.test(i.toString())) answer.push(i);
   }
   return answer.length === 0 ? [-1] : answer;
}