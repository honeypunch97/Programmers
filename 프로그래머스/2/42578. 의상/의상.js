function solution(clothes) {
    let answer = 1;
    let clothesMap = new Map();
    
    for(let i = 0; i < clothes.length; i++){
        if(clothesMap.has(clothes[i][1]))
            clothesMap.set(clothes[i][1], clothesMap.get(clothes[i][1])+1);
        else
            clothesMap.set(clothes[i][1], 1);
    }
    
    for(let value of clothesMap.values()){
        answer *= (value+1);
    }
    
    return answer-1;
}