/**
 * https://leetcode.com/problems/get-equal-substrings-within-budget/description/
 */

function equalSubstring1(s,t, maxCost) {
    let n = s.length;
    const costArr = [...s].map((_, i) => Math.abs(s.charCodeAt(i) - t.charCodeAt(i)));
    console.log(costArr)
    // now we need to find max array length whose sum is less than or equal to max cost using "sliding window"
    let result = 0;
    for(let i=0; i<n ; i++) {
        let tempCost = costArr[i];
        if(tempCost > maxCost) continue;
        for(let j=i+1; j<n; j++) {
            tempCost += costArr[j];
            while(tempCost > maxCost && i < j) {
                tempCost -= costArr[i];
                i++
            }
            result = Math.max(result, j-i+1)
        }
    }

    console.log(result)
    return result
}

function equalSubstring(s,t, maxCost) {
    let n = s.length;
    let result = 0;

    let start = 0;
    let tempCost = 0;
    for(let end=0; end < n; end++) {
        tempCost += Math.abs(s.charCodeAt(end) - t.charCodeAt(end));
        while(tempCost > maxCost) {
            tempCost -= Math.abs(s.charCodeAt(start) - t.charCodeAt(start));
            start++
        }
        result = Math.max(result, end-start+1)
    }

   
    console.log(result)
    return result
}

equalSubstring("abcd", "bcdf", 3) // 3
equalSubstring("abcd", "cdef", 3) // 1
equalSubstring("abcd", "acde", 3) // 4
equalSubstring("abcd", "acde", 0) // 1
equalSubstring("abcd", "cdef", 0) // 0
equalSubstring("pxezla", "loewbi", 25) //4