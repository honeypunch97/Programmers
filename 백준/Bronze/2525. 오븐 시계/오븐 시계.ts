const input: string[] = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let [h, m] = input[0].trim().split(' ');
let currentHour = parseInt(h);
let currentMinute = parseInt(m) + parseInt(input[1]);

if (currentMinute >= 60) {
   currentHour += Math.floor(currentMinute / 60);
   currentMinute %= 60;
}
if (currentHour >= 24) {
   currentHour %= 24;
}

console.log(currentHour, currentMinute);
