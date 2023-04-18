function solution(s) {
   let answer = true;
   let pNum = 0;
   let yNum = 0;
   let str = s.toLowerCase().split('');
   str.forEach(item => {
      item === 'p' ? pNum++ : pNum;
      item === 'y' ? yNum++ : yNum;
   });
   answer = pNum === yNum ? true : false;
   return answer;
}