function solution(s) {
   let answer = [],
      overlapArr = [];
   for (let i = 0; i < s.length; i++) {
      const findLastIdx = overlapArr.lastIndexOf(s[i]);
      findLastIdx !== -1 ? answer.push(i - findLastIdx) : answer.push(findLastIdx);
      overlapArr.push(s[i]);
   }
   return answer;
}