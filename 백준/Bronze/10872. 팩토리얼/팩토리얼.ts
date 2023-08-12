const input: number = parseInt(require('fs').readFileSync('/dev/stdin').toString());

let pacArr: number[] = new Array(input + 1).fill(1);
for (let i: number = 1; i < pacArr.length; i++) {
   if (i === 1) pacArr[i] = 1;
   else pacArr[i] = pacArr[i - 1] * i;
}
console.log(pacArr[input]);
