function solution(name, yearning, photo) {
    let answer = [];
    let yearningObj = {};
    for(let i=0; i<name.length;i++){
        yearningObj[name[i]] = yearning[i]
    }
    for(let i=0; i<photo.length;i++){
        let resultItem = 0;
        for(let j=0; j<photo[i].length;j++){
            if(yearningObj[photo[i][j]]) resultItem+=yearningObj[photo[i][j]];
        }
        answer.push(resultItem)
    }
    return answer;
}