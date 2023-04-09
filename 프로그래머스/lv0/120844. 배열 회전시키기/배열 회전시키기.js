function solution(numbers, direction) {
   if (direction === 'right') {
      let temp = numbers[numbers.length - 1];
      numbers.pop();
      numbers.unshift(temp);
   } else {
      let temp = numbers[0];
      numbers.shift();
      numbers.push(temp);
   }
   return numbers;
}