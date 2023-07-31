function solution(k, tangerine) {
    let answer = 0, sum = 0, sizeKind=0;
    const tanObj = {};
    tangerine.forEach((n) => {tanObj[n] = ++tanObj[n] || 1;});
    sizeKind = Object.values(tanObj).sort((a, b) => b - a);
    for (let num of sizeKind) {
        answer++;
        sum += num;
        if (sum >= k) break;
    }
    return answer;
}