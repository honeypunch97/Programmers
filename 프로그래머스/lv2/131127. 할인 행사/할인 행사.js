function solution(want, number, discount) {
   let answer = 0;
   let numberLen = 0;
   let tempWant = [];
   for (let i = 0; i < want.length; i++) {
      for (let j = 0; j < number[i]; j++) {
         tempWant.push(want[i]);
         numberLen++;
      }
   }
   tempWant = tempWant.sort().join(' ');

   for (let i = 0; i <= discount.length - numberLen; i++) {
      const tempDiscount = discount
         .slice(i, i + 10)
         .sort()
         .join(' ');

      if (tempWant === tempDiscount) answer++;
   }
   return answer;
}