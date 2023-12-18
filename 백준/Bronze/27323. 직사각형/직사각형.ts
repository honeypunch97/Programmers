const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split("\n")
  .map(Number);

const solution = input => {
  const [a, b] = input;
  return a * b;
};
console.log(solution(input));
