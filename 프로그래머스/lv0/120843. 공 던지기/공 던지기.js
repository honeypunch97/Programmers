function solution(numbers, k) {
   let answer = 0;
   let len = ((k - 1) * 2) % numbers.length;
   answer = numbers[len];
   return answer;
}