/**
 * source: https://www.interviewbit.com/problems/perfect-peak-of-array/
 * You need to check that whether there exist a element which is strictly greater than all the elements on left of it and strictly smaller than all the elements on right of it.
 * Do not consider the corner elements i.e A[0] and A[N-1] as the answer.

 */

// dirty approach -> O(n^2) complexity
function perfectPeakExists(arr) {
    for(let i=1; i<arr.length-1; i++) {
        let isPeak = true
        for(let j=0; j<arr.length; j++) {
            if(j<i && arr[j] >= arr[i])  {
                isPeak = false
                break
            }
            if(j>i && arr[j] <= arr[i]) {
                isPeak = false
                break
            }
        }
        if(isPeak) return 1
    }
    return 0
}


// Based on solution approach
// Time O(n); space (n)

function perfectPeakExists1(arr) {
    let leftMax = [arr[0]] // keeps track of max element for 0 to i-1
    let rigthMin = [] // keeps track of max element from i+1 to N

    for(let i=1; i<arr.length; i++) {
        leftMax[i] = Math.max(arr[i-1], leftMax[i-1])
    }

    rigthMin[arr.length - 1] = arr[arr.length-1]
    for(let i=arr.length-2; i>=0; i--) {
        rigthMin[i] = Math.min(arr[i+1], rigthMin[i+1])
    }

    // ignore forst and last elem
    for(let i=1; i<arr.length-1; i++) {
        if(arr[i] > leftMax[i] && arr[i] < rigthMin[i]) return 1
    }
    return 0
}


let arr1 = [ 9895, 30334, 17674, 23812, 20038, 25668, 6869, 1870, 4665, 27645, 7712, 17036, 31323, 8724, 28254, 28704, 26300, 25548, 15142, 12860, 19913, 32663, 32758 ]

let arr2 = [1,5,3,7, 15,11,10]

console.log(perfectPeakExists(arr2))
console.log(perfectPeakExists1(arr2))