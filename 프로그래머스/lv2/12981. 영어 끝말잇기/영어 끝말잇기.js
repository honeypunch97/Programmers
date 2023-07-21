function solution(m, words) {
   // i=바퀴수(n바퀴)
   const duplicateCheckArr = [];
   for (let i = 1; i <= Math.ceil((words.length - 1) / m); i++) {
      // j=현재순서(n번째사람)
      for (let j = 1; j <= m; j++) {
         const currentIdx = (i - 1) * m + j - 1;
         if (!words[currentIdx]) break;
         // 중복단어 사용
         if (duplicateCheckArr.length !== 0 && duplicateCheckArr.includes(words[currentIdx])) {
            return [j, i];
         }
         //  끝말잇기 실패
         //  이전단어의 마지막글자
         const prevLastWord = words[currentIdx - 1] && words[currentIdx - 1][words[currentIdx - 1].length - 1];
         // 현재단어의 첫글자
         const currentFirstWord = words[currentIdx][0];
         if (prevLastWord && prevLastWord !== currentFirstWord) {
            return [j, i];
         }
         duplicateCheckArr.push(words[currentIdx]);
      }
   }
   return [0, 0];
}