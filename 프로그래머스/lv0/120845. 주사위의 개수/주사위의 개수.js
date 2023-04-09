function solution(box, n) {
   let diceSize = n,
      [boxWidth, boxDepth, boxHeight] = box;
   let answer = ~~(boxWidth / diceSize) * ~~(boxDepth / diceSize) * ~~(boxHeight / diceSize);
   return answer;
}