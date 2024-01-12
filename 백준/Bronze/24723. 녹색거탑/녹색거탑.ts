const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString();

const solution = input => {
  return 2 ** Number(input);
};
console.log(solution(input));
