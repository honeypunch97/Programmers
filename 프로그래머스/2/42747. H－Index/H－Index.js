function solution(citations) {
  const n = citations.length;
  citations.sort((a, b) => a - b);

  let hIndex = 0;
  for (let i = 0; i < n; i++) {
    if (citations[i] >= n - i) {
      hIndex = n - i;
      break;
    }
  }

  return hIndex;
}