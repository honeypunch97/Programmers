function solution(cacheSize, cities) {
  let answer = 0;
  let cache = new Set();
  let order = [];

  for (let city of cities) {
    city = city.toLowerCase();

    if (cache.has(city)) {
      answer += 1;
      order = order.filter(c => c !== city);
      order.push(city);
    } else {
      answer += 5;
      if (cache.size >= cacheSize && cacheSize > 0) {
        const oldest = order.shift();
        cache.delete(oldest);
      }
      if (cacheSize > 0) {
        cache.add(city);
        order.push(city);
      }
    }
  }

  return answer;
}