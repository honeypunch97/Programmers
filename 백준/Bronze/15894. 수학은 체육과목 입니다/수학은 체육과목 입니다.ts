const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString();

const solution = input => {
  return Number(input) * 4;
};
console.log(solution(input));