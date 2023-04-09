function solution(box, n) {
   let diceSize = n,
      boxWidth = box[0],
      boxDepth = box[1],
      boxHeight = box[2];
   let answer = ~~(boxWidth / diceSize) * ~~(boxDepth / diceSize) * ~~(boxHeight / diceSize);
   return answer;
}