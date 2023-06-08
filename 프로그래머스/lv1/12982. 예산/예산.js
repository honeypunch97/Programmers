function solution(d, budget) {
    let answer = 0, sum = 0;
    d.sort((a,b) => a - b);
    for(let i = 0; i < d.length; i++){
        sum += d[i]    
       answer = sum <= budget? answer+1:answer
    }
    return answer;
}