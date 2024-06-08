function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    const dir = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    const visited = Array.from(Array(n), () => Array(m).fill(false));
    
    const bfs = () => {
        const queue = [[0, 0, 1]];
        let front = 0;
        visited[0][0] = true;

        while (front < queue.length) {
            const [row, col, distance] = queue[front++];

            if (row === n - 1 && col === m - 1) {
                return distance;
            }

            for (const [r, c] of dir) {
                const newRow = row + r;
                const newCol = col + c;

                if (newRow >= 0 && newRow < n && newCol >= 0 && newCol < m && maps[newRow][newCol] === 1 && !visited[newRow][newCol]) {
                    queue.push([newRow, newCol, distance + 1]);
                    visited[newRow][newCol] = true;
                }
            }
        }
        return -1;
    };

    return bfs();
}