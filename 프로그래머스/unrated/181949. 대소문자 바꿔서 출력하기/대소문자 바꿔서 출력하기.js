const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    let answer=[]
    let arr = str.split('')
    for(let i=0;i<arr.length;i++){
        if(arr[i]===arr[i].toUpperCase()) answer.push(arr[i].toLowerCase());
        else answer.push(arr[i].toUpperCase());
    }
    answer = answer.join('');
    console.log(answer);
});