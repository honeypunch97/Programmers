function solution(strArr) {
   let answer = 0;
   let lenArr = [...new Set(strArr.map(item => item.length))];
   lenArr.map(len => {
      const itemLen = strArr.filter(item => item.length === len).length;
      answer = itemLen > answer ? itemLen : answer;
   });
   return answer;
}