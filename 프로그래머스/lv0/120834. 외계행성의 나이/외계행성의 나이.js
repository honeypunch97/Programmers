function solution(age) {
   let answer = '',
      ageArr = String(age).split(''),
      arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
   for (let i of ageArr) {
      answer += arr[i];
   }
   return answer;
}