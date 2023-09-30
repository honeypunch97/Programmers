import * as fs from 'fs';

const filePath: string = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';

const input: string[] = fs.readFileSync(filePath, 'utf8').toString().split('\n');
const [N, M]: number[] = input[0].split(' ').map(Number);
const arr: number[] = Array(N)
  .fill(1)
  .map((a, b) => a + b);

for (let i = 1; i <= M; i++) {
  const [x, y]: number[] = input[i].split(' ').map(Number);
  const tmp: number = arr[x - 1];
  arr[x - 1] = arr[y - 1];
  arr[y - 1] = tmp;
}

console.log(arr.join(' '));