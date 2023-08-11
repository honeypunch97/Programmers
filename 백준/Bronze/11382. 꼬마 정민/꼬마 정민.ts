const input: string[] = require('fs').readFileSync('/dev/stdin').toString().split(' ');
const result: number = input.reduce((acc, cur) => acc + parseInt(cur), 0);
console.log(result);
