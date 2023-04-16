function solution(polynomial) {
   let answer = '';
   let arr = polynomial.split(' + ');
   let xResult = 0;
   let numResult = 0;
   for (let i = 0; i < arr.length; i++) {
      let lastLength = arr[i].length - 1;
      if (arr[i][lastLength] === 'x') {
         let xNum = arr[i].slice(0, -1) === '' ? '1' : arr[i].slice(0, -1);
         xResult += Number(xNum);
      } else {
         numResult += Number(arr[i]);
      }
   }
   xResult = xResult === 1 ? '' : xResult;
   if (xResult !== 0 && numResult !== 0) {
      answer = `${xResult}x + ${numResult}`;
   } else if (xResult !== 0 && numResult === 0) {
      answer = `${xResult}x`;
   } else if (xResult === 0 && numResult !== 0) {
      answer = `${numResult}`;
   } else {
      answer = 0;
   }
   return answer;
}