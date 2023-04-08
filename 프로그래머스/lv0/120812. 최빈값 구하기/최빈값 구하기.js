function solution(array) {
   let answerArr = [0, 0],
      answerObj = {},
      overlap = false;
   for (let i = 0; i < array.length; i++) {
      answerObj[i] = [array[i], array.filter(item => item === array[i]).length];
   }
   for (let i = 0; i < array.length; i++) {
      if (answerArr[1] < answerObj[i][1] && answerArr[0] !== answerObj[i][0]) {
         answerArr = answerObj[i];
         overlap = false;
      } else if (answerArr[1] === answerObj[i][1] && answerArr[0] !== answerObj[i][0]) {
         overlap = true;
      }
   }
   return overlap === true ? -1 : answerArr[0];
}