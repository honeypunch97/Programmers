function solution(n, arr1, arr2) {
   let answer = [];
   for (let i = 0; i < n; i++) {
      const resultStr1 = arr1[i].toString(2).padStart(n, '0');
      const resultStr2 = arr2[i].toString(2).padStart(n, '0');
      const tempArr = [];
      for (let j = 0; j < n; j++) {
         tempArr.push(resultStr1[j] === '0' && resultStr2[j] === '0' ? ' ' : '#');
      }
      answer.push(tempArr.join(''));
   }
   return answer;
}