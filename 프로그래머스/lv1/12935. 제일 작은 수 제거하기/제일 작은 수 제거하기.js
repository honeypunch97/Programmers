function solution(arr) {
   let answer = [];
   let min = 999999999;
   arr.forEach(item => {
      min = item < min ? item : min;
   });

   answer = arr.filter(num => num !== min);
   if (answer.length === 0) {
      answer.push(-1);
   }
   return answer;
}