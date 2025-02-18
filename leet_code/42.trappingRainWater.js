/**
 * https://leetcode.com/problems/trapping-rain-water/description/
 * 42. Trapping Rain Water
 * difficulty: hard
 */

/**
 * Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
 * Constraints:
        n == height.length
        1 <= n <= 2 * 104
        0 <= height[i] <= 105
 */


/**
    Approach: 
    start with lastHeight eq height[0]
    while height[i] < lastHeight; we keep adding water diff as tempWater
    when height[i] > lastHeight; we have found building b/w which water can be contained. So add tempWater to total, reset tempwater and set lastheight = height[i]

    Result:
    Doesn't work. Fails in case where lastHeight is very heigh like 11, 4, 3, 5, 0 2. Here there is no building taller than 11, so out algo will return result 0.
 */


function trap_notWorking(height) {
    if(height < 3) return 0;
    let tempWater = 0;
    let totalWater = 0;
    let lastHeight = height[0];
    let i=1;

    while(i < height.length) {
        if(height[i] <= lastHeight ) {
            tempWater += (lastHeight - height[i]);
        }
        if(height[i] > lastHeight) {
            totalWater += tempWater;
            tempWater = 0;
            lastHeight = height[i]
        }
        i++;
    }
    return totalWater
}


// Time complexity: O(n), space complexity: O(2n)
function trap(height) {
    if(height < 3) return 0;

    const leftMax = [], rightMax = [];
    const n = height.length;
    let result = 0

    // initialize
    leftMax[0] = 0;
    rightMax[n-1] = 0;


    for(let i=1; i<n; i++) {
        leftMax[i] = Math.max(leftMax[i-1], height[i-1]);
    }

    for(let i=n-2; i>=0; i--) {
        rightMax[i] = Math.max(rightMax[i+1], height[i+1]);
    }

    // first and last heights can not store water, so run loop of 1 to n-2
    for(let i=1; i<n-1; i++) {
        // water can only be stored on top of a height, if there are height towers on left and right side of current tower
        const canWaterTrap = height[i] < leftMax[i] && height[i] < rightMax[i];
        if(!canWaterTrap) continue;
        const waterAboveCurrentHeight = Math.min(leftMax[i], rightMax[i]) - height[i];
        result += waterAboveCurrentHeight;
    }

    return result
   
}




// generate different test cases
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])) // 6
console.log(trap([4,2,0,3,2,5])) // 9
console.log(trap([1,2,3,4,5])) // 0
console.log(trap([5,4,3,2,1])) // 0
console.log(trap([5])) // 0
console.log(trap([5,6])) // 0


