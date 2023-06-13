function solution(arr, k) {
    return k%2===1?arr.map(item=>item*k):arr.map(item=>item+k);
}