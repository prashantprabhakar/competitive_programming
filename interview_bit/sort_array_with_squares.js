/**
 * Source: https://www.interviewbit.com/problems/sort-array-with-squares/
 * Given a sorted array A containing N integers both positive and negative.

    You need to create another array containing the squares of all the elements in A and return it in non-decreasing order.

    Try to this in O(N) time.

    i/p:  [-6, -3, -1, 2, 4, 5]
    o/p:  [1, 4, 9, 16, 25, 36]
 */

function sort_array_with_squares(arr) {
    let positve_arr = [], negative_arr = []
    for(let i=0; i<arr.length; i++) {
        if(arr[i] < 0) negative_arr.push(arr[i]* arr[i])
        else positve_arr.push(arr[i] * arr[i])
    }

    let final_res = []

    // merge positive array and reverse negative array
    let i=0; j=negative_arr.length-1
    while(i<positve_arr.length && j>=0) {

        if(positve_arr[i] < negative_arr[j]) {
            final_res.push(positve_arr[i])
            i++
        } else {
            final_res.push(negative_arr[j])
            j--
        }
    }

    // push remaining elem of positive or negative array
    if(i !== positve_arr.length) {
        for(let x=i; x<positve_arr.length; x++) {
            final_res.push(positve_arr[x])
        }
    } else {
        for(let x=j; x>=0; x--) {
            final_res.push(negative_arr[x])
        }
    }

    return final_res

}

// O(n) time and O(n) space
function sort_array_with_squares1(arr) {
    let res = []
    let leftPointer=0, rightPointer=arr.length-1, resPointer = arr.length-1;
    while(leftPointer<=rightPointer) {
        if(Math.abs(arr[leftPointer]) > Math.abs(arr[rightPointer])) {
            res[resPointer] = arr[leftPointer] * arr[leftPointer]
            leftPointer++
        } else {
            res[resPointer] = arr[rightPointer] * arr[rightPointer]
            rightPointer--
        }
        resPointer --
    }
    return res
}


//sort_array_with_squares([-6, -3, -1, 2, 4, 5])
let arr = [ -855, -847, -747, -708, -701, -667, -666, -618, -609, -536, -533, -509, -500, -396, -336, -297, -284, -229, -173, -173, -132, -38, -5, 35, 141, 169, 281, 322, 358, 421, 436, 447, 478, 538, 547, 644, 667, 673, 705, 711, 718, 724, 726, 811, 869, 894, 895, 902, 912, 942, 961 ]
let res1 = sort_array_with_squares(arr)
let res2 = sort_array_with_squares1(arr)

console.log(res2)
