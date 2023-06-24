function solution(q, r, code) {
   return [...code].filter((item, idx) => idx % q === r).join('');
}