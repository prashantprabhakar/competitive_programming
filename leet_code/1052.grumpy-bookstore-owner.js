/**
 * https://leetcode.com/problems/grumpy-bookstore-owner/
 * 1052. Grumpy Bookstore Owner
 * Difficulty: Medium
 */


var maxSatisfied = function(customers, grumpy, minutes) {
    if(minutes >= customers.length) {
        return customers.reduce((acc, curr) => acc+curr, 0)
    }

    let alreadySatisfiedCustomers = customers.reduce((acc, curr, i) => grumpy[i] === 0 ? acc+curr : acc, 0);

    // first window
    let windowSize = minutes, windowSum = 0;
    for(let i=0; i<windowSize; i++) {
        if(grumpy[i]) windowSum += customers[i];
    };
    let maxWindowSum = windowSum;
    let windowStart=0, windowEnd = windowStart + windowSize;
    while(windowEnd < customers.length) {
        if(grumpy[windowStart]) windowSum -= customers[windowStart];
        if(grumpy[windowEnd]) windowSum += customers[windowEnd]
        maxWindowSum = Math.max(maxWindowSum, windowSum);
        windowStart++;
        windowEnd++;
    }
    return alreadySatisfiedCustomers + maxWindowSum;
};
// [x,0,x,2,x,1,x,5]

maxSatisfied([1,0,1,2,1,1,7,5], [0,1,0,1,0,1,0,1], 3)