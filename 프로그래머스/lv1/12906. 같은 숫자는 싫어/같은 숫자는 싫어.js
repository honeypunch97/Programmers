function solution(arr)
{
    let answer = [];
    let tempNum=null;
    arr.map(item=>{
       if(tempNum!==item){
           answer.push(item);
           tempNum=item;
       }
    })
    
    return answer;
}