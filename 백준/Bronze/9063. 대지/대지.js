const input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n")
const ballCount = Number(input.shift())

let minX = Number.MAX_SAFE_INTEGER
let maxX = Number.MIN_SAFE_INTEGER
let minY = Number.MAX_SAFE_INTEGER
let maxY = Number.MIN_SAFE_INTEGER

input.forEach(line => {
    const [x, y] = line.split(" ").map(a => Number(a))

    if(x < minX) minX = x
    if(x > maxX) maxX = x
    if(y < minY) minY = y
    if(y > maxY) maxY = y
})

const width = maxX - minX
const height = maxY - minY

const squareArea = width * height

console.log(squareArea)