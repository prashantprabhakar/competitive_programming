let numbers = [10, 20, -1, 31,5]
let requiredSum = 40

function checkPossibility(nums, index=0, sum = 0) {
    // base case
    if(sum == requiredSum) return true
    if(index == nums.length || sum > requiredSum) return

    let currentNo = nums[index]
    //if(checkPossibility(nums, ))
    if (
        checkPossibility(nums, index+1 ,sum+currentNo) ||
        checkPossibility(nums, index+1, sum)
    ) {
        return true
    }

   
    return false;
}


console.log(checkPossibility(numbers))