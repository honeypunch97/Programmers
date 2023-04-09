function solution(my_string) {
   let answer = [],
      stringArr = [];
   stringArr = my_string.split('');
   for (let i of stringArr) {
      if (i !== 'a' && i !== 'e' && i !== 'i' && i !== 'o' && i !== 'u') {
         answer.push(i);
      }
   }
   answer = answer.join('');
   return answer;
}