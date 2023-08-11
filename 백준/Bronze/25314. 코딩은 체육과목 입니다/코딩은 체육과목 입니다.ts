const input: number = parseInt(require('fs').readFileSync('/dev/stdin').toString());
let result: string = 'long '.repeat(input / 4) + 'int';
console.log(result);
