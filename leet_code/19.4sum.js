/**
 * https://leetcode.com/problems/4sum/description/
 * 4Sum
 * Difficulty: medium
 * Tags: Array, Two Pointers
 */

/**
 * Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:
 * 0 <= a, b, c, d < n
 * a, b, c, and d are distinct.
 * nums[a] + nums[b] + nums[c] + nums[d] == target
 * You may return the answer in any order.
 */

// Attempt1

// Complexity: O(n^3)
function fourSum1(nums, target) {
    let freqMap = {};
    const resultMap = {};
    nums.forEach(num => {
        freqMap[num] = freqMap[num] ? freqMap[num] + 1 : 1;
    });

    for(let i=0; i<nums.length-3; i++) {
        freqMap[nums[i]]--;
        for(let j=i+1; j< nums.length-2; j++) {
            freqMap[nums[j]]--;
            let remaining = target - nums[i] - nums[j];
            let twoSumResult = twoSum(remaining, freqMap);
            if(twoSumResult.length) {
                twoSumResult.forEach(twoSumRes => {
                    let sorted = [nums[i], nums[j], twoSumRes[0], twoSumRes[1]].sort((a, b) => a-b);
                    resultMap[sorted.join('-')] = sorted;
                });

            }
            freqMap[nums[j]]++;

        }
        freqMap[nums[i]]++;
    }
    return Object.values(resultMap);

}


function twoSum1(target, freqMap) {
    let resultMap = {};
    let uniqueNums = Object.keys(freqMap).map(Number).filter(num => freqMap[num] > 0);
    for(let i=0; i<uniqueNums.length; i++) {
        freqMap[uniqueNums[i]]--;
        let required = target - uniqueNums[i];
        if(freqMap[required]) {
            let smaller = Math.min(uniqueNums[i], required);
            let larger = Math.max(uniqueNums[i], required);
            if(!resultMap[`${smaller}-${larger}`]) {
                resultMap[`${smaller}-${larger}`] = [smaller, larger];
            }
        }
        freqMap[uniqueNums[i]]++;
    }
    return Object.values(resultMap);
}


// Attempt2 - 288 / 294 testcases passed
function fourSum2(nums, target) {

    nums.sort((a, b) => a-b);
    const pairs = new Map();
    for(let i=0; i<nums.length; i++) {
        for(let j=i+1; j<nums.length; j++) {
            let sum = nums[i] + nums[j];
            if(pairs.has(sum)) {
                pairs.get(sum).push([i, j]);
            } else {
                pairs.set(sum, [[i, j]]);
            }
        }
    }

    const resultObj = {};
    for(let i=0; i<nums.length; i++) {
        for(let j= i+1; j< nums.length; j++) {
            let remaining = target - nums[i] - nums[j];
            if(!pairs.has(remaining)) {
                continue;
            }
            let pairList = pairs.get(remaining);
            for(const pair of pairList) {
                const [ k, l ] = pair;
                // note that j is already greater than i, and  l is already greater than k
                if(k > j) {
                    const sorted = [nums[i], nums[j], nums[k], nums[l]].sort((a, b) => a-b);
                    resultObj[sorted.join('-')] = sorted;
                }
            }
        }
    }
    return Object.values(resultObj);
}



// Attempt3 - 288 / 294 testcases passed
function fourSum3(nums, target) {
    nums.sort((a, b) => a-b);
    const pairs = new Map();
    for(let i=0; i<nums.length; i++) {
        for(let j=i+1; j<nums.length; j++) {
            let sum = nums[i] + nums[j];
            if(pairs.has(sum)) {
                pairs.get(sum).push([i, j]);
            } else {
                pairs.set(sum, [[i, j]]);
            }
        }
    }

    const resultObj = {};
    for(const [pairSum, pair] of pairs) {
        const remaining = target - pairSum;
        if(!pairs.has(remaining)) {
            continue;
        }
        const remainingPairs = pairs.get(remaining);
        // check special case of paisSum and reaming are same
        if(pairSum === remaining && remainingPairs.length === 1 && pair.length === 1) {
            continue;
        }
        for(const [i, j] of pair) {
            for(const [k, l] of remainingPairs) {
                if(j < k) {
                    const sorted = [nums[i], nums[j], nums[k], nums[l]].sort((a, b) => a-b);
                    resultObj[sorted.join('-')] = sorted;
                }
            }
        }

    }

    return Object.values(resultObj);
}

