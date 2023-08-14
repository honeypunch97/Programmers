let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input: string[] = fs.readFileSync(filePath).toString().split('\n');

const solution = (input: string[]) => {
   const [row, col] = input[0].split(' ').map((item: string) => parseInt(item));
   for (let i = 1; i <= row; i++) {
      const currentArr1: number[] = input[i].split(' ').map((item: string) => parseInt(item));
      const currentArr2: number[] = input[i + row].split(' ').map((item: string) => parseInt(item));
      const temp: number[] = [];
      for (let j = 0; j < col; j++) {
         temp.push(currentArr1[j] + currentArr2[j]);
      }
      console.log(temp.join(' '));
   }
};

solution(input);