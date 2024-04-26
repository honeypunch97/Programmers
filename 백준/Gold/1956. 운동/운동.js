const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n").map(str => str.split(' ').map(Number));
const [N, _] = input.shift();

let answer = Infinity;

const cost = Array.from(Array(N), () => Array(N).fill(Infinity));

input.forEach((v, i) => {
  const [s, e, c] = v; //start end cost
  cost[s - 1][e - 1] = c
})
for (let mid = 0; mid < N; mid++) {//거쳐가는 지점.
  for (let start = 0; start < N; start++) {
    for (let end = 0; end < N; end++) {
      if (cost[start][mid] + cost[mid][end] < cost[start][end]) {
        cost[start][end] = cost[start][mid] + cost[mid][end];
      }
    }
  }
}


for (let start = 0; start < N; start++) {
  for (let end = 0; end < N; end++) {
    if (start == end) continue;
    if (cost[start][end] != Infinity && cost[end][start] != Infinity) {
      answer = Math.min(cost[start][end] + cost[end][start], answer)
    }
  }
}

if (answer == Infinity) console.log(-1);
else console.log(answer);