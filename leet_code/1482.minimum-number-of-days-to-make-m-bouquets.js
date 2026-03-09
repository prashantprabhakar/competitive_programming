/**
 * https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/
 * 1482. Minimum Number of Days to Make m Bouquets
 * Difficulty: Medium
 * Tags: Binary Searchnjhu
 */

// TLE
function minDays1(bloomDay, m, k) {
    if(bloomDay.length < m*k) return -1
    let max = bloomDay[0], min = bloomDay[0];
    for(let i=0; i<bloomDay.length; i++) {
        max = Math.max(bloomDay[i], max);
        min = Math.min(bloomDay[i], min);
    }

    for(let i=min; i<=max; i++) {
        if(isPossibleOnDay(bloomDay,i,m,k)) return i
    }
    return -1;
};

function minDays(bloomDay, m, k) {
    if(bloomDay.length < m*k) return -1
    let max = bloomDay[0], min = bloomDay[0];
    for(let i=0; i<bloomDay.length; i++) {
        max = Math.max(bloomDay[i], max);
        min = Math.min(bloomDay[i], min);
    }

    // binary search to find solution b/w min and max;
    let start = min, end =  max, solution = -1
    while(start <= end) {
        let mid = start + Math.floor((end-start)/2);
        if(isPossibleOnDay(bloomDay, mid, m, k)) {
            end = mid-1;
            solution = mid;
        } else {
            start = mid + 1;
        }
    }

    return solution
};

function isPossibleOnDay(bloomDay, day, m, k) {
    let count = 0, bouqetsMade = 0;
    for(let i=0; i<bloomDay.length; i++) {
        if(day >= bloomDay[i]) {
            count++;
            if(count === k) {
                bouqetsMade++;
                count = 0;
            }
        } else {
            count = 0;
        }

        if(bouqetsMade >= m) return true
    }
    return false;
}

console.log(minDays([1,10,3,10,2], 3,1))