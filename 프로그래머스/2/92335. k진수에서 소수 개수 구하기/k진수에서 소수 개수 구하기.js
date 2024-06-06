function isPrimeNumber(number) {
  if (number <= 1) return false;
  if (number <= 3) return true;
  if (number % 2 === 0 || number % 3 === 0) return false;
  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) return false;
  }
  return true;
}

function solution(n, k) {
  let answer = 0;
  let num = n.toString(k);
  let numArr = num.split('0');

  numArr.forEach(str => {
    if (str) {
      let number = parseInt(str, 10);
      if (isPrimeNumber(number)) {
        answer++;
      }
    }
  });

  return answer;
}