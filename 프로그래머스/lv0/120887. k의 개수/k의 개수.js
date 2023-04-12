function solution(i, j, k) {
   let answer = 0;
   for (let x = i; x <= j; x++) {
      let strX = String(x);
      for (let y = 0; y <= strX.length; y++) {
         if (strX[y] === String(k)) {
            answer++;
         }
      }
   }
   return answer;
}