function solution(array, n) {
   array.sort((a, b) => a - b);
   let answer = array[0];
   let temp = Math.abs(n - array[0]);
   array.forEach(item => {
      if (temp > Math.abs(n - item)) {
         temp = Math.abs(n - item);
         answer = item;
      }
   });
   return answer;
}