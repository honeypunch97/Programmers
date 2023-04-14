function solution(dots) {
   let answer = 0;
   let xMin = 999;
   let xMax = -999;
   let yMin = 999;
   let yMax = -999;

   for (let i of dots) {
      xMin = xMin > i[0] ? i[0] : xMin;
      xMax = xMax < i[0] ? i[0] : xMax;
      yMin = yMin > i[1] ? i[1] : yMin;
      yMax = yMax < i[1] ? i[1] : yMax;
   }
   answer = (xMax - xMin) * (yMax - yMin);
   return answer;
}