const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const data = input.map(Number);

class Node {
  constructor(v) {
    this.value = v;
    this.left = null;
    this.right = null;
  }
  insert(v) {
    if (v < this.value) {
      if (!this.left) this.left = new Node(v);
      else this.left.insert(v);
    } else {
      if (!this.right) this.right = new Node(v);
      else this.right.insert(v);
    }
  }
}

const postOrder = (node) => {
  node.left && postOrder(node.left);
  node.right && postOrder(node.right);
  console.log(node.value);
};

const solution = (data) => {
  const root = new Node(data[0]);
  for (let i = 1; i < data.length; i++) {
    root.insert(data[i]);
  }
  postOrder(root);
};

solution(data);