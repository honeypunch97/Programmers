function solution(my_string, indices) {
   let result = my_string.split('');
   indices = indices.sort((a, b) => b - a);
   indices.map(item => (result[item] = ''));
   return result.join('');
}