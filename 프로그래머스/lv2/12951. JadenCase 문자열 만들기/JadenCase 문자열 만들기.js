function solution(s) {
   let answer = '';
   let isFirst = true;
   answer = s
      .toLowerCase()
      .split('')
      .map(item => {
         if (isFirst) {
            isFirst = item === ' ' ? true : false;
            return item.toUpperCase();
         } else {
            isFirst = item === ' ' ? true : false;
            return item;
         }
      })
      .join('');
   return answer;
}