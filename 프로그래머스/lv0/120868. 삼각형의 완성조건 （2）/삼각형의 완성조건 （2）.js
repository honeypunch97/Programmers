function solution(sides) {
  const [a, b] = sides.sort((x, y) => x - y);
  const diff = b - a;
  const max = b + a - 1;
  let count = 0;

  for (let i = diff + 1; i < max; i++) {
    count++;
  }

  return count+1;
}