const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input: number[] = fs
   .readFileSync(filePath)
   .toString()
   .trim()
   .split('\n')
   .map((item: string) => Number(item));

const solution = (input: number[]): void => {
   //  tempA : 원래 고기 온도
   //  tempB : 목표 온도
   //  timeC : 얼어 있는 고기 1도씨를 데우는데 걸리는 시간
   //  timeD :  얼어 있는 고기를 해동하는데 걸리는 시간
   //  timeE : 얼어 있지 않은 고기 1도씨를 데우는데 걸리는 시간
   const [tempA, tempB, timeC, timeD, timeE] = input;

   // sec : 걸리는 시간
   // curTemp : 현재 고기 온도
   let sec: number = 0;
   let curTemp: number = tempA;

   if (tempA < 0) {
      sec += -curTemp * timeC;
      curTemp = 0;
   }
   if (curTemp === 0) sec += timeD;
   if (curTemp < tempB) sec += (tempB - curTemp) * timeE;

   console.log(sec);
};
solution(input);