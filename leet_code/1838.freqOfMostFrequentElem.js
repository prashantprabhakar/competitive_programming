/**
 * https://leetcode.com/problems/frequency-of-the-most-frequent-element/description/
 * 1838. Frequency of the Most Frequent Element
 */

function maxFrequency2(nums, k) {
    const freqMap = nums.reduce((map, num) => {
        if(map[num]) map[[num]]++;
        else map[num] = 1;
        return map;
    }, {});

    let result = 0;
    // O(n^2)
    for(let i=0; i<nums.length; i++) {
        let remainingOps = k;
        let localResult= freqMap[nums[i]]
        for(let j=0; j<nums.length; j++) {
            if(remainingOps <= 0) break;
            // we have already counted current number in result
            if(nums[i] === nums[j]) continue; 
            let diff = nums[i] - nums[j];
            if(diff < 0 || diff > remainingOps) continue;
            remainingOps -= diff;
            localResult++;
        }
        result = Math.max(result, localResult);
    }
    return result;
}

// Time limit exceeded
function maxFrequency3(nums, k) {
    let result = 0;
    nums = nums.sort((a,b ) => b-a);
    // O(n^2)
    for(let i=0; i<nums.length; i++) {
        let localResult = 0;
        let remainingOps = k;
        for(let j=i; j<nums.length; j++) {
            const diff = nums[i] - nums[j];
            if(remainingOps < diff) break;
            remainingOps -= diff;
            localResult++;
        }
        console.log({ num: nums[i], localResult})
        result = Math.max(result, localResult);
    }
    return result;
}

function maxFrequency4(nums, k) {
    let result = 0;
    let arr = [... new Set(nums)]
    arr.sort((a,b) => b-a);
    const freqMap = nums.reduce((map, num) => {
        if(map[num]) map[[num]]++;
        else map[num] = 1;
        return map;
    }, {});


    for(let i=0; i<arr.length; i++) {
        let localResult = 0;
        let remainingOps = k;

        for(let j=i; j<arr.length; j++) {
            const diff = arr[i] - arr[j];
            const totalFreq = freqMap[arr[j]];
            const maxFreqWeCanTake = Math.floor(remainingOps / diff);
            const freqTaken = Math.min(maxFreqWeCanTake, totalFreq); // 1
            const opsConsumed = freqTaken * diff;
            // freq -> 3, remainingOps -> 5, diff = 2
            if(remainingOps < opsConsumed) break;
            remainingOps -= opsConsumed;
            localResult +=  freqTaken;
        }
        result = Math.max(result, localResult);
    }
    return result;
}

// works -> final solution
function maxFrequency5(nums, k) {
    let maxFrequency = 0; // Initialize the maximum frequency
    let currentSum = 0; // Initialize the current sum of the subarray

    nums.sort((a, b) => a - b); // Sort the array in ascending order

    for (let left = 0, right = 0; right < nums.length; ++right) {
        currentSum += nums[right]; // Include the current element in the subarray sum

        // Check if the current subarray violates the condition (sum + k < nums[right] * length)
        while (currentSum + k < nums[right] * (right - left + 1)) {
            currentSum -= nums[left]; // Adjust the subarray sum by removing the leftmost element
            left++; // Move the left pointer to the right
        }

        // Update the maximum frequency based on the current subarray length
        maxFrequency = Math.max(maxFrequency, right - left + 1);
    }

    return maxFrequency;
}

// 3 -> 3, 6 -> 1, 9 -> 1 | 
// 9, 6, 3

const tests = [
    { input: [[1,2,4], 5], expected: 3},
    { input: [[1,4,8,13], 5], expected: 2},
    { input: [[3,9,6], 2], expected: 1},
    { input: [[3,9,6,3,3], 2], expected: 3},
    { input: [[3,9,6,3,3], 5], expected: 3},
    { input: [[40,95,44,37,41,52, 7,52,87,64,40,14,41,33,12,34,80,  7,80,44,10,500000], 7925], expected: 21 },
    { input: [[40,95,44,37,41,52, 7,52,87,64,40,14,41,33,12,34,80,  7,80,44,10,500000], 20], expected: 6 },


]   

tests.forEach(({input, expected}) => {
    console.log({ expected, actual: maxFrequency4(input[0], input[1])})
})

