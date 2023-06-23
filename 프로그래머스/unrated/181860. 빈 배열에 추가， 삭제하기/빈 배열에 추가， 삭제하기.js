function solution(arr, flag) {
   let answer = [];
   for (let i = 0; i < flag.length; i++) {
      for (let j = 0; j < arr[i]; j++) {
         if (flag[i]) {
            answer.push(arr[i]);
            answer.push(arr[i]);
         } else {
            answer.pop();
         }
      }
   }
   return answer;
}