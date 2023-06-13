function solution(strArr) {
    return strArr.map((item,idx)=>idx%2===1?item.toUpperCase():item.toLowerCase())
}