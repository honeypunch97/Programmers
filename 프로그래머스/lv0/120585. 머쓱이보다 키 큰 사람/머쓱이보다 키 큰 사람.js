function solution(array, height) {
    let answer = array.filter(item=>item>height);
    answer=answer.length;
    return answer;
}