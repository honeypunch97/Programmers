function solution(s) {
   const data = {
      0: 'zero',
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine',
   };
   let answer = s;
   Object.keys(data).map(item => {
      answer = answer.replaceAll(data[item], item);
   });
   return Number(answer);
}