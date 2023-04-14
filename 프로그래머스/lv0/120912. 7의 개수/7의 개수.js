function solution(array) {
   let answer = 0;
   let resultArr = [];

   console.log(array);
   array.forEach(item => {
      resultArr.push(String(item));
   });
   console.log(resultArr);
   for (let i of resultArr) {
      for (let j = 0; j < i.length; j++) {
         if (i[j] === '7') {
            answer++;
         }
      }
   }
   return answer;
}