const readline = require('readline');
const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
});

let input: number = 0;

rl.on('line', line => {
   input = parseInt(line);
});

rl.on('close', () => {
   for (let i = 0; i < input; i++) {
      console.log(`${' '.repeat(i)}${'*'.repeat(input - i)}`);
   }
});