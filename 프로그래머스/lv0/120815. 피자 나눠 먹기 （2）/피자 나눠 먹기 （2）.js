function solution(n) {
   let pizzaNum = 1,
      piecesOfPizza = 6;
   while (true) {
      if ((pizzaNum * piecesOfPizza) % n === 0) {
         return pizzaNum;
      } else {
         pizzaNum++;
      }
   }
}