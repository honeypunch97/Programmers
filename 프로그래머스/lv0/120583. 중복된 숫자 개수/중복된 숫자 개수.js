function solution(array, n) {
    let answer = 0;
    for(let i of array){
        i===n ? answer++ : answer+=0;
    }
    return answer;
}