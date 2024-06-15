/**
 * https://leetcode.com/problems/ipo/description/
 * Difficulty: Hard
 */



// Initial intutive solution, greedy algo.
// Why I think this won't work is because ;et's say we can take index 0 because of our w < capitals[0], so we'd skip it,
// but at later stage, we may accumulate capital which makes project 0 possible. This case is missing
// sample failing test findMaximizedCapital(2, 0, [500, 100], [100, 0])
// TLE: 10/35 passed
function findMaximizedCapital1(k, w, profits, capital) {

    function internal(k, w, profits, capital, index, totalCapital) {

        // base cases
        if(k === 0 || index === profits.length ){
            return totalCapital;
        }
        
        let canChooseProject = totalCapital >= capital[index]
        // choose project at index
        let choice1 = canChooseProject ? 
            internal(k-1, w-capital[index] + profits[index], profits, capital, index+1, totalCapital + profits[index]) : totalCapital
        // don't choose project at index
        let choice2 = internal(k, w, profits, capital, index+1, totalCapital);

        return Math.max(choice1, choice2);
    }
    let result = internal(k, w, profits, capital, 0, w);
    console.log(result)
    return result
}

// This solution assumes that picking "atmost" k projects is possible,. What if not?
function findMaximizedCapital2(k, w, profits, capital) {
    // sort profit and capital by profit
    let combined = profits.map((profit, index) => {
        return { profit: profit, cap: capital[index] };
    });
    combined.sort((a, b) => b.profit - a.profit);

    profits = combined.map(item => item.profit);
    capital = combined.map(item => item.cap);

    let total = w;
    let isVisted = {};
    // O(n * k)
    while(k > 0 && Object.keys(isVisted).length < profits.length) {
        for(let i=0; i<profits.length; i++) {
            if(k === 0) break
            if(total >= capital[i] && !isVisted[i]) {
                total += profits[i];
                k--;
                isVisted[i] = true
                // add break here since as soon as our total increases, we try to find next max profit we can match
                break
            }
        }
    }
    console.log(total)
    return total
}

// Better than 1 and 2. Solves 32/35 cases, but gets TLE for some cases where profits is same.
// Time complexity: O(n * k)
function findMaximizedCapital3(k, w, profits, capital) {
    // sort profit and capital by profit
    let combined = profits.map((profit, index) => {
        return { profit: profit, cap: capital[index] };
    });
    combined.sort((a, b) => b.profit - a.profit);

    profits = combined.map(item => item.profit);
    capital = combined.map(item => item.cap);

    let total = w;
    let isPicked = {};
    // O(n * k)
    while(k > 0 && Object.keys(isPicked).length < profits.length) {
        const pickedBeforeCount = Object.keys(isPicked).length
        for(let i=0; i<profits.length; i++) {
            if(k === 0) break
            if(total >= capital[i] && !isPicked[i]) {
                total += profits[i];
                k--;
                isPicked[i] = true
                // add break here since as soon as our total increases, we try to find next max profit we can match
                break
            }
        }
        // if you have reached end and couln;t pick any new project, return result
        if(pickedBeforeCount === Object.keys(isPicked).length) break
    }
    console.log(total)
    return total
}

// Heap solution: Copied
// Solution link: https://leetcode.com/problems/ipo/solutions/5315196/greedy-proof-ipo
class MaxHeap {
    constructor() {
        this.heap = [];
    }
    
    insert(val) {
        this.heap.push(val);
        this.bubbleUp();
    }
    
    extractMax() {
        const max = this.heap[0];
        const last = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.sinkDown();
        }
        return max;
    }
    
    size() {
        return this.heap.length;
    }
    
    bubbleUp() {
        let idx = this.heap.length - 1;
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            if (this.heap[idx] <= this.heap[parentIdx]) break;
            [this.heap[idx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[idx]];
            idx = parentIdx;
        }
    }
    
    sinkDown() {
        let idx = 0, length = this.heap.length;
        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let swap = null;
            
            if (leftChildIdx < length && this.heap[leftChildIdx] > this.heap[idx]) {
                swap = leftChildIdx;
            }
            
            if (rightChildIdx < length && this.heap[rightChildIdx] > this.heap[idx] && this.heap[rightChildIdx] > this.heap[leftChildIdx]) {
                swap = rightChildIdx;
            }
            
            if (swap === null) break;
            [this.heap[idx], this.heap[swap]] = [this.heap[swap], this.heap[idx]];
            idx = swap;
        }
    }
}

// O(n log n)
var findMaximizedCapital = function(k, w, profits, capital) {
    let projects = [];
    for (let i = 0; i < profits.length; i++) {
        projects.push([capital[i], profits[i]]);
    }
        
    projects.sort((a, b) => a[0] - b[0]);
    let maxHeap = new MaxHeap();
        
    for (let i = 0; i < projects.length; i++) {
        if (w >= projects[i][0]) {
            maxHeap.insert(projects[i][1]);
        } else if (k > 0 && maxHeap.size() > 0) {
            k--;
            i--;
            w += maxHeap.extractMax();
        }
    }
        
    while (maxHeap.size() > 0 && k > 0) {
        w += maxHeap.extractMax();
        k--;
    }
        
    return w;
};

findMaximizedCapital(2, 0, [1,2,3], [0,1,1]) // 4
findMaximizedCapital(3,0, [1,2,3], [0,1,2]) // 6
findMaximizedCapital(11, 11, [1,2,3], [11,12,13]) // 17

findMaximizedCapital(2, 0, [500, 100], [100, 0]) // 600
findMaximizedCapital(1, 0, [1,2,3], [1,1,2])
 // x -> captial < x && max profit