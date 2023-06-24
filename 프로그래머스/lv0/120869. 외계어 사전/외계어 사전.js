function solution(spell, dic) {
   for (let i = 0; i < spell.length; i++) {
      for (let j = 0; j < dic.length; j++) {
         if (dic[j].includes(spell[i])) {
            dic[j] = dic[j].replace(spell[i], '');
         } else {
            dic[j] = dic[j] + 'XX';
         }
      }
   }
   console.log(dic);
   for (let i = 0; i < dic.length; i++) {
      if (dic[i] === '') return 1;
   }
   return 2;
}