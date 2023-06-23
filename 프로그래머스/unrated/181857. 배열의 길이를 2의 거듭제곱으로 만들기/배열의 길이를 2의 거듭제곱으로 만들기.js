function solution(arr) {
   let len = 1;
   while (true) {
      if (arr.length <= len) break;
      else len *= 2;
   }
   for (let i = 0; (i = len - arr.length); i++) {
      arr.push(0);
   }
   return arr;
}