function solution(n, control) {
    let answer = n;
    control = control.split('');
    control.map(item=>{
        switch(item){
            case 'w':
                answer+=1;
                break;
            case 's':
                answer-=1;
                break;
            case 'd':
                answer+=10;
                break;
            case 'a':
                answer-=10;
                break;
        }
    })
    return answer;
}