const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input: string[] = fs.readFileSync(filePath).toString().split('\n');

const solution = (input: string[]) => {
   const result: string[] = [];
   let num: number = parseInt(input[0]);
   for (let i: number = 1; i <= num; i++) {
      const [H, W, N] = input[i].split(' ').map((item: string) => parseInt(item));
      let floor: string = '';
      if (N % H === 0) {
         floor = String(H);
      } else {
         floor = String(N % H);
      }
      const roomNum: string = String(Math.ceil(N / H)).padStart(2, '0');
      result.push(floor + roomNum);
   }
   return result.join('\n');
};

console.log(solution(input));