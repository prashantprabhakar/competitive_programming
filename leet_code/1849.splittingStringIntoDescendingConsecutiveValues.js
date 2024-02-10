/**
 * https://leetcode.com/problems/splitting-a-string-into-descending-consecutive-values/
 * 1849. Splitting a String Into Descending Consecutive Values
 */

/**
 * @TODO:  splitString3 doesn't work. why??
 */

function splitString(s) {

    function splitInternal(s, index, prevValue) {
        if(index === s.length) return true;

        for(let i=index; i<s.length; i++) {
            const val = Number(s.slice(index,i+1));
            if(
                ( 
                    i !== s.length-1 &&  // if we take i === s.length-1, there will be only 1 substring
                    prevValue === undefined ||  // when checking for first substr(number), there is no prev value
                    prevValue - val === 1 // if prevValue is present, it must be strictly 1 greater than current value
                ) && 
                splitInternal(s, i+1, val) // if all the above conditions are true, we call `splitInternal` fn
            ) {
                return true
            }

        }
        return false;
    }

    return splitInternal(s, 0, undefined);

}



function splitString2(s) {

    function splitInternal(s, index, prevValue) {
        if(index === s.length) return true;
        
        for(let i=index; i<s.length; i++) {
            const val = Number(s.slice(index,i+1));
            const isOnlyOneString = (i === s.length - 1) && (prevValue === undefined); //  this means we have reached end without any prev value. We need atleast 2 substringd
            const isValidValue = prevValue === undefined || prevValue - val === 1; // if prevValue is present, it must be strictly 1 greater than current value
            if(!isOnlyOneString && isValidValue) {
                if(splitInternal(s, i+1, val)) {
                    return true
                }
            }
            // when current value becomes greater than prev value, there is no point going further as the val wil keep  increasing
            else if(prevValue && prevValue - val < 1) {
                break
            }

        }
        return false;
    }

    return splitInternal(s, 0, undefined);

}



console.log("\n")

console.log(splitString2('1234'))
console.log(splitString2("050043"))