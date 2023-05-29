function solution(s) {
    let answer = '';
    let cnt=0;
    s.split('').map(item=>{
        if(item===' '){
            answer += item
                cnt=0
        }else if(cnt%2===0){
            answer += item.toUpperCase()
            cnt++
        }else{
            answer += item.toLowerCase()
            cnt++
        }
    })
    return answer;
}