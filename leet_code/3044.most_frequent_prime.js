/**
 * https://leetcode.com/problems/most-frequent-prime/description/
 * 3044. Most Frequent Prime
 * Weekly Contest Feb 18 2024
 */

function mostFrequentPrime(mat) {
    const ROW = mat.length;
    const COL = mat[0].length;
    const isValidCell = ([i, j]) =>  i>=0 && i < ROW && j>=0 && j< COL;

    const possibleMoves = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, 1],
        [1, 1], [1, 0], [1, -1],
        [0, -1]
    ]

    const isPrimeMap = {};
    const freqMap =  {};
    let result = -1, resultFreq = 0;

    for(let i=0; i<ROW; i++) {
        for(let j=0; j<COL; j++) {
            let numsSet = new Set();
            for(let k=0; k<possibleMoves.length; k++) {
                const nextMove = possibleMoves[k];
                let num = 0
                let cell = [i, j];
                while(isValidCell(cell)) {
                    let cellVal = mat[cell[0]][cell[1]];
                    num = (num * 10) + cellVal
                    if(isPrimeMap[num] === undefined) {
                        isPrimeMap[num] =  isPrime(num);
                    }
                    if(num > 10 && isPrime(num)) {
                        freqMap[num] = freqMap[num] ? freqMap[num] + 1 : 1
                        if(freqMap[num] > resultFreq) {
                            result = num;
                            resultFreq = freqMap[num];
                        }

                        if(freqMap[num] === resultFreq) {
                            result = Math.max(result, num)
                        }
                    }
                    cell = [cell[0] + nextMove[0], cell[1] + nextMove[1]]
                    numsSet.add(num)
                }               
            }
        }
    }
    return result


}

function isPrime(num) {
    let sq = Math.sqrt(num);
    for(let i=2; i<=sq; i++) {
        if(num %i === 0) return false;
    }
    return true;
}

mostFrequentPrime( [[1,1],[9,9],[1,1]]) // 19
mostFrequentPrime([[9,7,8],[4,6,5],[2,8,6]]) // 97
mostFrequentPrime([[4,9],[1,4]]) // 41
