function solution(my_string, queries) {
   for (let i = 0; i < queries.length; i++) {
      const [s, e] = queries[i];
      const sliceStr = my_string.slice(s, e + 1);
      const reverseStr = sliceStr.split('').reverse().join('');
      my_string = my_string.slice(0, s) + reverseStr + my_string.slice(e + 1);
   }
   return my_string;
}