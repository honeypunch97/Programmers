const input: string[] = require('fs').readFileSync('/dev/stdin').toString()
   .split('\n')
   .map((item: string) => item.trim());

let sum: number = 0;
for (let i = 2; i < input.length; i++) {
   if (input[i]) {
      const [price, num] = input[i].split(' ').map((item: string) => parseInt(item));
      sum += price * num;
   }
}

console.log(parseInt(input[0]) === sum ? 'Yes' : 'No');
