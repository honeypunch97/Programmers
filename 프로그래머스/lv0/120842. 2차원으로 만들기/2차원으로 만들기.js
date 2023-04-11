function solution(num_list, n) {
   let answer = [];
   for (let i = 0; i < num_list.length; i++) {
      let temp = [];
      for (let j = 0; j < n; j++) {
         temp.push(num_list[i + j]);
      }
      answer.push(temp);
      i += n - 1;
   }
   return answer;
}