function solution(intStrs, k, s, l) {
   let result = [];
   intStrs.map(item => Number(item.slice(s, s + l)) > k && result.push(Number(item.slice(s, s + l))));
   return result;
}