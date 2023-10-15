const readline = require('readline');
const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
});

let lines = [];

rl.on('line', line => {
   lines.push(line);
});

rl.on('close', () => {
   const currentArr = lines.slice(1).map(item => parseInt(item));
   console.log(currentArr.reduce((acc, cur) => acc + cur) - currentArr.length + 1);
});