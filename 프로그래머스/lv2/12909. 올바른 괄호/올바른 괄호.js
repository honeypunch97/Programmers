function solution(s) {
   let stackCnt = 0;
   if (s[0] === ')' || s[s.length - 1] === '(') {
      return false;
   } else {
      for (let i = 0; i < s.length; i++) {
         stackCnt += s[i] === '(' ? 1 : -1;
         if (stackCnt < 0) return false;
      }
      return stackCnt === 0 ? true : false;
   }
}