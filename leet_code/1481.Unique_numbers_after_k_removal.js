/**
 * https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/?envType=daily-question&envId=2024-02-16
 * 1481. Least Number of Unique Integers after K Removals
 */


function findLeastNumOfUniqueInts(arr, k) {
    const freqMap = new Map();
    arr.forEach(num => {
        if(freqMap.get(num))  {
            freqMap.set(num, freqMap.get(num)+1)
        } else {
            freqMap.set(num, 1)
        }
    })

    // now we want to remove exactly k elems with smallest freq
    let nums = [...freqMap.keys()];
    nums = nums.sort((a, b) => freqMap.get(a) - freqMap.get(b));

    for(let i=0; i<nums.length; i++) {
        if( k <= 0) break;
        let num = nums[i];
        let freq = freqMap.get(num);
        k -= freq;
        if(k >= 0) {
            freqMap.delete(num);
        } else {
            freqMap.set(num, freq - k)
        }
    }
    return freqMap.size;
}

function findLeastNumOfUniqueInts2(arr, k) {
    const freqMap = new Map();
    arr.forEach(num => {
        let newFreq = (freqMap.get(num) ?? 0) + 1
        freqMap.set(num, newFreq)
    })

    // now we want to remove exactly k elems with smallest freq
    let nums = Array.from(freqMap.values()).sort((a, b) => a-b);

    let i=0
    while(k >=0) {
        k -= nums[i];
        if( k >=0 ) {
            i++;
        }
    }
    return nums.length - i;

}

console.log(findLeastNumOfUniqueInts([5,5,4], 1)) // 1
console.log(findLeastNumOfUniqueInts([5,5,4], 2)) // 1
console.log(findLeastNumOfUniqueInts([5,5,4], 3)) // 0
console.log(findLeastNumOfUniqueInts([4,3,1,1,3,3,2], 3))// 2