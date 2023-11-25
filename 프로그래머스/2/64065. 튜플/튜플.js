function solution(s) {
  const changeToArr = string => {
    let arr = [];
    let tempArr = [];
    let tempNum = "";
    for (let i of string) {
      if (i % 1 === 0) {
        tempNum += i;
      } else if (i === "," && tempNum.length > 0) {
        tempArr.push(parseInt(tempNum));
        tempNum = "";
      } else if (i === "}" && tempNum) {
        tempArr.push(parseInt(tempNum));
        arr.push(tempArr);
        tempArr = [];
        tempNum = "";
      }
    }
    return arr;
  };
  let answer = [];
  let arr = changeToArr(s).sort((a, b) => a.length - b.length);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (!answer.includes(arr[i][j])) {
        answer.push(arr[i][j]);
      }
    }
  }
  return answer;
}