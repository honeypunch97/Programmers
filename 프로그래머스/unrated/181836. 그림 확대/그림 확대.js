function solution(picture, k) {
   let answer = [];
   for (let i = 0; i < picture.length; i++) {
      let tempStr = '';
      for (let j = 0; j < picture[i].length; j++) {
         tempStr += picture[i][j].repeat(k);
      }
      for (let j = 0; j < k; j++) answer.push(tempStr);
   }
   return answer;
}