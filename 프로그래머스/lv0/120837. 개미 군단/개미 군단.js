function solution(hp) {
   let answer = 0;
   while (true) {
      if (hp >= 5) {
         hp -= 5;
         answer++;
      } else if (hp >= 3) {
         hp -= 3;
         answer++;
      } else if (hp >= 1) {
         hp -= 1;
         answer++;
      } else {
         return answer;
      }
   }
}