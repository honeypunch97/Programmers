function solution(my_str, n) {
   let answer = [];
   let arr = my_str.split('');
   while (arr.length >= n) {
      answer.push(arr.splice(0, n).join(''));
   }
   if (arr.length > 0) {
      answer.push(arr.join(''));
   }
   return answer;
}