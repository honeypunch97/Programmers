function solution(cards1, cards2, goal) {
   let answer = 'Yes';
   for (let i of goal) {
      if (i === cards1[0]) cards1.shift();
      else if (i === cards2[0]) cards2.shift();
      else answer = 'No';
   }
   return answer;
}