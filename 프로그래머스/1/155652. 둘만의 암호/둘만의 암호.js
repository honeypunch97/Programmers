function solution(s, skip, index) {
  let ans = "";
  let skipSet = new Set(skip); // skip 문자열을 Set으로 변환
  const startCharCode = 97; // 'a'의 아스키 코드
  const endCharCode = 122; // 'z'의 아스키 코드
  const range = endCharCode - startCharCode + 1; // 알파벳 범위 26

  for (let char of s) {
    let charCode = char.charCodeAt();
    let steps = 0;

    while (steps < index) {
      charCode++;
      if (charCode > endCharCode) {
        charCode = startCharCode;
      }
      if (!skipSet.has(String.fromCharCode(charCode))) {
        steps++;
      }
    }

    ans += String.fromCharCode(charCode);
  }

  return ans;
}
