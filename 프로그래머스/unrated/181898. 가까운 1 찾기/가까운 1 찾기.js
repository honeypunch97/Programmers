function solution(arr, idx) {
    let result = arr.splice(idx).indexOf(1)
    return result !== -1?result+idx:result
}