function solution(s) {
   return Number(
      String(s)
         .split('')
         .sort((a, b) => b - a)
         .join(''),
   );
}