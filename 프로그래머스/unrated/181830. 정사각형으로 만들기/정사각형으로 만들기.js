function solution(arr) {
   let answer = [];
   const rowNum = arr.length;
   const colNum = arr[0].length;
   if (rowNum > colNum) {
      for (let i = 0; i < arr.length; i++) {
         let arrItem = [];
         for (let j = 0; j < rowNum; j++) {
            arrItem.push(arr[i][j] ? arr[i][j] : 0);
         }
         answer.push(arrItem);
      }
   }
   if (rowNum < colNum) {
      answer = [...arr];
      for (let i = 0; i < colNum - rowNum; i++) {
         let arrItem = [];
         for (let j = 0; j < colNum; j++) {
            arrItem.push(0);
         }
         answer.push(arrItem);
      }
   }
   if (rowNum === colNum) {
      answer = [...arr];
   }
   return answer;
}