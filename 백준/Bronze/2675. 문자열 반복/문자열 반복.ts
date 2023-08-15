let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input: string[] = fs.readFileSync(filePath).toString().split('\n');

const solution = (input: string[]) => {
   const strNum: number = parseInt(input[0]);
   let result: string = '';
   for (let i: number = 1; i <= strNum; i++) {
      const currentItemArr = input[i].split(' ');
      const repeatNum: number = parseInt(currentItemArr[0]);
      const str: string = currentItemArr[1];
      for (let j: number = 0; j < str.length; j++) {
         result += str[j].repeat(repeatNum);
      }
      result += '\n';
   }
   return result;
};

console.log(solution(input));
