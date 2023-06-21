function solution(arr, intervals) {
    return intervals.reduce((acc,cur)=>acc.concat(arr.slice(cur[0],cur[1]+1)),[])
}