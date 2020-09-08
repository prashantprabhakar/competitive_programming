

let numbers = [10,20,20,5]
let requiredSum = 40

function checkPossibility(nums, includeNum, index=0, sum = 0) {
    // base case
    if(sum == requiredSum) return true
    if(index == nums.length || sum > requiredSum) return false

    let currentNo = nums[index]
    if(checkPossibility(nums, ))

    if(includeNum) return checkPossibility(nums, true, index+1 ,sum+currentNo)
    else return checkPossibility(nums, false,  index+1, sum)
}


console.log(driver(numbers))