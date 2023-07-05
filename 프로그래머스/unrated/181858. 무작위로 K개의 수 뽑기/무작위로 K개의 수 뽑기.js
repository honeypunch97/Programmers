function solution(arr, k) {
    let answer = [...new Set(arr)];
    if(answer.length>k){
        answer=answer.slice(0,k)
    }
    if(answer.length<k){
        for(let i=answer.length;i<k;i++){
            answer.push(-1)
        }
    }
    return answer;
}