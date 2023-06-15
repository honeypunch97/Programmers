function solution(n_str) {
    const idx = n_str.split('').findIndex(item=>item!=='0')
    return n_str.slice(idx)
}