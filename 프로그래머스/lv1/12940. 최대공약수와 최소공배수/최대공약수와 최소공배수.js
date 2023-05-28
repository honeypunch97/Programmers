function solution(n, m) {
    const gcd=(a,b)=>{
        return b===0?a:gcd(b,a%b);
    }
    let answer = [];
    let maxNum=null,minNum=null;
    let lcdNum=0,gcdNum=0;
    if(n>=m){
        maxNum=n;
        minNum=m;
    }else{
         maxNum=m;
        minNum=n;
    }
    gcdNum=gcd(maxNum,minNum);
    lcdNum=maxNum*minNum/gcdNum;
    answer=[gcdNum,lcdNum];
    return answer;
}