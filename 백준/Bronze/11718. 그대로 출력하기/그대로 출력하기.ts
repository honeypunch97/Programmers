const input: string[] = require('fs').readFileSync('/dev/stdin').toString().split('\n');
input.forEach((item: string) => {
   console.log(item.trim());
});

