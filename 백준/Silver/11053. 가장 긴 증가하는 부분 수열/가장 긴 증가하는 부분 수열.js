var fs = require('fs');
var inputs = fs.readFileSync('/dev/stdin').toString().split('\n');
var cases = Number(inputs[0]);
var inputs = inputs[1].split(' ').map(v=>Number(v));
var dp = new Array(cases).fill(0);
for(var i=0; i<cases; i++){
    var max = 0;
    for(var j=0; j<i; j++){
        if(inputs[i] > inputs[j] && dp[j] > max){
            max = dp[j];
        }
    }
    dp[i] = max + 1;
}
console.log(Math.max(...dp));