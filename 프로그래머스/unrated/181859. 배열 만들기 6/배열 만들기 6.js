function solution(arr) {
    let answer = [];
    for(let i=0;i<arr.length;i++){
        if(answer.length===0){
            answer.push(arr[i]);
        }else if(answer.length!==0&& answer[answer.length-1]===arr[i]){
            answer.pop()
        }else if(answer.length!==0&& answer[answer.length-1]!==arr[i]){
               answer.push(arr[i]);
        }
    }
    if(answer.length===0)return [-1];
    else   return answer;
}