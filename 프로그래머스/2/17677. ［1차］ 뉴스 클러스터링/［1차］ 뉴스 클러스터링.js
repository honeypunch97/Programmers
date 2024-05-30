function solution(str1, str2) {
  function explode(text) {
    const result = [];
    for (let i = 0; i < text.length - 1; i++) {
      const node = text.substr(i, 2);
      if (/^[A-Za-z]{2}$/.test(node)) {
        result.push(node.toLowerCase());
      }
    }
    return result;
  }

  const arr1 = explode(str1);
  const arr2 = explode(str2);
  const set = new Set([...arr1, ...arr2]);

  const union = [...set].reduce((sum, item) => 
    sum + Math.max(arr1.filter(x => x === item).length, arr2.filter(x => x === item).length), 0);
  
  const intersection = [...set].reduce((sum, item) => 
    sum + Math.min(arr1.filter(x => x === item).length, arr2.filter(x => x === item).length), 0);

  return union === 0 ? 65536 : Math.floor(intersection / union * 65536);
}