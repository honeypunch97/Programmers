function solution(board) {
  const n = board.length;
  const dx = [-1, 0, 1, 0, -1, 1, 1, -1];
  const dy = [0, 1, 0, -1, 1, 1, -1, -1];
  let answer = 0;
  
  // 각 좌표를 하나씩 순회
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // 현재 좌표가 지뢰가 아니라면
      if (board[i][j] === 0) {
        let count = 0;
        // 주변 8개 좌표를 확인하여 지뢰가 있는지 확인
        for (let k = 0; k < 8; k++) {
          const nx = i + dx[k];
          const ny = j + dy[k];
          if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
          if (board[nx][ny] === 1) count++;
        }
        // 지뢰가 없다면 안전한 칸으로 간주
        if (count === 0) answer++;
      }
    }
  }
  
  return answer;
}

// 이 코드는 혼자 생각한 코드가 아님. 정답들을 보고 짠코드임 다시풀예정