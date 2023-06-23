function solution(my_string, m, c) {
   if (m === 1) return my_string;
   return my_string
      .split('')
      .filter((_, idx) => idx % m === c - 1)
      .join('');
}