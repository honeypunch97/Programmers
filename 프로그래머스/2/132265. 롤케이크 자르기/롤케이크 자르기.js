function solution(topping) {
    let answer = 0;
    const n = topping.length;
    const leftCount = new Map();
    const rightCount = new Map();
    
    // Initialize rightCount with all toppings
    for (let i = 0; i < n; i++) {
        rightCount.set(topping[i], (rightCount.get(topping[i]) || 0) + 1);
    }

    let uniqueLeft = 0;
    let uniqueRight = rightCount.size;
    
    // Traverse the array and update the counts
    for (let i = 0; i < n; i++) {
        const currentTopping = topping[i];
        
        // Update leftCount
        if (!leftCount.has(currentTopping)) {
            leftCount.set(currentTopping, 1);
            uniqueLeft++;
        } else {
            leftCount.set(currentTopping, leftCount.get(currentTopping) + 1);
        }
        
        // Update rightCount
        if (rightCount.has(currentTopping)) {
            if (rightCount.get(currentTopping) === 1) {
                rightCount.delete(currentTopping);
                uniqueRight--;
            } else {
                rightCount.set(currentTopping, rightCount.get(currentTopping) - 1);
            }
        }
        
        // Compare unique counts
        if (uniqueLeft === uniqueRight) {
            answer++;
        }
    }

    return answer;
}
