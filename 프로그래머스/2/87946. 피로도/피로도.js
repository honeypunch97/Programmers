function solution(k, dungeons) {
  let maxCount = 0;

  function explore(count, k) {
    maxCount = Math.max(maxCount, count);
    dungeons.forEach(([required, fatigue], i) => {
      if (k >= required && !dungeons[i].visited) {
        dungeons[i].visited = true;
        explore(count + 1, k - fatigue);
        dungeons[i].visited = false;
      }
    });
  }

  explore(0, k);
  return maxCount;
}