// Attempt4 - Try solving when same digit occurs multiple times - works :)
function fourSum(nums, target) {

    nums.sort((a, b) => a-b);
    const pairs = new Map();
    for(let i=0; i<nums.length; i++) {
        for(let j=i+1; j<nums.length; j++) {
            let sum = nums[i] + nums[j];
            if(pairs.has(sum)) {
                pairs.get(sum).push([i, j]);
            } else {
                pairs.set(sum, [[i, j]]);
            }
        }
    }

    const resultObj = {};
    for(let i=0; i<nums.length; i++) {
        // if we have already considered this number, that means it's pairs are already considered, so skip
        if(i > 0 && nums[i] === nums[i-1]) continue;
        for(let j= i+1; j< nums.length; j++) {
            // if we have already considered this number, that means it's pairs are already considered, so skip
            if(j > i+1 && nums[j] === nums[j-1]) continue;
            let remaining = target - nums[i] - nums[j];
            if(!pairs.has(remaining)) {
                continue;
            }
            let pairList = pairs.get(remaining);
            for(const pair of pairList) {
                const [ k, l ] = pair;
                // note that j is already greater than i, and  l is already greater than k
                if(k > j) {
                    const sorted = [nums[i], nums[j], nums[k], nums[l]].sort((a, b) => a-b);
                    resultObj[sorted.join('-')] = sorted;
                }
            }
        }
    }
    return Object.values(resultObj);
}

console.log(fourSum([1,0,-1,0,-2,2], 0)) // [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
console.log(fourSum([2,2,2,2,2], 8)) // [[2,2,2,2]]
console.log(fourSum([2,2,2,2,2], 9)) // []
console.log(fourSum([2,2,2,2,2,2,2,2,2], 8)) // [[2,2,2,2]]
console.log(fourSum([2,2,2,2,3,3,3,3,5,3,6], 12)) // [ [ 2, 2, 2, 6 ], [ 2, 2, 3, 5 ], [ 3, 3, 3, 3 ] ]

// expected: [[2,2,2,2]]
console.log(fourSum([2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2], 8));

// expected: [[-79583480,-70078020,-65863359,-21202664],[-76072023,-59608044,-58094433,-42953023]]
console.log(fourSum([91277418,66271374,38763793,4092006,11415077,60468277,1122637,72398035,-62267800,22082642,60359529,-16540633,92671879,-64462734,-55855043,-40899846,88007957,-57387813,-49552230,-96789394,18318594,-3246760,-44346548,-21370279,42493875,25185969,83216261,-70078020,-53687927,-76072023,-65863359,-61708176,-29175835,85675811,-80575807,-92211746,44755622,-23368379,23619674,-749263,-40707953,-68966953,72694581,-52328726,-78618474,40958224,-2921736,-55902268,-74278762,63342010,29076029,58781716,56045007,-67966567,-79405127,-45778231,-47167435,1586413,-58822903,-51277270,87348634,-86955956,-47418266,74884315,-36952674,-29067969,-98812826,-44893101,-22516153,-34522513,34091871,-79583480,47562301,6154068,87601405,-48859327,-2183204,17736781,31189878,-23814871,-35880166,39204002,93248899,-42067196,-49473145,-75235452,-61923200,64824322,-88505198,20903451,-80926102,56089387,-58094433,37743524,-71480010,-14975982,19473982,47085913,-90793462,-33520678,70775566,-76347995,-16091435,94700640,17183454,85735982,90399615,-86251609,-68167910,-95327478,90586275,-99524469,16999817,27815883,-88279865,53092631,75125438,44270568,-23129316,-846252,-59608044,90938699,80923976,3534451,6218186,41256179,-9165388,-11897463,92423776,-38991231,-6082654,92275443,74040861,77457712,-80549965,-42515693,69918944,-95198414,15677446,-52451179,-50111167,-23732840,39520751,-90474508,-27860023,65164540,26582346,-20183515,99018741,-2826130,-28461563,-24759460,-83828963,-1739800,71207113,26434787,52931083,-33111208,38314304,-29429107,-5567826,-5149750,9582750,85289753,75490866,-93202942,-85974081,7365682,-42953023,21825824,68329208,-87994788,3460985,18744871,-49724457,-12982362,-47800372,39958829,-95981751,-71017359,-18397211,27941418,-34699076,74174334,96928957,44328607,49293516,-39034828,5945763,-47046163,10986423,63478877,30677010,-21202664,-86235407,3164123,8956697,-9003909,-18929014,-73824245], -236727523))