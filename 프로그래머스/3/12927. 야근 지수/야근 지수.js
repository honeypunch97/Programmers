function solution(n, works) {
  if (works.reduce((a, b) => a + b) <= n) return 0;

  const maxHeap = new MaxHeap(works);

  while (n > 0) {
    let maxWork = maxHeap.extractMax();
    maxHeap.insert(maxWork - 1);
    n--;
  }

  return maxHeap.arr.reduce((a, b) => a + Math.pow(b, 2), 0);
}

class MaxHeap {
  constructor(data = []) {
    this.arr = [];
    data.forEach(item => this.insert(item));
  }

  insert(value) {
    this.arr.push(value);
    this.bubbleUp(this.arr.length - 1);
  }

  extractMax() {
    if (this.arr.length === 1) return this.arr.pop();
    const max = this.arr[0];
    this.arr[0] = this.arr.pop();
    this.bubbleDown(0);
    return max;
  }

  bubbleUp(index) {
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.arr[index] <= this.arr[parentIndex]) break;
      [this.arr[index], this.arr[parentIndex]] = [this.arr[parentIndex], this.arr[index]];
      index = parentIndex;
    }
  }

  bubbleDown(index) {
    let lastIndex = this.arr.length - 1;
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let swapIndex = index;

      if (leftChildIndex <= lastIndex && this.arr[leftChildIndex] > this.arr[swapIndex]) {
        swapIndex = leftChildIndex;
      }

      if (rightChildIndex <= lastIndex && this.arr[rightChildIndex] > this.arr[swapIndex]) {
        swapIndex = rightChildIndex;
      }

      if (swapIndex === index) break;

      [this.arr[index], this.arr[swapIndex]] = [this.arr[swapIndex], this.arr[index]];
      index = swapIndex;
    }
  }
}
