function solution(x) {
   let sum = String(x)
      .split('')
      .map(Number)
      .reduce((acc, cur) => acc + cur);
   let answer = x % sum === 0 ? true : false;
   return answer;
}