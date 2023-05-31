function solution(numbers) {
    let answerArr = [];
    for(let i=0;i<numbers.length;i++){
        for(let j=i+1;j<numbers.length;j++){
            answerArr.push(numbers[i]+numbers[j]);
        }
    }
    
    const answer = [...new Set(answerArr)];
    answer.sort((a,b)=>a-b);
    return answer
}