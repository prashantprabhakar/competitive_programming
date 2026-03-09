/**
 * https://leetcode.com/problems/string-compression-ii/description/
 * Difficuluty: hard
 */


function getLengthOfOptimalCompression_myApprach_notAlwaysworking(s, k) {
    let countMap = {};
    let str = compressString(s, countMap);

    function recursion(index, remainingK, str, minSize, countMap) {
        console.log(`str`, str, 'minsize', minSize)
        // base conditions
        if (remainingK <= 0) {
            return minSize;
        }

      
        if (index >= str.length) {
            return minSize;
        }

        if (countMap[index] === undefined) {
            return recursion(index + 1, remainingK, str, minSize, countMap);
        }

        // Options1: Keep the char
        const keep = recursion(index + 1, remainingK, str, minSize, countMap);

        // Option2: delete char
        let count = countMap[index];
        let countLen = String(count).length;
        // now we have many options, if countLen is 2, we can reduce it to 1 or 0, and it's 1 we can reduce it to 0 -> a22 can be a9 or a or '' .....
        if (count === 1) {
            const del = recursion(index + 1, remainingK - 1, str, minSize - 1, countMap);
            console.log("h1", {keep, del})
            return Math.min(keep, del);
        }

        if (countLen === 1) {
            if (remainingK >= count) {
                const strPostDeletion = merge(str, index, countMap);
                const countMapPostDeletion = {}
                compressString(strPostDeletion, countMapPostDeletion)
                const del = recursion(index + 1, remainingK - count, strPostDeletion, strPostDeletion.length, countMapPostDeletion); // convert a9 and '' 
                 console.log("h2", {keep, del})
                return Math.min(keep, del);
            }

            if (remainingK === count - 1) { // we can conver a9 to a
                const del = recursion(index + 1, 0, str, minSize - 1, countMap);
                 console.log("h3", {keep, del})
                return Math.min(keep, del)
            }

            else return Math.min(keep, minSize)
        }

        if (countLen === 2) {
            const strPostDeletion = merge(str, index, countMap);
            const countMapPostDeletion = {}
            compressString(strPostDeletion, countMapPostDeletion)

            // I think if we can choose del2 or del3, we should always choose del3 and hence save 1 branch of recursion
            const del1 = remainingK > count - 9 ? recursion(index + 1, remainingK - count + 9, str, minSize - 1, countMap) : minSize; // convert a55 to a9
            const del2 = remainingK > count - 1 ? recursion(index + 1, remainingK - count + 1, str, minSize - 2, countMap) : minSize; // convert a55 to a
            const del3 = remainingK > count ? recursion(index + 1, remainingK - count, strPostDeletion, strPostDeletion.length, countMapPostDeletion) : minSize; // convert a55 to ''
            console.log({del1, del2, del3})
            return Math.min(keep, del1, del2, del3);
        }

        console.log("not case matched", index, remainingK, str, minSize, countMap[index])
    }

    // we also have to mege string, for eg in case a2b2a3, if we delete b twice, str becomes a4
    function merge(str, j, countMap) { // j is the char to be deleted
        console.log('Merge called', str, j)
        let k = j + 1;
        while(countMap[k] == undefined && k < str.length) k++;
        if(k > str.length) return str;

        let i = j - 1;
        while(countMap[i] === undefined && i >=0) i--;
        if(i< 0) return str;
       
        console.log('i', i, 'j', j, 'k', k)

        if (str.charAt(i) === str.charAt(k)) {
            const count = countMap[i] + countMap[k];
            const l = k + String(countMap[k]) + 2
            // we need to replace i->l-1 with str[i]count
            const result = replaceSubstringBetweenIndices(str, i, l, `${str.charAt(i)}${count}`)
            console.log(result)
            return result
        }
        return str;
    }

    function replaceSubstringBetweenIndices(originalString, startIndex, endIndex, replacementString) {
        // Ensure indices are within valid bounds
        startIndex = Math.max(0, startIndex);
        endIndex = Math.min(originalString.length, endIndex);

        // Get the part of the string before the specified range
        const partBefore = originalString.slice(0, startIndex);

        // Get the part of the string after the specified range
        const partAfter = originalString.slice(endIndex);

        // Concatenate the parts with the replacement string
        return partBefore + replacementString + partAfter;
    }

    // @todo handle case when same string is 100 times (since s.length can be max 100)
    let result = recursion(0, k, str, str.length, countMap)
    console.log(result)
    return result

}

