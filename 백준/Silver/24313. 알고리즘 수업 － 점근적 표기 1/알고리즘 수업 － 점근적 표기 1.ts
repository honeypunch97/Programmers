const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [a, b] = input[0].split(" ").map(Number)
const c = +input[1]
const n0 = +input[2]

console.log(+(b <= (c-a) * n0 && c>=a))