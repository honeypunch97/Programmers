function solution(dots) {
   function slope([x1, y1], [x2, y2]) {
      return (y2 - y1) / (x2 - x1);
   }

   function isParallel(line1, line2) {
      return slope(line1[0], line1[1]) === slope(line2[0], line2[1]);
   }

   for (let i = 0; i < 2; i++) {
      for (let j = i + 1; j < 3; j++) {
         for (let k = j + 1; k < 4; k++) {
            let tempDots = [...dots];
            let line1 = [tempDots[i], tempDots[j]];
            let line2 = [tempDots[k], tempDots[6 - i - j - k]];
            if (isParallel(line1, line2)) {
               return 1;
            }
         }
      }
   }
   return 0;
}