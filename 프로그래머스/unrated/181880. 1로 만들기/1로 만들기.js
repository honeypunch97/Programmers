function solution(num_list) {
   let answer = 0;
   num_list.map(i => {
      while (i !== 1) {
         i = i % 2 === 0 ? i / 2 : (i - 1) / 2;
         answer += 1;
      }
   });
   return answer;
}