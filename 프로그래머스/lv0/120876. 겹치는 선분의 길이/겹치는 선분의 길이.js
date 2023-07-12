function solution(lines) {
   let answer = 0;
   let resultArr = [];
   let answerArr = [];
   for (let i = 0; i < lines.length; i++) {
      for (let j = lines[i][0]; j < lines[i][1]; j++) {
         if (resultArr.find(item => item[0] === j && item[1] === j + 1)) {
            answerArr.push([j, j + 1]);
         }
         resultArr.push([j, j + 1]);
      }
   }
   answerArr = new Set(answerArr.map(JSON.stringify));
   answerArr = Array.from(answerArr).map(JSON.parse);

   return answerArr.length;
}