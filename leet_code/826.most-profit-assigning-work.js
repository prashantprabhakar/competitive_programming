/**
 * https://leetcode.com/problems/most-profit-assigning-work/?envType=daily-question&envId=2024-06-18
 * Difficulty: Medium
 * @todo try it again
 */


// Wrong ans: 51/57 tests passed
function maxProfitAssignment1(difficulty, profit, worker) {
    // we need to sort diff and profit
    let combined = difficulty.map((d, index) => ({ difficulty: d, profit: profit[index]}));
    combined.sort((a,b) => a.difficulty - b.difficulty);
    difficulty = combined.map(c => c.difficulty);
    profit = combined.map(c => c.profit);
    let maxProfitTill = [profit[0]];
    for(let i=1; i<profit.length; i++) {
        maxProfitTill[i] = Math.max(maxProfitTill[i-1], profit[i])
    }
    let result = 0;
    for(let i=0; i<worker.length; i++) {
        let workerAbility = worker[i];
        let index = binarySearch(difficulty, workerAbility, 0, difficulty.length - 1);
        let maxProfitWorkerCanGet = index >= 0 ? maxProfitTill[index] : 0;
        result += maxProfitWorkerCanGet;
    }
    console.log(result)
    return result
}

// find max number nearest to num which is less than or equal to num
function binarySearch(arr, num, start=0, end=arr.length-1) {
    if(num >= arr[end]) {
        return end;
    }
    if(num <= arr[start]) {
        return start-1;
    }

    if(end<start) {
        return -1;
    }

    let mid = start + Math.floor((end-start)/2);
    if(arr[mid] === num) return mid;

    if(num < arr[mid]) {
        // search in left part
        return binarySearch(arr, num, start+1, mid-1)
    }
    if(num > arr[mid]) {
        // search in right part
        return binarySearch(arr, num, mid, end-1)
    }
}

// Solution copied from https://leetcode.com/problems/most-profit-assigning-work/solutions/5329650/beats-100-explained-with-video-c-java-python-js-dp-interview-solution/?envType=daily-question&envId=2024-06-18
var maxProfitAssignment = function(difficulty, profit, worker) {
    let maxDifficulty = Math.max(...difficulty);
   let maxProfitUpToDifficulty = new Array(maxDifficulty + 1).fill(0);

   for (let i = 0; i < difficulty.length; i++) {
       maxProfitUpToDifficulty[difficulty[i]] = Math.max(maxProfitUpToDifficulty[difficulty[i]], profit[i]);
   }

   for (let i = 1; i <= maxDifficulty; i++) {
       maxProfitUpToDifficulty[i] = Math.max(maxProfitUpToDifficulty[i], maxProfitUpToDifficulty[i - 1]);
   }

   let totalProfit = 0;
   for (let ability of worker) {
       if (ability > maxDifficulty) {
           totalProfit += maxProfitUpToDifficulty[maxDifficulty];
       } else {
           totalProfit += maxProfitUpToDifficulty[ability];
       }
   }

   return totalProfit;
};


maxProfitAssignment([2,4,6,8,10], [10,20,30,40,50], [4,5,6,7]); //100
maxProfitAssignment([85,47,57], [24,66,99], [40,25,25]); // 0
maxProfitAssignment([13,37,58], [4,90,96], [34,73,45]); //190
maxProfitAssignment([68,35,52,47,86], [67,17,1,81,3], [92,10,85,84,82]); //324

35, 47, 52, 68, 86
17, 81, 1, 67, 3