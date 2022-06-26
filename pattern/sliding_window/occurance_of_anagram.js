/**
    @GFG: https://www.geeksforgeeks.org/count-occurrences-of-anagrams/
    Count Occurrences of Anagrams
 */
/**
    Given a word and a text, return the count of the occurrences of anagrams of the word in the text.
    For eg: anagrams of word for are for, ofr, rof etc.

    Input : forxxorfxdofr, for
    Output : 3
    Explanation : Anagrams of the word for - for, orf, 
    ofr appear in the text and hence the count is 3.

    Input : aabaabaa, aaba
    Output : 4
    Explanation : Anagrams of the word aaba - aaba, 
    abaa each appear twice in the text and hence the
    count is 4.
 */

Map.prototype.safeIncValue = function(key, defaultVal)  {
    if(this.has(key)) this.set(key, this.get(key)+1);
    else this.set(key, defaultVal);                                                                                                                                                 
}

function countAnagrams1(str, ptr) {
    let ptrMap = new Map(),  res = 0;

    ptr.split('').forEach(char => ptrMap.safeIncValue(char, 1));
    let strMap = new Map();
    
    let i=0, j=0, count = 0;
    // pre-first window
    while( j < ptr.length - 1) {
        let char = str.charAt(j);
        if(ptrMap.has(char)) {
            strMap.safeIncValue(char, 1);
            if(strMap.get(char) === ptrMap.get(char)) count++;
        }
        j++;
    }
    if(count === ptrMap.size) res++;

    while(j < str.length) {
        // adding elem (str[j]) to window
        let char = str.charAt(j);
        if(ptrMap.has(char)) {
            strMap.safeIncValue(char, 1);
            if(strMap.get(char) === ptrMap.get(char)) count++;
        }

        // check for result
        if(count === ptrMap.size) res++;

        // removal ith elem
        let charRemoved = str.charAt(i);
        if(ptrMap.has(charRemoved)) {
            strMap.set(charRemoved, strMap.get(charRemoved)-1);
            if(strMap.get(char) === ptrMap.get(char)-1) count--;
        }

        i++;
        j++

    }

    console.log(res);
    return res;

}


function countAnagrams2(str, ptr) {

    let ptrMap = new Map(), k  = ptr.length, res = 0;
    ptr.split('').forEach(char => ptrMap.safeIncValue(char, 1));

    let count = ptrMap.size;
    let i=0, j = 0;
    // first winndow
    while(j < k-1) {
        const char = str.charAt(j);
        if(ptrMap.has(char)) {
            ptrMap.set(char, ptrMap.get(char)-1);
            if(ptrMap.get(char) === 0) count--;
        }
        j++;
    };
    
    while(j < str.length) {
        let char = str.charAt(j);
        if(ptrMap.has(char)) {
            ptrMap.set(char, ptrMap.get(char)-1);
            if(ptrMap.get(char) === 0) count--;
        }
        // result calc
        if(count === 0) res++;
         //  removal of item from window
         let removalChar = str.charAt(i);
         if(ptrMap.has(removalChar)) {
            if(ptrMap.get(removalChar) === 0) count++
            ptrMap.set(removalChar, ptrMap.get(removalChar) + 1);

         }
        
        // slice window
        i++;
        j++;

    }

   
    console.log(res);
    return res;

}

countAnagrams1('forxxorfxdofr', 'for');
countAnagrams1('aabaabaa', 'aaba')
countAnagrams1('aabaa', 'aaa')

console.log("\n")

countAnagrams2('forxxorfxdofr', 'for');
countAnagrams2('aabaabaa', 'aaba')
countAnagrams2('aabaa', 'aaa')