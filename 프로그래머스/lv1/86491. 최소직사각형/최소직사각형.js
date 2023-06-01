function solution(sizes) {
   let answer = 0;
   let num1Max = 0;
   let num2Max = 0;
   sizes.map(item => {
      item.sort((a, b) => a - b);
   });
   sizes.map(item => {
      num1Max = num1Max < item[0] ? item[0] : num1Max;
      num2Max = num2Max < item[1] ? item[1] : num2Max;
   });
   answer = num1Max * num2Max;
   return answer;
}