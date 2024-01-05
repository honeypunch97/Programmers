const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split("\n");

const solution = input => {
  let result;
  const n = new Map();
  input[1].split(" ").map((item, index) => n.set(item.trim(), index));
  result = input[3]
    .split(" ")
    .map(item => (n.has(item.trim()) ? 1 : 0))
    .join(" ");
  return result;
};
console.log(solution(input));