/**
 * https://leetcode.com/problems/arithmetic-subarrays/
 * 1630. Arithmetic Subarrays
 */


function checkArithmeticSubarrays(nums, l, r) {
    let result = [];
    for(let i=0; i<l.length; i++) {
        let arr = nums.slice(l[i], r[i]+1);
        result.push(isArithmatic(arr))
    }
    return result;
}

function isArithmatic(arr) {
    arr.sort((a,b) => a-b);
    if(arr.length === 0 || arr.length === 1) return false;
    const diff = arr[1] - arr[0];
    for(let i=2; i<arr.length; i++) {
        if(arr[i] - arr[i-1] !== diff) return false;
    }
    return true
}


const tests = [
    // { nums: [4,6,5,9,3,7], l: [0,0,2], r: [2,3,5], expected: [true,false,true] }
    // {
    //     nums: [-3,-6,-8,-4,-2,-8,-6,0,0,0,0],
    //     l: [5,4,3,2,4,7,6,1,7],
    //     r: [6,5,6,3,7,10,7,4,10],
    //     expected: [true,true,true,true,false,true,true,true,true]
    // },
    {
        nums: [-3,-6,-8,-4,-2,-8,-6,0,0,0,0],
        l: [4],
        r: [7,],
        expected: [false,]
    }
]

tests.forEach(test => {
    let result = checkArithmeticSubarrays(test.nums, test.l, test.r);
    let isCorrect = true;
    for(let i=0; i<result.length; i++) {
        if(result[i] !== test.expected[i]) {
            isCorrect = false;
            break;
        }
    }
    console.log({ expected: test.expected, result, isCorrect})
})