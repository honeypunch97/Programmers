function solution(absolutes, signs) {
   let answer = 0;
   absolutes.forEach((item, idx) => {
      answer = signs[idx] ? answer + item : answer + -1 * item;
   });
   return answer;
}