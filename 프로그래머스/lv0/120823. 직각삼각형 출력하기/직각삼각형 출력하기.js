const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.on('line', function (line) {
    const num = Number(line);
    for (let i = 1; i <= num; i++) {
        console.log("*".repeat(i));
    }
    rl.close();
});