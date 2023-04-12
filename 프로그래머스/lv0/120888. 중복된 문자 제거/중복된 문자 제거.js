function solution(my_string) {
   let answer = '';
   let arr = new Set(my_string.split(''));
   answer = [...arr].join('');
   return answer;
}