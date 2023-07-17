function solution(rank, attendance) {
   let answer = 0;
   let arr = rank
      .map((item, idx) => attendance[idx] && { idx, rank: item })
      .filter(item => item)
      .sort((a, b) => a.rank - b.rank);
   answer = 10000 * arr[0].idx + 100 * arr[1].idx + arr[2].idx;
   return answer;
}