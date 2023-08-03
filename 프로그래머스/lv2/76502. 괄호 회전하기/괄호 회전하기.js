function solution(s) {
    let answer = 0;
    for (let i = 0; i < s.length; i++) {
        if (isValid(s)) {
            answer++;
        }
        s = s.slice(1) + s[0];
    }
    return answer;

    function isValid(str) {
        const stack = [];
        for (const char of str) {
            if (char === '(' || char === '{' || char === '[') {
                stack.push(char);
            } else {
                const prev = stack.pop();
                if (!(char === ')' && prev === '(') && !(char === '}' && prev === '{') && !(char === ']' && prev === '[')) {
                    return false;
                }
            }
        }
        return stack.length === 0;
    }
}