function solution(a, b, c, d) {
    const dices = [a, b, c, d];
    const numFrequency = dices.reduce((acc, cur) => {
        acc[cur] = acc[cur] ?? 0;
        acc[cur]++;
        return acc;
    }, {});

    const valInfo = Object.values(numFrequency);
    const keyInfo = Object.keys(numFrequency).map(Number);

    const countVal = Math.max(...valInfo);
    const uniqueKeys = keyInfo.length;

    if (countVal === 4) {
        return a * 1111;
    } else if (countVal === 3) {
        const [oneKey, threeKey] =
            valInfo.indexOf(1) < valInfo.indexOf(3)
                ? [keyInfo[0], keyInfo[1]]
                : [keyInfo[1], keyInfo[0]];
        return (10 * threeKey + oneKey) ** 2;
    } else if (uniqueKeys === 3) {
        return keyInfo.reduce((acc, cur) => (numFrequency[cur] === 1 ? acc * cur : acc), 1);
    } else if (uniqueKeys === 2) {
        const [key1, key2] = keyInfo;
        return (key1 + key2) * Math.abs(key1 - key2);
    } else {
        return Math.min(a, b, c, d);
    }
}
