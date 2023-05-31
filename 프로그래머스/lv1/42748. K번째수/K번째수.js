function solution(array, commands) {
    let answer = [];
    commands.map(item=>{
        let start=item[0];
        let end=item[1];
        let choose=item[2];
        let tempArr=[];
        for(let i=start-1;i<=end-1;i++){
            tempArr.push(array[i]);
        }
        tempArr.sort((a,b)=>a-b);
        answer.push(tempArr[choose-1]);
    })
    return answer;
}