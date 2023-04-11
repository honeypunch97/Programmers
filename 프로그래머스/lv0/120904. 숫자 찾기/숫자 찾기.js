function solution(num, k) {
   let answer = String(num).split('').indexOf(String(k));
   if (answer >= 0) {
      return answer + 1;
   } else {
      return -1;
   }
}