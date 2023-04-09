function solution(my_string) {
   let answer = [];
   for (let i = 0; i < my_string.length; i++) {
      if (!isNaN(my_string[i])) {
         answer.push(Number(my_string[i]));
      }
   }
   answer = answer.sort((a, b) => a - b);
   return answer;
}