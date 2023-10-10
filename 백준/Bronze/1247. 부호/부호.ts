const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input: bigint[] = fs
   .readFileSync(filePath)
   .toString()
   .trim()
   .split('\n')
   .map((item: string) => BigInt(item));

const solution = (input: bigint[]): void => {
   for (let i = 0; i < input.length; i++) {
      const n = Number(input[i]);
      const currentArr = input.slice(i + 1, i + 1 + n);
      i += n;

      const sum = currentArr.reduce((acc, cur) => acc + cur);
      console.log(sum === BigInt(0) ? '0' : sum > BigInt(0) ? '+' : '-');
   }
};
solution(input);