function solution(s) {
   let answer = '';
   let arr = s.split('');
   let answerArr = [];
   while (arr.length !== 0) {
      let temp = arr[0];
      arr.shift();
      if (!arr.includes(temp)) {
         answerArr.push(temp);
      } else {
         while (arr.indexOf(temp) !== -1) {
            arr.splice(arr.indexOf(temp), 1);
         }
      }
   }
   answer = answerArr.sort().join('');
   return answer;
}