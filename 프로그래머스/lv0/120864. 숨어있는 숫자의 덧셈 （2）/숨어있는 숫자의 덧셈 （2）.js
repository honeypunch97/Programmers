function solution(my_string) {
   let answer = 0;
   let arr = [];
   let temp = '';
   for (let i = 0; i < my_string.length; i++) {
      if (isNaN(my_string[i])) {
         if (temp.length !== 0) {
            arr.push(temp);
            temp = '';
         }
      } else {
         temp += my_string[i];
      }
   }
   if (temp.length !== 0) {
      arr.push(temp);
   }
   for (let i of arr) {
      answer += Number(i);
   }
   return answer;
}