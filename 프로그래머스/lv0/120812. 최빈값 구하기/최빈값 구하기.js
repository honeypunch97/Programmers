function solution(array) {
   let resultArr = [0, 0],
      answerArr = [],
      overlap = false;
   for (let i = 0; i < array.length; i++) {
      answerArr[i] = [array[i], array.filter(item => item === array[i]).length];
   }
   for (let i = 0; i < array.length; i++) {
      if (resultArr[1] < answerArr[i][1] && resultArr[0] !== answerArr[i][0]) {
         resultArr = answerArr[i];
         overlap = false;
      } else if (resultArr[1] === answerArr[i][1] && resultArr[0] !== answerArr[i][0]) {
         overlap = true;
      }
   }
   return overlap === true ? -1 : resultArr[0];
}