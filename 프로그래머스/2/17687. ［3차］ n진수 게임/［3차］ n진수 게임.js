function solution(n, t, m, p) {
  let str = "";
  for (let i = 0; str.length < m * t; i++) {
    str += i.toString(n).toUpperCase();
  }

  let answer = "";
  for (let i = 0; i < t; i++) {
    answer += str[(i * m) + (p - 1)];
  }
  
  return answer;
}