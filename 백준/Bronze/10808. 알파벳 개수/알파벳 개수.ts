import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8').toString().split('');
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const counts: number[] = new Array(26).fill(0);

input.forEach((i) => {
  const index = alphabet.indexOf(i);
  if (index !== -1) {
    counts[index]++;
  }
});

console.log(counts.join(' '));