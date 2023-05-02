function solution(price, money, count) {
    let answer = -1;
    for(let i=1;i<=count;i++){
        money-=price*i
    }
    answer = money<=0?-money:0

    return answer;
}