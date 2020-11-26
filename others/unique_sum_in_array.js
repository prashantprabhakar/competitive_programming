/**
    Find unique pairs of sum in array of unsorted array.
    e.g - array a[]= [4,3,1,2,5]
    print pairs whose sum is 5.
    answer = (1,4), (2,3)
    ### Assumption is each element is array in unique
    ### Note pair has only 2 elements
*/

function uniqueSum(arr, requiredSum) {

    let map = new Map()

    for(let i=0; i<arr.length; i++) {
        if(map.has(arr[i])) map.set(arr[i], map.get(arr[i]+1))
        else map.set(arr[i], 1)
    }

    let count = 0
    for(let i=0; i<arr.length; i++) {
        let req = requiredSum - arr[i]
        if(map.has(req)) {
            count++; // if numbers in array is unique
        }
    }

    // divide by 2 since pair is counted twice
    console.log(count/2)

}


uniqueSum([4,3,1,2,5], 5)