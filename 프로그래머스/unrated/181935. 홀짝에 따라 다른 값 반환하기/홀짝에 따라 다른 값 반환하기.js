function solution(n) {
    let answer=0;
    if(n%2===1){    
        for(let i=1;i<=n;i++){
            i%2===1?answer+=i:answer;
        }
        return answer
    }else{
        for(let i=1;i<=n;i++){
            i%2===0?answer+=i*i:answer;
        }
        return answer
    }
}