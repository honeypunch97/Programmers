const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');


const [N, M] = input.shift().split(' ').map(Number);
const map = input.map((row) => row.split('').map(Number));


function bfs(x,y) {
    const queue = [[x,y]];
    const result = [];
    const visisted = { };
    visisted[[x,y]] = 1;
    let dx = [0, 0, -1, 1];
    let dy = [-1, 1, 0, 0];
	// vistied를 몇번째 방문했는지 판단하는 객체로 활용한다.
    while(queue.length) {
        for(let i=0; i<queue.length; i++) {
            let coord = queue.shift();
            result.push(coord);
            for(let j=0; j<4; j++) {
                let nx = coord[0] + dx[j];
                let ny = coord[1] + dy[j];

                if( nx >= 0 &&
                    ny >= 0 &&
                    nx < N &&
                    ny < M &&
                    !visisted[[nx,ny]] &&
                    map[nx][ny] === 1) {
                        visisted[[nx,ny]] = visisted[coord]+1;
                  // 해당 좌표에 도달할때마다 visited 객체값을 증가시켜준다.
                        queue.push([nx,ny]);
                    }
            }
        }
    }
    return visisted[[N-1,M-1]];
  // N, M 좌표에 도달했을 때 visited객체에 담겨져 있는 값을 리턴한다.
}

console.log(bfs(0,0));