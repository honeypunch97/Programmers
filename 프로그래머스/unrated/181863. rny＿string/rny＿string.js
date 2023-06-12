function solution(rny_string) {
    let answer = rny_string;
    while(answer.includes('m'))
        answer=answer.replace('m','rn')
    
    return answer;
}