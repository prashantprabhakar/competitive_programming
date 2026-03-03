/**
 * https://leetcode.com/problems/longest-repeating-character-replacement/description/
 * Difficulty: Medium
 
    You are given a string s and an integer k. 
    You can choose any character of the string and change it to any other uppercase English character. 
    You can perform this operation at most k times.

    Return the length of the longest substring containing the same letter you can get after performing the above operations.


 */


function approach1(s, k) {
    let left = 0, result = 0, freqMap = {}, maxFreq = 0;

    for(let right = 0; right < s.length; right++) {
        let char = s.charAt(right);
        freqMap[char] = (freqMap[char] ?? 0) + 1;
        maxFreq = Math.max(maxFreq, freqMap[char]);

        // window_size - max_frequency_in_window ≤ K -> valid window
        while((right - left + 1 )- maxFreq > k) {
            freq[s[left]]--;
            left++;
        }

        result = Math.max(result, right - left + 1);
    }
    return result;
}


function approach2(s, k) {
    let left = 0, freqMap= {}, maxFreq = 0, result = 0;

    for(let right = 0; right < s.length; right++) {
        // 1. Expand: add right character to window
        let char = s.charAt(right);

        // 2. Update maxFreq — only goes UP (that's intentional)
        freqMap[char] = (freqMap[char] ?? 0) + 1;
        maxFreq = Math.max(maxFreq, freqMap[char]);

        // 3. Check if window is invalid
        //    windowSize - maxFreq = characters we need to replace
        let windowSize = right - left + 1;
        if (windowSize - maxFreq > k) {
            // 4. Slide: shrink left by 1 (window stays same size, just moves)
            //    NOTE: we do NOT update maxFreq here — that's the whole trick
            freq[s[left]] -= 1;
            left++;
        }

        result = Math.max(result, right - left + 1);
    }
    return result;
}