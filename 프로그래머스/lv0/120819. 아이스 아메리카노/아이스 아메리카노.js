function solution(money) {
   const iceAmericanoPrice = 5500;
   let answer = [],
      iceAmericanoNum = 0,
      change = 0;
   iceAmericanoNum = ~~(money / iceAmericanoPrice);
   change = money % iceAmericanoPrice;
   answer = [iceAmericanoNum, change];
   return answer;
   //  return [~~(money / 5500), money % 5500];
}