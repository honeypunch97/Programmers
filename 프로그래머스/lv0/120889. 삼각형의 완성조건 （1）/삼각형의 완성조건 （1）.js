function solution(sides) {
   let maxLine = sides[0],
      otherLines = [],
      sumOfOtherLines = 0;
   for (let i = 0; i < sides.length; i++) {
      if (sides[i] > maxLine) {
         maxLine = sides[i];
      } else {
         otherLines.push(sides[i]);
      }
   }
   for (let i of otherLines) {
      sumOfOtherLines += i;
   }
   return maxLine < sumOfOtherLines ? 1 : 2;
}