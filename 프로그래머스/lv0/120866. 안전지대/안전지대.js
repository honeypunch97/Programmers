function solution(board) {
  const n = board.length;
  let answer = 0;
  
  // 상하좌우, 대각선까지 모두 체크
  const dx = [-1, 0, 1, 0, -1, 1, 1, -1];
  const dy = [0, 1, 0, -1, 1, 1, -1, -1];
  
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 1) continue; // 지뢰인 경우 skip
      let cnt = 0;
      for (let k = 0; k < 8; k++) {
        const nx = i + dx[k];
        const ny = j + dy[k];
        if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue; // 배열 범위 벗어나는 경우 skip
        if (board[nx][ny] === 1) cnt++; // 주변에 지뢰가 있는 경우 count
      }
      answer += cnt === 0 ? 1 : 0; // 안전한 칸일 경우 answer에 1을 더함
    }
  }
  
  return answer;
}