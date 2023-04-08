function solution(array) {
   let len = array.length,
      answer = [];
   array.sort((a, b) => {
      return a - b;
   });
   for (let i = 0; i < Math.floor(len / 2); i++) {
      array.shift();
      array.pop();
   }
   answer = Number(array);
   return answer;
}
