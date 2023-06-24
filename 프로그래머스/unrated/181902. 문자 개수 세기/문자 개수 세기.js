function solution(my_string) {
   const arr = my_string.split('');
   let answer = [];
   for (let i = 65; i <= 90; i++) {
      answer.push(arr.filter(item => item === String.fromCharCode(i)).length);
   }
   for (let i = 97; i <= 122; i++) {
      answer.push(arr.filter(item => item === String.fromCharCode(i)).length);
   }
   return answer;
}