let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
let num = Number(input[0]);

function isHansu(number) {
    let digits = String(number).split('').map(Number);
    let diff = digits[1] - digits[0];
    for (let i = 2; i < digits.length; i++) {
        if (digits[i] - digits[i - 1] !== diff) {
            return false;
        }
    }
    return true;
}

function solution(num) {
    let count = 0;
    for (let i = 1; i <= num; i++) {
        if (i < 100 || (i < 1000 && isHansu(i))) {
            count++;
        }
    }
    return count;
}

console.log(solution(num));