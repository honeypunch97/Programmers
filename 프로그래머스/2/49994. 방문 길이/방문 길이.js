function solution(dirs) {
    const move = { L: [-1, 0], R: [1, 0], U: [0, 1], D: [0, -1] };
    let nowX = 0, nowY = 0;
    const route = new Set();

    for (let dir of dirs) {
        const [dx, dy] = move[dir];
        const nextX = nowX + dx;
        const nextY = nowY + dy;

        if (nextX > 5 || nextX < -5 || nextY > 5 || nextY < -5) continue;

        route.add(`${nowX},${nowY},${nextX},${nextY}`);
        route.add(`${nextX},${nextY},${nowX},${nowY}`);

        nowX = nextX;
        nowY = nextY;
    }

    return route.size / 2;
}