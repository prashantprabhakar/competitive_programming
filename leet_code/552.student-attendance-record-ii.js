/**
 * https://leetcode.com/problems/student-attendance-record-ii/description/
 */


// Bruteforce: Max call size
function checkRecord1(n) {
    const modulo = 10 ** 9 + 7;
    
    function recursion(n, absenceReamining, lateRemaining) {
        if(n === 0) return 1;

        const waysIfPresent = recursion(n-1, absenceReamining, 2);
        const waysIfAbsent = absenceReamining ? recursion(n-1, absenceReamining-1, 2) : 0;
        const waysIfLate = lateRemaining ? recursion(n-1, absenceReamining, lateRemaining - 1) : 0;
        return (waysIfPresent % modulo) + (waysIfAbsent % modulo) + (waysIfLate % modulo);

    }

    const result = recursion(n, 1, 2)
    console.log(result)
    return result;

}

// Recursion with memoization
function checkRecord2(n) {
    const modulo = 1000000000 + 7;
    const cache = {}

    function recursion(n, absenceReamining, lateRemaining) {
        if(n === 0) return 1;
        const key = `${n}_${absenceReamining}_${lateRemaining}`;
        if(cache[key]) return cache[key]

        const waysIfPresent = recursion(n-1, absenceReamining, 2);
        const waysIfAbsent = absenceReamining ? recursion(n-1, absenceReamining-1, 2) : 0;
        const waysIfLate = lateRemaining ? recursion(n-1, absenceReamining, lateRemaining - 1) : 0;
        const total = waysIfPresent + waysIfAbsent + waysIfLate;
        cache[key] =  total % modulo
        return cache[key]

    }

    const result = recursion(n, 1, 2)
    console.log(result)
    return result;

}

// iteration
function checkRecord(n) {
    const modulo = 1000000000  + 7;
    let dpLast = Array.from({ length: 2}, () => Array(3).fill(0));
    let dpCurrent = Array.from({ length: 2}, () => Array(3).fill(0));

    dpLast[0][0] = 1;
    for(let i=0; i<n; i++) {
        for(let countA = 0; countA < 2; countA++) {
            for(let countL = 0; countL < 3; countL++) {
                // choose "P"
                dpCurrent[countA][0] = (dpCurrent[countA][0] + dpLast[countA][countL]) % modulo;
                
                // choosen "A";
                if(countA === 0)
                    dpCurrent[countA+1][0] = (dpCurrent[countA + 1][0] + dpLast[countA][countL]) % modulo;

                // choose "L"
                if(countL < 2)
                    dpCurrent[countA][countL + 1] = (dpCurrent[countA][countL + 1] + dpLast[countA][countL ]) % modulo
            }
        }
        dpLast = dpCurrent;
        dpCurrent = Array.from({ length: 2 }, () => Array(3).fill(0));
    }

    let result = 0;
    for(let countA = 0; countA < 2; countA++) {
        for(let countL = 0; countL < 3; countL++) {
            result = (result + dpLast[countA][countL]) % modulo
        }
    }
    console.log(result)
    return result

}

checkRecord(2) // 8
checkRecord(1) // 3
checkRecord(10101) // 183236316