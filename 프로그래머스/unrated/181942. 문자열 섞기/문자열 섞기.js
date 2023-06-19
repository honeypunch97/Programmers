function solution(str1, str2) {
    return str1.split('').map((item,idx)=>item+str2[idx]).join('')
}