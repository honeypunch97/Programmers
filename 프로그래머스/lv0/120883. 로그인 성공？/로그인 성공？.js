function solution(id_pw, db) {
   let answer = 'fail';
   db.map(item => {
      const [id, pw] = item;
      if (id === id_pw[0] && pw !== id_pw[1]) answer = 'wrong pw';
      if (id === id_pw[0] && pw === id_pw[1]) answer = 'login';
   });
   return answer;
}