/**
 * 🔷 Problem: Longest Substring with At Most K Distinct Characters

    (LeetCode 340)

    Problem

    Given a string s and integer k,
    return the length of the longest substring that contains at most k distinct characters.
    */

/**
 * window_size - max_frequency_in_window ≤ K

 */


function longestSubStrWithAtmostKDinstinct(str, k) {

    let left = 0;
    let distinctCount = 0;
    let freqMap = {};
    let result = 0;

    for(let right = 0; right < str.length; right++) {
        let char = str.charAt(right);
        freqMap[char] = (freqMap[char] ?? 0) + 1;

        if(freqMap[char] === 1) distinctCount++;

        // shrink widnow
        while(distinctCount > k) {
            const leftChar = str[left];
            freqMap[leftChar]--;
            if(freqMap[leftChar] === 0) distinctCount--;
            left++;
        }

        result = Math.max(result, right - left + 1);

    }
    return result;
}




