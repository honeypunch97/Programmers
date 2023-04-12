function solution(before, after) {
   let beforeArr = before.split('').sort(),
      afterArr = after.split('').sort();
   for (let i = 0; i < before.length; i++) {
      if (beforeArr[i] !== afterArr[i]) {
         return 0;
      }
   }
   return 1;
}