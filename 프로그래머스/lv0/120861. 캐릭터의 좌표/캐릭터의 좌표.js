function solution(keyinput, board) {
   let answer = [0, 0];
   let maxX = (board[0] - 1) / 2;
   let maxY = (board[1] - 1) / 2;
   for (let i of keyinput) {
      if (i === 'left') {
         answer[0] -= 1;
      } else if (i === 'right') {
         answer[0] += 1;
      } else if (i === 'down') {
         answer[1] -= 1;
      } else if (i === 'up') {
         answer[1] += 1;
      } else {
         return 'error';
      }
      answer[0] = answer[0] > maxX ? maxX : answer[0];
      answer[0] = answer[0] < -maxX ? -maxX : answer[0];
      answer[1] = answer[1] > maxY ? maxY : answer[1];
      answer[1] = answer[1] < -maxY ? -maxY : answer[1];
   }
   return answer;
}