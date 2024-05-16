const solution = (input) => {
  const [N, ...dots] = input;
  const points = dots.map((d) => d.split(" ").map(Number));
  const [startX, startY] = points[0];

  const getTri = (a, b) => {
    const [ax, ay] = a;
    const [bx, by] = b;
    return (ax - startX) * (by - startY) - (ay - startY) * (bx - startX);
  };

  let ans = 0;
  for (let i = 2; i < N; i++) {
    ans += getTri(points[i], points[i - 1]);
  }

  return (Math.abs(ans) * 0.5).toFixed(1);
};

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
console.log(solution(input));