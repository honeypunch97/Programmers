const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const [n, ...input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

function solution(V, E, List) {
  const parent = Array.from(new Array(V + 1), (_, idx) => idx);

  List.sort((a, b) => a[2] - b[2]);
  
  let result = 0;
  
  let edges = V - 1;

  function getParent(v) {
    if (parent[v] === v) return v;
    return (parent[v] = getParent(parent[v]));
  }

  function unionParent(v1, v2) {
    v1 = getParent(v1);
    v2 = getParent(v2);
    if (v1 < v2) parent[v2] = v1;
    else parent[v1] = v2;
  }

  function findParent(v1, v2) {
    const p1 = getParent(v1);
    const p2 = getParent(v2);
    return p1 === p2;
  }

  for (let i = 0; i < E; i++) {
    const [v1, v2, c] = List[i];
    
    if (!findParent(v1, v2)) {
      result += c;
      edges--;
      unionParent(v1, v2);
      if (!edges) break;
    }
  }

  return result;
}

const arr = n.split(' ').map(Number);
const answer = solution(
  arr[0],
  arr[1],
  input.map((r) => r.split(' ').map(Number)),
);

console.log(answer);