function solution(keymap, targets) {
  const answer = [];
  const map = new Map();

  for (const key of keymap) {
    for (let i = 0; i < key.length; i++) {
      if (!map.has(key[i]) || i + 1 < map.get(key[i])) {
        map.set(key[i], i + 1);
      }
    }
  }

  for (const target of targets) {
    let count = 0;
    let valid = true;

    for (let i = 0; i < target.length; i++) {
      if (!map.has(target[i])) {
        valid = false;
        break;
      }
      count += map.get(target[i]);
    }

    answer.push(valid ? count : -1);
  }

  return answer;
}
