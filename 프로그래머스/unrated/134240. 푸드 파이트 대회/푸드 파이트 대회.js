function solution(food) {
   const foodArr = [...food];
   let answer = '';
   let currentSide = '';
   let reverseSide = '';
   for (let i = 1; i < foodArr.length; i++) {
      currentSide += String(i).repeat(Math.floor(foodArr[i] / 2));
   }
   reverseSide = currentSide.split('').reverse().join('');
   answer = currentSide + '0' + reverseSide;
   return answer;
}
