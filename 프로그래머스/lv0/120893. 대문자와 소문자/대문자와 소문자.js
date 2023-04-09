function solution(my_string) {
   let answer = '';
   for (let i = 0; i < my_string.length; i++) {
      if (my_string.charCodeAt(i) >= 65 && my_string.charCodeAt(i) <= 90) {
         answer += my_string[i].toLowerCase();
      } else {
         answer += my_string[i].toUpperCase();
      }
   }
   return answer;
}