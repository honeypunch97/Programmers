function solution(people, limit) {
   let answer = 0;
   let peopleArr = [...people].sort((a, b) => a - b);
   let i = 0;
   let j = peopleArr.length - 1;

   while (i <= j) {
      if (peopleArr[i] + peopleArr[j] <= limit) {
         i++;
         j--;
         answer++;
      } else if (peopleArr[j] > limit) {
         j--;
         answer++;
      } else {
         j--;
         answer++;
      }
   }
   return answer;
}
