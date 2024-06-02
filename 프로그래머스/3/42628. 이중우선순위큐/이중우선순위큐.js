function solution(operations) {
    const heap = [];
    
    operations.forEach(operation => {
        const [command, value] = operation.split(' ');
        if (command === 'I') {
            heap.push(Number(value));
        } else if (heap.length > 0) {
            heap.sort((a, b) => a - b);
            if (value === '1') {
                heap.pop();
            } else {
                heap.shift();
            }
        }
    });

    return heap.length ? [Math.max(...heap), Math.min(...heap)] : [0, 0];
}