const input: string = require('fs').readFileSync('/dev/stdin').toString();

let result: string = '';
for (let i: number = 0; i < input.length; i++) {
   result += input[i] === input[i].toUpperCase() ? input[i].toLowerCase() : input[i].toUpperCase();
}
console.log(result);
