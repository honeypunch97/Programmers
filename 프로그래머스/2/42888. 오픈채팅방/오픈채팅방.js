function solution(record) {
  const answer = [];
  const userInfo = {};

  for (let i = 0; i < record.length; i++) {
    const [command, uid, nickname] = record[i].split(" ");
    
    if (command === "Enter") {
      userInfo[uid] = nickname;
      answer.push([uid, "님이 들어왔습니다."]);
    } else if (command === "Leave") {
      answer.push([uid, "님이 나갔습니다."]);
    } else if (command === "Change") {
      userInfo[uid] = nickname;
    }
  }

  // answer 배열에 있는 메시지 중 유저 아이디를 최신 닉네임으로 변경
  for (let i = 0; i < answer.length; i++) {
    const [uid, message] = answer[i];
    answer[i] = `${userInfo[uid]}${message}`;
  }

  return answer;
}