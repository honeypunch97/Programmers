function solution(score) {
 let avgArr = score.map(item=>(item[0]+item[1])/2);
   let sortArr = [...avgArr].sort((a,b)=>b-a);
return avgArr.map(item=>sortArr.indexOf(item)+1)
}