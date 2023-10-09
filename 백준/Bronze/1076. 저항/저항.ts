const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input: string[] = fs.readFileSync(filePath).toString().trim().split('\n');

const obj = [
   { name: 'black', value: 0, multi: 1 },
   { name: 'brown', value: 1, multi: 10 },
   { name: 'red', value: 2, multi: 100 },
   { name: 'orange', value: 3, multi: 1000 },
   { name: 'yellow', value: 4, multi: 10000 },
   { name: 'green', value: 5, multi: 100000 },
   { name: 'blue', value: 6, multi: 1000000 },
   { name: 'violet', value: 7, multi: 10000000 },
   { name: 'grey', value: 8, multi: 100000000 },
   { name: 'white', value: 9, multi: 1000000000 },
];

const solution = (input: string[]): void => {
   let temp: string = '';
   for (let i = 0; i < input.length - 1; i++) {
      temp += obj.find(item => item.name === input[i]).value;
   }
   console.log(Number(temp) * obj.find(item => item.name === input[input.length - 1]).multi);
};
solution(input);