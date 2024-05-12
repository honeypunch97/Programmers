const [length, ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");
let loop;

for (let i = 0; i < input.length; i++) {
  if (!isNaN(parseInt(input[i]))) {
    loop = parseInt(input[i]);
    continue;
  } else {
    const answer = [];
    const set = { length: 0 };
    const setLength = [];
    let finding;
    for (let k = 1; k <= loop; k++) {
      let [name1, name2] = input[i].split(" ");

      if (!set.hasOwnProperty(name1)) {
        set[name1] = {};
        set[name1].self = set.length;
        set[name1].parent = set.length;
        set[set.length] = name1;
        set.length++;
        setLength.push(1);
      }

      if (!set.hasOwnProperty(name2)) {
        set[name2] = {};
        set[name2].self = set.length;
        set[name2].parent = set.length;
        set[set.length] = name2;
        set.length++;
        setLength.push(1);
      }

      function finds(find) {
        if (set[find].self === set[find].parent) {
          return set[find].parent;
        } else {
          return (set[find].parent = finds(set[set[find].parent]));
        }
      }

      function union(a, b) {
        let parentA = finds(a);
        let parentB = finds(b);

        if (parentB < parentA) {
          set[set[parentA]].parent = set[set[parentB]].self;
          setLength[parentB] += setLength[parentA];
          finding = set[set[parentB]].parent;
        } else if (parentA < parentB) {
          set[set[parentB]].parent = set[set[parentA]].self;
          setLength[parentA] += setLength[parentB];
          finding = set[set[parentA]].parent;
        } else {
          finding = set[set[parentA]].parent;
          return;
        }
      }

      union(name1, name2);

      answer.push(setLength[finding]);
      i++;
    }

    console.log(answer.join("\n"));
    i--;
  }
}