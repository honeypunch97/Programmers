function solution(my_string, n) {
    let answer = '';
    for(let i=my_string.length-n;i<my_string.length;i++){
        answer=answer+my_string[i]
    }
    return answer;
}