// O(N∗K∗Log(N)) - works
function getLengthOfOptimalCompression_2(s, k) {
    const n = s.length;
    const memo = new Map();

    function key(i, k, p, c) {
        return `${i},${k},${p},${c}`;
    }

    function recursion(index, remainingK, prevChar, prevCount) {
        if (remainingK < 0) return Infinity; // invalid path
        if (index === n) return 0; // end of string
        const memoKey = key(index, remainingK, prevChar, prevCount);
        if (memo.has(memoKey)) return memo.get(memoKey);

        // Option 1: delete this character
        let res = recursion(index + 1, remainingK - 1, prevChar, prevCount);

        // Option 2: keep this character
        const currChar = s[index];
        if (currChar === prevChar) {
        // same run
        // increase length only if prevCount changes from 1→2, 9→10, 99→100, etc
        const add = (prevCount === 1 || prevCount === 9 || prevCount === 99) ? 1 : 0;
        res = Math.min(res, add + recursion(index + 1, remainingK, prevChar, prevCount + 1));
        } else {
        // new run starts, contributes +1 (the char itself) + possibly digit
        res = Math.min(res, 1 + recursion(index + 1, remainingK, currChar, 1));
        }

        memo.set(memoKey, res);
        return res;
    }

    return recursion(0, k, '', 0);
}

// memoized version - gpt
function getLengthOfOptimalCompression_gpt(s, k) {
    const n = s.length;
    const memo = new Map();

    function helper(i, k) {
        if (k < 0) return Infinity;              // invalid
        if (i >= n || n - i <= k) return 0;      // delete all remaining
        const key = i + "," + k;
        if (memo.has(key)) return memo.get(key);

        // Option 1: delete s[i]
        let ans = helper(i + 1, k - 1);

        // Option 2: keep s[i], build a run
        let count = 0, del = 0;
        for (let j = i; j < n; j++) {
            if (s[j] === s[i]) {
                count++;
            } else {
                del++;
            }
            if (del > k) break;

            ans = Math.min(
                ans,
                runLength(count) + helper(j + 1, k - del)
            );
        }

        memo.set(key, ans);
        return ans;
    }

    function runLength(c) {
        if (c === 1) return 1;       // just 'a'
        return 1 + String(c).length; // 'a12' etc.
    }

    return helper(0, k);
}


// 12 / 144 testcases passed
function getLengthOfOptimalCompression_bruteForce_memoized(s, k) {
    const n = s.length
    const strToCompressed = {};
    const memo = {};
    let memoUsed = 0, totalRuns = 0
    function recursion(index, remainingK, str) {
        totalRuns++;
        if (index >= n || remainingK === 0) {
            const compressedStr = strToCompressed[str] ?? compressString(str)
            return compressedStr.length;
        }

        const key = `${index}_${remainingK}_${str}`;
        if (memo[key]) {
            memoUsed++
            return memo[key]
        }

        // Option 1: delete current char
        const strArr = [...str]
        strArr.splice(index, 1);
        const newStr = strArr.join('');
        const take = recursion(index, remainingK - 1, newStr); // not index +1, since you deleted current one

        // Option 2: keep current char
        const skip = recursion(index + 1, remainingK, str);

        memo[key] = Math.min(take, skip);
        return memo[key]
    }

    const result = recursion(0, k, s);
    console.log(`Total runs: ${totalRuns} | Memo used: ${memoUsed}`)
    console.log(result)

}

// 12 / 144 testcases passed
function getLengthOfOptimalCompression_bruteForce_1(s, k) {
    const n = s.length
    function recursion(index, remainingK, str) {
        if (index >= n || remainingK === 0) {
            return compressString(str).length;
        }

        // Option 1: delete current char
        const strArr = [...str]
        strArr.splice(index, 1);
        const newStr = strArr.join('')
        const take = recursion(index, remainingK - 1, newStr); // not index +1, since you deleted current one

        // Option 2: keep current char
        const skip = recursion(index + 1, remainingK, str);

        return Math.min(take, skip);
    }

    const result = recursion(0, k, s);
    console.log(result)
    return result;
}


// O(n)
function compressString(s, countMap = {}) {
    let result = '';
    if (s.length === 1) return s;
    let lastchar = s.charAt(0);
    let count = 1;
    for (let i = 1; i < s.length; i++) {
        if (s.charAt(i) === lastchar) {
            count++;
        } else {
            const l = result.length;
            countMap[l] = count
            result += count > 1 ? `${lastchar}${count}` : lastchar;
            lastchar = s.charAt(i);
            count = 1
        }
    }
    const l = result.length;
    countMap[l] = count
    result += count > 1 ? `${lastchar}${count}` : lastchar;
    return result;
}



getLengthOfOptimalCompression("aaabcccd", 2) // a3bc3d - expected: 4
// getLengthOfOptimalCompression("aabbaa", 2) // a2b2a2 - expected: 2