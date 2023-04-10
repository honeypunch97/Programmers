function solution(balls, share) {
  // 조합 계산 함수
  const getCombination = (n, m) => {
    if (n === m || m === 0) return 1;
    return getCombination(n - 1, m - 1) + getCombination(n - 1, m);
  };

  // balls개의 구슬 중 share개를 선택하는 조합의 수 반환
  return getCombination(balls, share);
}