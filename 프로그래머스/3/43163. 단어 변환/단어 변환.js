function solution(begin, target, words) {
  if (!words.includes(target)) return 0;

  const visited = { [begin]: 0 };
  const queue = [begin];

  while (queue.length) {
    const cur = queue.shift();
    
    if (cur === target) return visited[cur];
    
    for (const word of words) {
      if (!visited[word] && isConnected(cur, word)) {
        visited[word] = visited[cur] + 1;
        queue.push(word);
      }
    }
  }
  
  return 0;
}

const isConnected = (str1, str2) => {
  let count = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) count++;
    if (count > 1) return false;
  }
  return count === 1;
}