function solution(arr, queries) {
   let temp = 0;
   queries.map(item => {
      let [i, j] = item;
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
   });
   return arr;
}