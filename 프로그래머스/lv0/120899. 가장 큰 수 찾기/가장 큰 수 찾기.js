function solution(array) {
   let max = Math.max(...array);
   let answer = [max, array.indexOf(max)];
   return answer;
}