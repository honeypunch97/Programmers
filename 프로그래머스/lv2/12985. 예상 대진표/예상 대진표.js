function solution(n, a, b) {
   let answer = 0;
   let minNum = Math.min(a, b),
      maxNum = Math.max(a, b);
   while (true) {
      if (minNum + 1 === maxNum && minNum % 2 !== 0) break;
      answer++;
      minNum = minNum % 2 === 0 ? minNum - minNum / 2 : minNum - (minNum - 1) / 2;
      maxNum = maxNum % 2 === 0 ? maxNum - maxNum / 2 : maxNum - (maxNum - 1) / 2;
   }
   return answer + 1;
}