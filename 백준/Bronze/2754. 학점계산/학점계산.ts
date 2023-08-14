const input: string = require('fs').readFileSync('/dev/stdin').toString().trim();

let result: number = 0;
switch (input) {
   case 'A+':
      result = 4.3;
      break;
   case 'A0':
      result = 4.0;
      break;
   case 'A-':
      result = 3.7;
      break;
   case 'B+':
      result = 3.3;
      break;
   case 'B0':
      result = 3.0;
      break;
   case 'B-':
      result = 2.7;
      break;
   case 'C+':
      result = 2.3;
      break;
   case 'C0':
      result = 2.0;
      break;
   case 'C-':
      result = 1.7;
      break;
   case 'D+':
      result = 1.3;
      break;
   case 'D0':
      result = 1.0;
      break;
   case 'D-':
      result = 0.7;
      break;
   case 'F':
      result = 0.0;
      break;
   default:
      // throw new Error('학점 입력값 에러');
}

console.log(result.toFixed(1));
