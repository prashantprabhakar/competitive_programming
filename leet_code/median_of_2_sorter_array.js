
/**
 * https://leetcode.com/problems/median-of-two-sorted-arrays/
 */


function findMedianSortedArrays_old(arr1, arr2) {

    let i=0, j=0
    let result = []
  
    while(i !== arr1.length || j !== arr2.length) {
      if(i === arr1.length || arr1[i] > arr2[j]) {
        result.push(arr2[j])
        j++
      } else if(j === arr2.length || arr1[i] <= arr2[j]) {
        result.push(arr1[i])
        i++
      }
    }
      
    // let result = [...arr1, ...arr2].sort((a,b) => a-b)
    return findMedianSortedArrays_old(result)
    
      
};
  
function findMedian(arr){
let len = arr.length
let res;
if(len%2 === 1) res= arr[parseInt(len/2)]
else  res= (arr[parseInt(len/2)] + arr[parseInt(len/2-1)]) /2
return res
}


function median_2_sorted_arr(arr1, arr2) {

}