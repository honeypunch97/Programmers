import * as fs from "fs";

const input: string[] = fs.readFileSync("/dev/stdin", "utf8").toString().split("\n");
const [N, M]: number[] = input[0].split(" ").map((el: string) => +el);

let arr: number[] = new Array(N);

for (let i = 1; i <= M; i++) {
  let [start, end, k]: number[] = input[i].split(" ").map((el: string) => +el);
  for (start; start <= end; start++) {
    arr[start - 1] = k;
  }
}

for (let j = 0; j < arr.length; j++) {
  arr[j] = typeof arr[j] === "undefined" ? 0 : arr[j];
}

console.log(arr.join(" "));