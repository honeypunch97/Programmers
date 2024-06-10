function solution(msg) {
  const dictionary = {};
  const answer = [];
  let index = 1;

  for (let i = 0; i < 26; i++) {
    dictionary[String.fromCharCode(65 + i)] = index++;
  }

  let before = "";

  for (let i = 0; i < msg.length; i++) {
    before += msg[i];

    if (!dictionary[before]) {
      answer.push(dictionary[before.slice(0, -1)]);
      dictionary[before] = index++;
      before = msg[i];
    }
  }

  if (before) answer.push(dictionary[before]);

  return answer;
}