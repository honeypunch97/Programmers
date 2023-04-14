function solution(quiz) {
   let answer = [];
   quiz.forEach(item => {
      let arr = item.split(' ');
      let result = '';
      if (arr[1] === '+') {
         result = Number(arr[0]) + Number(arr[2]) === Number(arr[4]) ? 'O' : 'X';
      } else {
         result = Number(arr[0]) - Number(arr[2]) === Number(arr[4]) ? 'O' : 'X';
      }
      answer.push(result);
   });
   return answer;
}