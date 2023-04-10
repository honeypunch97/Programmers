function solution(emergency) {
  let sortedEmergency = emergency.slice().sort((a, b) => b - a);
  let answer = [];

  for (let i = 0; i < emergency.length; i++) {
    answer.push(sortedEmergency.indexOf(emergency[i]) + 1);
  }

  return answer;
}