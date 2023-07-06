const getGCD = (num1, num2) => {
   let gcd = 1;
   for (let i = 2; i <= Math.min(num1, num2); i++) {
      if (num1 % i === 0 && num2 % i === 0) gcd = i;
   }
   return gcd;
};
function solution(a, b) {
   const gcd = getGCD(a, b);
   let isFiniteDecimal = true;
   let arr = [];
   b = b / gcd;

   let num = 2;
   while (num <= b) {
      if (b % num === 0) {
         arr.push(num);
         b /= num;
         num = 2;
      } else num++;
   }
   console.log(arr);
   for (let i of arr) {
      if (i !== 2 && i !== 5) isFiniteDecimal = false;
   }
   return isFiniteDecimal ? 1 : 2;
}