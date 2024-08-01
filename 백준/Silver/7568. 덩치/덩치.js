const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './data.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
  const N = parseInt(input[0], 10);
  const people = input.slice(1).map((line) => {
    const [weight, height] = line.split(' ').map(Number);
    return { weight, height };
  });

  const ranks = Array(N).fill(1);

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (i !== j) {
        if (people[i].weight < people[j].weight && people[i].height < people[j].height) {
          ranks[i]++;
        }
      }
    }
  }

  console.log(ranks.join(' '));
}

solution(input);