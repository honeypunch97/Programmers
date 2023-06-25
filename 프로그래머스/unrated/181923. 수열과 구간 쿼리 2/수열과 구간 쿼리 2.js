function solution(arr, queries) {
   let answer = [];
   const initialNum = 1000001;
   for (let i = 0; i < queries.length; i++) {
      const [s, e, k] = queries[i];
      let min = initialNum;
      for (let j = s; j <= e; j++) {
         if (arr[j] > k && arr[j] <= min) {
            min = arr[j];
         }
      }
      answer.push(min === initialNum ? -1 : min);
   }
   return answer;
}