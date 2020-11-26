/**
 * Source: https://leetcode.com/problems/merge-intervals/
 * platform: Leetcode
 * company: walmart
 */

/**
 * Given a collection of intervals, merge all overlapping intervals.
 * Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
 * Output: [[1,6],[8,10],[15,18]]
 * Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
 */

function merge_intervals(arr) {
    // assuming intervals are sequential
    if(!arr.length) return []

    arr.sort((a,b) => a[0] - b[0])

    let res = [arr[0]]

    for(let i=1; i<arr.length; i++) {
        let last = res[res.length-1]
        let current = arr[i]

        // current shift start after last has ended
        if(current[0] > last[1]) res.push(current)
        // current finished before last has started -- not gonna happen
        //else if(current[1] < last[0]) res.push(current)

        else {
            // merging shift
            last[0] = Math.min(current[0], last[0])
            last[1] = Math.max(current[1], last[1])
        }

       
    }
    return res
    
}

console.log(merge_intervals([[1,4],[4,5]]))
console.log(merge_intervals([[1,4],[0,4]]))
console.log(merge_intervals([[1,3],[2,6],[8,10],[15,18]])) // [[1,6],[8,10],[15,18]]
console.log(merge_intervals([[1,4],[0,1]])) //fails
console.log(merge_intervals([[1,3],[8,10],[15,18], [2,6]])) // [[1,6],[8,10],[15,18]]

