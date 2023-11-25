function solution(s) {
  let answer = [];
  let arr = JSON.parse(s.replaceAll("{", "[").replaceAll("}", "]")).sort((a, b) => a.length - b.length);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      answer.push(arr[i][j]);
    }
  }
  answer = [...new Set(answer)];
  return answer;
}