function solution(n, computers) {
    let answer = 0;
    const visited = new Set();
    
    const dfs = (node) => {
        const stack = [node];
        while (stack.length > 0) {
            const current = stack.pop();
            if (!visited.has(current)) {
                visited.add(current);
                for (let i = 0; i < n; i++) {
                    if (computers[current][i] === 1 && !visited.has(i)) {
                        stack.push(i);
                    }
                }
            }
        }
    };
    
    for (let i = 0; i < n; i++) {
        if (!visited.has(i)) {
            dfs(i);
            answer++;
        }
    }
    
    return answer;
}