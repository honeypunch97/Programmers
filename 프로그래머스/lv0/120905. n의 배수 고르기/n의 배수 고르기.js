function solution(n, numlist) {
   let answer = [];
   answer = numlist.filter(item => item % n === 0);
   return answer;
   //return numlist.filter(num => num % n === 0);
}