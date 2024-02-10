
/**
 * https://leetcode.com/problems/set-mismatch/description/?envType=daily-question&envId=2024-01-22
 */


function findErrorNums(nums) {
    const freqMap = {};
    const l = nums.length;
    const expectedSum = (l * (l+1))/2;
    let sum = 0;
    let isDuplicateFound = false;
    let result = [];

   nums.forEach(num => {
        sum += num;
        if(!isDuplicateFound) {
            if(freqMap[num]) {
                isDuplicateFound = true;
                result[0] = num
            } else {
                freqMap[num] = true;
            }
        }
   });
   result[1] = result[0] + (expectedSum - sum) // 21 19
   return result;
}

const inputs = [
    { nums: [1,2,2,4], expected: [2,3]},
    { nums: [1,1], expected: [1, 2]}
]

inputs.forEach(({nums, expected}) => {
    const actual = findErrorNums(nums) ;
    console.log({ actual, expected})
})