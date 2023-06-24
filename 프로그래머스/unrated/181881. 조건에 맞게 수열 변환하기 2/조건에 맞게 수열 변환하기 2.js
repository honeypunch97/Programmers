function solution(arr) {
   let cnt = 0;
   let prevArr = [];
   let curArr = [...arr];
   while (prevArr.toString() !== curArr.toString()) {
      cnt++;
      prevArr = [...curArr];
      curArr = curArr.map(item =>
         item >= 50 && item % 2 === 0 ? item / 2 : item < 50 && item % 2 === 1 ? item * 2 + 1 : item,
      );
   }
   return cnt - 1;
}
