const input =
  require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString() * 1;

const solution = input => {
  if (input < 0) return -1;
  else if (input == 0) return 1;
  else {
    return input * solution(input - 1);
  }
};
console.log(solution(input));