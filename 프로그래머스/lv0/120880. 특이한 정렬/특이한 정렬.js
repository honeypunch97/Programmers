function solution(numlist, n) {
   let answer = [];
   let numObj = [];
   numlist.sort((a, b) => a - b).map((item, idx) => numObj.push({ idx, gap: item - n }));
   numObj.sort((a, b) => Math.abs(a.gap) - Math.abs(b.gap) || b.idx - a.idx);
   numObj.map(item => {
      const { idx } = item;
      answer.push(numlist[idx]);
   });
   return answer;
}