function solution(answers) {
    const person1 = [1, 2, 3, 4, 5];
    const person2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const person3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    const scores = [0, 0, 0];

    answers.forEach((answer, index) => {
        if (answer === person1[index % 5]) scores[0]++;
        if (answer === person2[index % 8]) scores[1]++;
        if (answer === person3[index % 10]) scores[2]++;
    });

    const maxScore = Math.max(...scores);
    const answer = scores.reduce((acc, score, index) => {
        if (score === maxScore) acc.push(index + 1);
        return acc;
    }, []);

    return answer;
}